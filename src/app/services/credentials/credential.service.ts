import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CredentialService {
  private email : string | null = null
  private roles: string | null = null
  private jwt:  string | null = null

  constructor() {}

  setUser(email: string, roles: string, jwt: string) : void {
    this.email = email;
    this.roles = roles;
    this.jwt = jwt;
  }

  getUser(): { email: string | null; roles: string | null } | null {
    if (this.email) {
      return {
        email: this.email,
        roles: this.roles
      }
    }
    return null;
  }

  getJwt(): string|null {
    return this.jwt;
  }
}