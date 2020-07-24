import { Injectable } from '@angular/core';
import {UserDetails} from '../../../Models/CurrentUserDetails/UserDetails';
import {AbstractAuthService} from '../AbstractAuthService';
import {HttpClient} from '@angular/common/http';
import {baseUserServiceUrl} from '../../../BaseUrls/BaseUrls';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements AbstractAuthService{
  private currentUserDetails: UserDetails;
  private token: string;
  constructor(private httpClient: HttpClient) {
  }

  getToken(): string {
    return this.token;
  }

  getUserDetails(): UserDetails {
    return this.currentUserDetails;
  }

  login() {
    this.httpClient.post<any>(baseUserServiceUrl + 'login',
      JSON.stringify({username: 'logostick', password: 'password'}),
      {observe: 'response'})
      .subscribe(response => {
        if (response.body.successfulAuthentication === true) {
          this.token = response.headers.get('Authorization');
        }
      });
  }

  logout() {
  }

  register() {
  }
}
