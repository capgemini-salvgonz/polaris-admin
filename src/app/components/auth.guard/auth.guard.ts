import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CredentialService } from "../../services/credentials/credential.service"

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: CredentialService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getUser()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
