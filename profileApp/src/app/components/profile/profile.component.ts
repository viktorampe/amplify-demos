import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActiveUserService } from 'src/app/services/activeuserservice.service';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loggedInUser: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
      Auth.currentAuthenticatedUser()
        .then(user => this.loggedInUser = user)
        .catch(err => console.log(err));
  }


  logout() {
    Auth.signOut()
      .then(data => {
        console.log(data);
        this.router.navigate(['login'])
      })
      .catch(err => console.log(err));
  }

}
