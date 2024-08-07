import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

import { CredentialService } from '../../services/credentials/credential.service'

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user: any; 

  constructor(private router: Router, private credService: CredentialService) {}

  ngOnInit(): void {
    const user = this.credService.getUser();
    if (user) {
      this.user = user;
    } else {
      this.router.navigate(['/']);
    }
  }
}
