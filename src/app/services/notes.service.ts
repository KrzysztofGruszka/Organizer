import { Injectable } from '@angular/core';
import { Note } from '../shared/note.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  formData: Note;

constructor(private firestore: AngularFirestore) { }

getNotes() {
  return this.firestore.collection('notes').snapshotChanges();
}

}
