import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { User } from '../../models/user.model';
import { UserService } from '../../services/users/user.service';
import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';

@Component({
  selector: 'user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MainLayoutComponent,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  displayedColumns: string[] = ['user_id', 'email', 'phone_number', 'roles', 'bounded_to', 'created_at', 'status'];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
        this.filteredUsers = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  decodeBase64(value : string) {
    if (value) {
      return atob(value);
    }
    return "";
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.email.toLowerCase().includes(filterValue) || user.phone_number.toLowerCase().includes(filterValue)
    );
  }
}
