import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';  // Importación de MatTableDataSource
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
export class UserListComponent implements OnInit, OnChanges {

  @Input() users: User[] = [];
  dataSource = new MatTableDataSource<User>();  // Uso de MatTableDataSource
  displayedColumns: string[] = ['user_id', 'email', 'phone_number', 'roles', 'bounded_to', 'created_at', 'status', 'actions'];

  constructor() {}

  ngOnInit(): void {
    this.dataSource.data = this.users;  // Inicializa la data source con los usuarios
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users']) {
      console.log("There are changes");
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
    console.log('Edit user', user);
  }

  changeStatus(user: User): void {
    console.log('Change status', user);
  }

  deleteUser(user: User): void {
    console.log('Delete user', user);
  }
}
