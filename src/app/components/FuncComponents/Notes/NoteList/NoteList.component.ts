import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/shared/note.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-NoteList',
  templateUrl: './NoteList.component.html',
  styleUrls: ['./NoteList.component.scss']
})
export class NoteListComponent implements OnInit {

  list: Note[];
  constructor(public service: NotesService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.service.getNotes().subscribe(res => {
      this.list = res.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() } as Note;
      });
    });
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('notes/' + name).delete();
    }
  }

}
