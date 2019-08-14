import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-SignIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.scss']
})
export class SignInComponent implements OnInit {
  ss: SharedService;
  authError: any;

  constructor(private auth: AuthService, ss: SharedService) { this.ss = ss; }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }

  gotoSignUp() {
    this.ss.closeDivToSign();
    this.ss.openDivtoSign();
  }

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
  }

}
