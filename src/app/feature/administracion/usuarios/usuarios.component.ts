import { Component, ChangeDetectorRef } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { UserListComponent } from '../../../components/user-list/user-list.component';
import { MainLayoutComponent } from '../../../components/main-layout/main-layout.component';
import { User } from '../../../models/user.model';
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
  users: User[] = [
    {
        "user_id": 1,
        "email": "salvador.gnolasco@2code.com.mx",
        "phone_number": "5543590849",
        "roles": "ADM",
        "bounded_to": "",
        "created_at": "2024-07-26T23:37:45Z",
        "status": "active"
    },
    {
        "user_id": 2,
        "email": "salvador.gnolasco@hotmail.com",
        "phone_number": "5543590849",
        "roles": "HP",
        "bounded_to": "",
        "created_at": "2024-07-28T17:50:27Z",
        "status": "pending_confirmation"
    },
    {
        "user_id": 3,
        "email": "chava.gnolasco@gmail.com",
        "phone_number": "",
        "roles": "AST",
        "bounded_to": "NTU0MzQ5NDcwODtyaWNhcmRvLmxvcGV6QDJjb2RlLmNvbS5teAo=",
        "created_at": "2024-08-02T17:12:06Z",
        "status": "pending_confirmation"
    }
]

  constructor(private userService: UserService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  openDialog(action: string): void {
    let dialogRef: MatDialogRef<any> | null = null;

    switch (action) {
      case 'add':
        dialogRef = this.dialog.open(UserAddComponent);
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

    if (dialogRef) {
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.users = [...this.users, result];
          this.cdr.detectChanges();
        }
      });
    }
  }
}
