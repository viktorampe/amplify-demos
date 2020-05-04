import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  email:string;
  phone_number: string;
  confirmationCode: string;

  message: string;
  setConfirmationCode: boolean = false;


  constructor(private router: Router) { }

  ngOnInit() {
  }


  singIn() {
    this.router.navigate(['login'])
  }

  signUp() {

    Auth.signUp({
      username: this.username,
      password: this.password,
      attributes: {
        email: this.email,
        phone_number: this.phone_number
      }
    })
      .then((data) => {
        console.log(data);
        this.setConfirmationCode = true; // update view
      })
      .catch((err) => {
        console.log(err);
        this.message = err.message;
      });
  }

  confirmUser() {
    Auth.confirmSignUp(this.username, this.confirmationCode)
      .then((data) => {
        console.log(data)
        if (data === 'SUCCESS') {
          this.router.navigate(['profile'])
        }
      })
  }
}
