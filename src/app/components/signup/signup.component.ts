import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  submitSignup(form) {
    this.authService.registerUser(form.value.username, form.value.email, form.value.password).subscribe(
      data => {}
    );
  }

}
