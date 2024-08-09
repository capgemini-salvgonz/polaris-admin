import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { User } from '../../models/user.model';

@Component({
  selector: 'user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users: User[] = [];
  filteredUsers: User[] = [];
  displayedColumns: string[] = ['user_id', 'email', 'phone_number', 'roles', 'bounded_to', 'created_at', 'status', 'actions'];

  constructor() {}

  ngOnInit(): void {
    this.filteredUsers = this.users;
  }

  decodeBase64(value: string): string {
    return value ? atob(value) : '';
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.email.toLowerCase().includes(filterValue) || user.phone_number.toLowerCase().includes(filterValue)
    );
  }

  editUser(user: User): void {
    // Lógica para editar usuario
    console.log('Edit user', user);
  }

  changeStatus(user: User): void {
    // Lógica para cambiar el estatus del usuario
    console.log('Change status', user);
  }

  deleteUser(user: User): void {
    // Lógica para eliminar usuario
    console.log('Delete user', user);
  }
}
