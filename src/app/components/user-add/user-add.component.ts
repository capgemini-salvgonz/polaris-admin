import { Component, Inject, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
export class UserAddComponent implements OnInit {
  userForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<UserAddComponent>, private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public user: User|null ) {
      
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      roles: ['', Validators.required]
    });
  }

  /**
   * Set default values when a user is defined
   */
  ngOnInit(): void {
    if (this.user) {
      this.userForm.patchValue({
        email: this.user.email,
        phone_number: this.user.phone_number,
        roles: this.user.roles
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  executeAction(): void {
    if (this.userForm.valid) {
        const user: User = this.user ? this.editUser() : this.addUser();
        this.dialogRef.close(user);
    }
  }


  addUser(): User {
    return {
      user_id: 0,
      email: this.userForm.value.email,
      phone_number: this.userForm.value.phone_number,
      roles: this.userForm.value.roles,
      bounded_to: "",
      created_at: "",
      status: "pending_confirmation",
    }
  }

  editUser(): User {
    return {
        user_id: this.user!.user_id,
        email: this.userForm.value.email,
        phone_number: this.userForm.value.phone_number,
        roles: this.userForm.value.roles,
        bounded_to: this.user!.bounded_to,
        created_at: this.user!.created_at,
        status: this.user!.status,
    };
  }

}
