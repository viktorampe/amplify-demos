import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router, NavigationExtras } from '@angular/router';
import { ActiveUserService } from 'src/app/services/activeuserservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any;
  username: string;
  password: string;
  message: string;

  /*======= New Password Required=========*/
  newPasswordRequired: boolean = false;
  newPassword: string;
  newPasswordRepeat: string;
  /*======= New Password Required=========*/


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  async signUp() {
    this.router.navigate(['register']);
  }

  async signIn() {

    try {

      await Auth.signIn(this.username, this.password)
        .then((user) => {
          this.user = user;
          if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
            this.newPasswordRequired = true; // updates UI
          } else {
            this.router.navigate(['profile']);
          }
        })
        .catch((err) => {
          console.log(err);
          this.message = err.message;
        });




    } catch (err) {
        if (err.code === 'UserNotConfirmedException') {
            // The error happens if the user didn't finish the confirmation step when signing up
            // In this case you need to resend the code and confirm the user
            // About how to resend the code and confirm the user, please check the signUp part
        } else if (err.code === 'PasswordResetRequiredException') {
            // The error happens when the password is reset in the Cognito console
            // In this case you need to call forgotPassword to reset the password
            // Please check the Forgot Password part.
        } else if (err.code === 'NotAuthorizedException') {
            // The error happens when the incorrect password is provided
        } else if (err.code === 'UserNotFoundException') {
            // The error happens when the supplied username/email does not exist in the Cognito user pool
        } else {
            console.log(err);
        }
    }
  }

  async completeNewPassword() {
    console.log('setnewpassword')
    await Auth.completeNewPassword(this.user, this.newPassword, {})
      .then((res) => {
        console.log(res);
        this.router.navigate(['profile'], { state: { loggedInuser: res } });
      })
      .catch((err) => {
        console.log(err);
        this.message = err.message;
      });

  }

}


