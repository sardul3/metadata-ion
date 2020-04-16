import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUserEvent = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  userIsLoggedIn() {
    return localStorage.getItem('user') != null && localStorage.getItem('user').length > 0;
  }

  getUsername() {
    return localStorage.getItem('user');
  }

  executeAuthService(username: string, password: string) {

    return this.http.post<LoginResponse>('http://localhost:8080/authenticate', {username, password}).pipe(
      map(response => {
        localStorage.setItem('jwt', response.jwt);
        localStorage.setItem('user', response.loggedInUser);
      })
    );
  }

  registerUser(username: string, email: string, password: string) {
    return this.http.post('http://localhost:8080/signup', {username, email, password}).pipe(
      map(response => response)
    );
  }
}

interface LoginResponse {
  jwt: string;
  loggedInUser: string;
}
