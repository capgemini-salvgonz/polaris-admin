import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpErrorResponse } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.email === '' || this.password === '') {
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: response => {
        this.error = '';
        const decodedToken: any = jwt_decode(response.at);
        const user = {
          email: decodedToken.email,
          roles: response.rl,
          token: response.at
        };

        if (user.roles.includes('ADM') || user.roles.includes('FS') || user.roles.includes('TS')) {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/welcome']);
        } else {
          this.email = '';
          this.password = '';
          alert('You do not have permission to access this application.');
        }
      },
      error: (error: HttpErrorResponse) => {
        this.email = '';
        this.password = '';
        if (error.status === 401) {
          this.error = 'Password or user incorrect';
        } else {
          this.error = 'An unexpected error occurred';
        }
      }
    });
  }

  ngOnInit() {
    localStorage.clear();
  }
}
