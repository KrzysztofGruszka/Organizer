import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Note',
  templateUrl: './Note.component.html',
  styleUrls: ['./Note.component.scss']
})
export class NoteComponent implements OnInit {
  usernote: string;
  user: firebase.User;

  constructor(public service: NotesService, private firestore: AngularFirestore, private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
        this.resetForm();
      });
  }

  resetForm(form?: NgForm) {
    if (form != null) { form.resetForm(); }
    this.service.formData = {
      who: this.user.email,
      id: null,
      name: '',
      content: '',
      date: null,
      done: false
    };
  }

  onSubmit(form: NgForm) {
    const data = form.value;
    this.firestore.collection('notes').add(data);
    this.resetForm(form);
  }

}
