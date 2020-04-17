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
  labelColor = 'danger';
  labelValue = 0;
  labelStrength = 'very weak';

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
      } else {
        this.validUsername = true;
      }
    });
  }

  passwordStrength(pass) {
    const password = pass.value;
    let color = 'danger';
    let strength: string;
    let totalScore = 0;
    const specialCharScore = (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length;
    const lengthScore = password.length;
    totalScore = (specialCharScore * 10) + lengthScore;
    if ( specialCharScore >= 2) {
        totalScore += 10;
    }
    if (lengthScore >= 8 ) {
      totalScore += 10;
    }

    if (totalScore >= 50) {
       strength = 'super secure';
       color = 'success';
      } else if (totalScore < 50 && totalScore >= 30) {
        strength = 'moderate';
        color = 'tertiary';
      } else if (totalScore < 30 && totalScore >= 15) {
        strength = 'weak';
        color = 'secondary';
      } else { strength = 'very weak';
    }
    this.labelValue = totalScore;
    this.labelStrength = strength;
    this.labelColor = color;

    console.log(totalScore);
    return [totalScore.toString(), strength];
  }

}
