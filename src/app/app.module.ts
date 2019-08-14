import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { NotesService } from './services/notes.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/Home.component';
import { NotFoundComponent } from './components/NotFound/NotFound.component';
import { MainComponent } from './components/Main/Main.component';
import { InformationComponent } from './components/Information/Information.component';
import { WelcomeComponent } from './components/Welcome/Welcome.component';
import { HomeMenuComponent } from './components/HomeMenu/HomeMenu.component';
import { CalendarComponent } from './components/FuncComponents/Calendar/Calendar.component';
import { NotesComponent } from './components/FuncComponents/Notes/Notes.component';
import { NoteComponent } from './components/FuncComponents/Notes/Note/Note.component';
import { NoteListComponent } from './components/FuncComponents/Notes/NoteList/NoteList.component';
import { ShoppingListComponent } from './components/FuncComponents/ShoppingList/ShoppingList.component';
import { TrainingComponent } from './components/FuncComponents/Training/Training.component';
import { RecipesComponent } from './components/FuncComponents/Recipes/Recipes.component';
import { SignInComponent } from './components/UserComponents/SignIn/SignIn.component';
import { SignUpComponent } from './components/UserComponents/SignUp/SignUp.component';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

const firebaseConfig = {
  apiKey: 'AIzaSyBSVm5zP0vJP8s4bKfdjux2TAEYHgV_OzI',
  authDomain: 'fir-organizator.firebaseapp.com',
  databaseURL: 'https://fir-organizator.firebaseio.com',
  projectId: 'fir-organizator',
  storageBucket: '',
  messagingSenderId: '495304841041',
  appId: '1:495304841041:web:cb9a6ea85545d33d'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MainComponent,
    InformationComponent,
    WelcomeComponent,
    HomeMenuComponent,
    CalendarComponent,
    NotesComponent,
    NoteComponent,
    NoteListComponent,
    RecipesComponent,
    ShoppingListComponent,
    TrainingComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DateInputsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CalendarModule,
    IntlModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  entryComponents: [
    CalendarComponent,
    NotesComponent,
    RecipesComponent,
    ShoppingListComponent,
    TrainingComponent
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
