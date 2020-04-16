import { ToastController } from '@ionic/angular';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = null;

  constructor(private authService: AuthService,
              private router: Router,
              private toastController: ToastController) { }

  ngOnInit() {}

  submitLogin(form) {

    this.authService.executeAuthService(form.value.username, form.value.password).subscribe(data => {
      this.authService.loggedInUserEvent.emit(true);

      if (this.authService.userIsLoggedIn) {
          this.router.navigateByUrl('ticket');
      }
    }, error => {
      console.log(error.error);
      this.errorMessage = error.error.message;
      const toast = this.toastController.create({
        color: 'danger',
        message: this.errorMessage,
        duration: 3000,
      }).then(el => {
        el.present();
      });
    }
    );
  }
}
