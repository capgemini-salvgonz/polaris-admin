import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CredentialService } from "../credentials/credential.service"
import { environment } from '../../../environments/environment';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.padminHostName + '/api/v1/padmin/users';
  
  constructor (private credService : CredentialService, private http: HttpClient) {  
  }

  getUsers(): Observable<User[]> {
    let headers = this.credService.getHeaders();
    return this.http.get<User[]>(this.apiUrl, { headers});
  }

  postNewUser(user: User) : Observable<User> {
    let headers = this.credService.getHeaders();
    return this.http.post<User>(this.apiUrl, user, { headers });
  }

}