import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    console.log(user);
    if (user) {
      this.user = JSON.parse(user);
    } else {
      this.router.navigate(['/']);
    }
  }

  redirectToLogin(): void {
    this.router.navigate(['/']);
  }
}
