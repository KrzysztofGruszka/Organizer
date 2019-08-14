import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Welcome',
  templateUrl: './Welcome.component.html',
  styleUrls: ['./Welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  movehellodiv() {
    if (document.getElementById('hellodiv').style.height <= '2.1vh') {
      document.getElementById('hellodiv').style.height = '99.9vh';
      document.getElementById('hellodiv').style.borderColor = 'black';
      document.getElementById('hellodiv').style.borderBottomLeftRadius = '0';
      document.getElementById('hellodiv').style.borderBottomRightRadius = '0';
    } else {
      document.getElementById('hellodiv').style.height = '2.1vh';
      document.getElementById('hellodiv').style.borderColor = 'rgb(104, 230, 160)';
      document.getElementById('hellodiv').style.borderBottomLeftRadius = '10px';
      document.getElementById('hellodiv').style.borderBottomRightRadius = '10px';
    }
  }

  ngOnInit() {
  }

}
