import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './feature/login/login.component'
import { NavbarComponent } from './feature/navbar/navbar.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,  RouterOutlet, CommonModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'polaris-admin';

}
