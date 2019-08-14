import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { fade } from 'src/app/shared/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-HomeMenu',
  templateUrl: './HomeMenu.component.html',
  styleUrls: ['./HomeMenu.component.scss'],
  animations: [
    fade
  ]
})
export class HomeMenuComponent implements OnInit {
  ss: SharedService;
  slideContactvar = 1;
  user: firebase.User;
  slideSignInvar = false;
  slideSignUpvar = false;
  subscription: any;

  constructor(ss: SharedService, private auth: AuthService) {
    this.ss = ss;
  }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      });
    this.subscription = this.ss.getEmittedCloseSignValue()
      .subscribe(item => this.slideSignInvar = item);
    this.subscription = this.ss.getEmittedOpenSignValue()
      .subscribe(item => this.slideSignUpvar = item);
  }

  slideSignIn() {
    if (this.slideSignInvar) { this.slideSignInvar = !this.slideSignInvar;
    } else { this.slideSignInvar = !this.slideSignInvar; this.slideSignUpvar = false; }
  }

  slideSignUp() {
    if (this.slideSignUpvar) { this.slideSignUpvar = !this.slideSignUpvar;
    } else { this.slideSignUpvar = !this.slideSignUpvar; this.slideSignInvar = false; }
  }


  slideContact() {
    if (this.slideContactvar === 1) {
      this.ss.changeDivContactVisiFalse();
      this.slideContactvar = 0;
    } else {
      this.ss.changeDivContactVisiTrue();
      this.slideContactvar = 1;
    }
  }

  logout() {
    this.auth.logout();
  }

}
