import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';
import { CalendarComponent } from '../FuncComponents/Calendar/Calendar.component';
import { trigger } from '@angular/animations';
import { flyInLeft } from 'src/app/shared/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss'],
  animations: [ flyInLeft ]
})
export class HomeComponent implements OnInit {
  divContactVisibilty: boolean;
  ss: SharedService;
  subscription: any;

  constructor(@Inject(DOCUMENT) private document: any, ss: SharedService) {
    this.divContactVisibilty = false;
    this.ss = ss;
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  MoveTo(url: string) {
    window.open(url, '_blank');
  }

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
    this.subscription = this.ss.getEmittedVisiValue()
      .subscribe(item => this.divContactVisibilty = item);
  }

}
