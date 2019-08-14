import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/Main/Main.component';
import { HomeComponent } from './components/Home/Home.component';
import { NotFoundComponent } from './components/NotFound/NotFound.component';
import { InformationComponent } from './components/Information/Information.component';
import { CalendarComponent } from './components/FuncComponents/Calendar/Calendar.component';
import { NotesComponent } from './components/FuncComponents/Notes/Notes.component';
import { ShoppingListComponent } from './components/FuncComponents/ShoppingList/ShoppingList.component';
import { TrainingComponent } from './components/FuncComponents/Training/Training.component';
import { RecipesComponent } from './components/FuncComponents/Recipes/Recipes.component';

const routes: Route[] = [
  { path: '', component: MainComponent },
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', component: CalendarComponent},
      { path: 'calendar', component: CalendarComponent},
      { path: 'notes', component: NotesComponent},
      { path: 'recipes', component: RecipesComponent},
      { path: 'shoppinglist', component: ShoppingListComponent},
      { path: 'training', component: TrainingComponent},
      { path: '**', component: CalendarComponent}
    ]
  },
  { path: 'information', component: InformationComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
