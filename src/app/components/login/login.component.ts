import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {}

  submitLogin(form) {
    console.log(form.value.email);
    console.log(form.value.password);

    this.authService.executeAuthService(form.value.email, form.value.password).subscribe(data => {
      if (this.authService.userIsLoggedIn) {
          this.router.navigateByUrl('ticket');
      }
    });
  }
}
