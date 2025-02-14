import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableDataSource } from '@angular/material/table';  // Importación de MatTableDataSource
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

import { CredentialService } from '../../services/credentials/credential.service'
import { UserService } from '../../services/users/user.service'
import { User } from '../../models/user.model';
import { ConfirmationDialog } from '../dialogs/confirmation-dialog/confirmation-dialog'
import { UserAddComponent } from '../../components/user-add/user-add.component'

@Component({
  selector: 'user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges {

  users: User[] = [];

  // Context variables
  currentRole? : string | null = null;

  // Table data source
  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = ['user_id', 'email', 'phone_number', 'roles', 'bounded_to', 'created_at', 'status', 'actions'];

  /**
   * Constructor
   * @param credService used to know the role of the current user
   * @param userService used to update and delete users
   * @param dialog      used to manage dialog references
   */
  constructor(private credService: CredentialService, private userService : UserService, private dialog: MatDialog) {
    this.currentRole = this.credService.getUser()?.roles;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
        this.dataSource.data = this.users;
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users']) {
      this.dataSource.data = changes['users'].currentValue;  // Actualiza la data source cuando hay cambios
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.dataSource.filter = filterValue.trim().toLowerCase();  // Aplica el filtro a la data source
  }

  decodeBase64(value: string): string {
    return value ? atob(value) : '';
  }

  editUser(user: User): void {
    const userToUpdate = Object.assign({}, user);
    let dialogRef: MatDialogRef<any> = this.dialog.open(UserAddComponent, {width:'40%', data: userToUpdate});
    dialogRef.afterClosed().subscribe(editedUser => {
      if (editedUser) {
        this.userService.putUser(editedUser).subscribe({
          next: (result) => {
            user.email = editedUser.email;
            user.phone_number = editedUser.phone_number;
            user.roles = editedUser.roles;
            if(result == null) {
              alert("Información actualizada correctamente");
            }
          },
          error: (err) => {
            alert("Hubo un error al actualizar el usuario. Por favor, contacta a tu administrador.");
          }
        });
      } 
    });
  }

  /**
   * Change user status: active|blocked
   * @param user 
   */
  changeStatus(user: User): void {
    const newStatus = user.status === "active" ? "blocked":"active";
    const userUpdatedInformation = Object.assign({}, user);
    userUpdatedInformation.status = newStatus;

    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '500px',
      data: { 
        title: 'Cambio de estatus', 
        question: `¿Realmente desea cambiar el estatus del usuario a: ${newStatus}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.putUser(userUpdatedInformation).subscribe({
          next: () => {
            user.status = newStatus;
          },
          error: (err) => {
            alert(`There was an error trying to change the status to ${newStatus}`)
          }
        });
      }
    });
    
  }

  /**
   * Add new user
   * @param newUser 
   */
  addUserToList(newUser: User): void {
    this.users.push(newUser);
    this.dataSource.data = this.users; 
  }

  /**
   * Delete a user from de database using padmin_api
   */
  deleteUser(user: User): void {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '450px',
      data: { 
        title: 'Eliminar usuario', 
        question: `¿Realmente desea eliminar al usuario: ${user.email}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(user.user_id).subscribe({
          next: () => {
            this.users = this.users.filter(u => u.user_id !== user.user_id);
            this.dataSource.data = this.users;
          },
          error: (err) => {
            console.error('Error deleting user:', err);
          }
        });
      }
    });
  }
}
