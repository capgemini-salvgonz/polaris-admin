import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { UserListComponent } from '../../../components/user-list/user-list.component';
import { MainLayoutComponent } from '../../../components/main-layout/main-layout.component';
import { UserService } from '../../../services/users/user.service';

// Dialogs
import { UserSearchComponent } from '../../../components/user-search/user-search.component'
import { UserAddComponent } from '../../../components/user-add/user-add.component'

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [MainLayoutComponent, UserListComponent, MatIconModule, MatButtonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  @ViewChild(UserListComponent) userListComponent!: UserListComponent;

  constructor(private userService: UserService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  openDialog(action: string): void {
    let dialogRef: MatDialogRef<any> | null = null;

    switch (action) {
      case 'add':
        dialogRef = this.dialog.open(UserAddComponent, {width:'40%'});
        this.addUser(dialogRef);
        break;
      case 'search':
        dialogRef = this.dialog.open(UserSearchComponent);
        break;
      case 'export':
        dialogRef = this.dialog.open(UserSearchComponent);  
        break;
      default:
        break;
    }
  }

  addUser(dialogRef: MatDialogRef<any> | null): void {
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(user => {
        if (user) {
          this.userService.postNewUser(user).subscribe({
            next : (newUser) => {
              this.userListComponent.addUserToList(newUser);
            },
            error: (err) => {
              alert("There were an error creating the user. Please contact to your administrator.");
            }
          })
        }
      });
    }
  }


}
