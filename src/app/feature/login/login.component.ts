import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    localStorage.clear();
    this.authService.login(this.email, this.password).subscribe(response => {
      // Decode the JWT to extract email and roles
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
    });
  }

  ngOnInit() {
    localStorage.clear();
  }
  
}
