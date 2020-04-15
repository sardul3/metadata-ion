import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userIsLoggedIn() {
    return localStorage.getItem('user') != null && localStorage.getItem('user').length > 0;
  }

  executeAuthService(username: string, password: string) {

    return this.http.post<LoginResponse>('http://localhost:8080/authenticate', {username, password}).pipe(
      map(response => {
        localStorage.setItem('jwt', response.jwt);
        localStorage.setItem('user', response.loggedInUser);
      })
    );
  }
}

interface LoginResponse {
  jwt: string;
  loggedInUser: string;
}