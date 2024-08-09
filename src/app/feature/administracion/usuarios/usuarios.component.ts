import { Component } from '@angular/core';
import { UserListComponent } from '../../../components/user-list/user-list.component';
import { MainLayoutComponent } from '../../../components/main-layout/main-layout.component';

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/users/user.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [MainLayoutComponent, UserListComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

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
}
