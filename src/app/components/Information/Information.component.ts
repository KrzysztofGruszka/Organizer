import { Component, OnInit } from '@angular/core';
import { flyInRight, fade, flyInLeft } from 'src/app/shared/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Information',
  templateUrl: './Information.component.html',
  styleUrls: ['./Information.component.scss'],
  animations: [
    flyInLeft,
    flyInRight,
    fade
  ]
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private topFunction() {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 20);
      }
    };
    scrollToTop();
  }

  private openLanguageMenu() {
    if (document.getElementById('languageMenu').style.height > '0vh') {
      document.getElementById('languageMenu').style.height = '0vh';
    } else {
      document.getElementById('languageMenu').style.height = '7.3vh';
    }
  }

  private InProgress() {
    alert('Function available soon.');
  }
}
