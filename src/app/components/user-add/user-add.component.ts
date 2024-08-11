import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { User } from '../../models/user.model';


@Component({
  selector: 'user-add',
  standalone: true,
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class UserAddComponent {
  userForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<UserAddComponent>, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      roles: ['', Validators.required]
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  addUser(): void {
    if (this.userForm.valid) {
      const user : User = {
        user_id: 0,
        email: this.userForm.value.email,
        phone_number: this.userForm.value.phone_number,
        roles: this.userForm.value.roles,
        bounded_to: "",
        created_at: "",
        status: "pending_confirmation",
      }
      this.dialogRef.close(user);
    }
  }
}
