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

  getUsers(): Observable<User[]> {
    let headers = this.credService.getHeaders()
    return this.http.get<User[]>(this.apiUrl, {headers});
  }


  postNewUser(user: User) : Observable<User> {
    let headers = this.credService.getHeaders();
    return this.http.post<User>(this.apiUrl, user, { headers });
  }

  deleteUser(userId: number): Observable<any> {
    let headers = this.credService.getHeaders();
    const url = `${this.apiUrl}/${userId}`
    return this.http.delete(url, {headers});
  }

}