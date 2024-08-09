import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { UserListComponent } from '../../../components/user-list/user-list.component';
import { MainLayoutComponent } from '../../../components/main-layout/main-layout.component';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/users/user.service';

// Dialogs
import { UserSearchComponent } from '../../../components/user-search/user-search.component'

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [MainLayoutComponent, UserListComponent, MatIconModule, MatButtonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  users: User[] = [];

  constructor(private userService: UserService, private dialog: MatDialog) {}

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
    console.log("Action: " + action);

    let ref;

    switch (action) {
      case 'add':
        ref = this.dialog.open(UserSearchComponent);
        break;
      case 'search':
        this.dialog.open(UserSearchComponent);
        break;
      case 'export':
        this.dialog.open(UserSearchComponent);
        break;
      default:
        break;
    }
  }
}
