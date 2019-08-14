import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-SignUp',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.scss']
})
export class SignUpComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }

  createUser(frm) {
    this.auth.createUser(frm.value);
  }

}
