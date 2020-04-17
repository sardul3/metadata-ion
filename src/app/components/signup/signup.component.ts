import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isLoading = false;
  errorMessage: string = null;
  validUsername = true;

  constructor(private authService: AuthService,
              private loadingController: LoadingController,
              private router: Router,
              private toastController: ToastController) { }

  ngOnInit() {

  }

  submitSignup(form) {
    this.isLoading = true;
    this.authService.registerUser(form.value.username, form.value.email, form.value.password).subscribe(
      data => {
        this.isLoading = false;
        this.router.navigate(['/login']);

      },
      error => {
        this.errorMessage = error.error.message;
        this.isLoading = false;
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

  checkUsername(usernameField) {
    console.log(usernameField.value);
    this.authService.checkUsername(usernameField.value).subscribe(data => {
      if (data['message'] === 'duplicate') {
        this.validUsername = false;
      }
      else {
        this.validUsername = true;
      }
    });
  }

}
