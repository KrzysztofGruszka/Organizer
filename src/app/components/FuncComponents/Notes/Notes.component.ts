import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Notes',
  templateUrl: './Notes.component.html',
  styleUrls: ['./Notes.component.scss']
})
export class NotesComponent implements OnInit {

  slideCreateNotevar = false;

  constructor() { }

  ngOnInit() {
  }

  slideCreateNote() {
    if (this.slideCreateNotevar) { this.slideCreateNotevar = !this.slideCreateNotevar;
    } else { this.slideCreateNotevar = !this.slideCreateNotevar; }
  }

}
