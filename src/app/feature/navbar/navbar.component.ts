import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatMenuTrigger],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() user: any;

  constructor(private router: Router) {}

  redirectToUser(): void {
    this.router.navigate(['/administracion/usuarios']);
  }

  redirectToLogin(): void {
    this.router.navigate(['/']);
  }
}
