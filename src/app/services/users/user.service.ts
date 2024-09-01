import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CredentialService } from "../credentials/credential.service"
import { environment } from '../../../environments/environment';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.padminHostName + '/api/v1/padmin/users';
  jwt : string | null = ""
  
  constructor (private credService : CredentialService, private http: HttpClient) {  
    this.jwt = credService.getJwt()
  }

  /**
   * Retrieve the list of all users
   * @returns user list
   */
  getUsers(): Observable<User[]> {
    let headers = this.credService.getHeaders()
    return this.http.get<User[]>(this.apiUrl, {headers});
  }

  /**
   * Create a user
   * @param user 
   * @returns 
   */
  postNewUser(user: User) : Observable<User> {
    let headers = this.credService.getHeaders();
    return this.http.post<User>(this.apiUrl, user, { headers });
  }

  /**
   * Remove a user from database
   * @param userId 
   * @returns 
   */
  deleteUser(userId: number): Observable<any> {
    let headers = this.credService.getHeaders();
    const url = `${this.apiUrl}/${userId}`
    return this.http.delete(url, {headers});
  }

  /**
   * Update user information
   * @param user 
   * @returns 
   */
  putUser(user: User): Observable<any> {
    let headers = this.credService.getHeaders();
    const url = `${this.apiUrl}/${user.user_id}`;
    return this.http.put(url, {
      "email":        user.email,
      "phone_number": user.phone_number,
      "roles":        user.roles,
      "status":       user.status
    }, {headers});
  }

}