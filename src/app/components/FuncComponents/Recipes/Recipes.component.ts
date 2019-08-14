import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Recipes',
  templateUrl: './Recipes.component.html',
  styleUrls: ['./Recipes.component.css']
})
export class RecipesComponent implements OnInit {

  APP_ID = '42fb8619';
  APP_KEY = '5bfaed52ebcbc09a9fceba0e92ca003f';
  // tslint:disable-next-line:max-line-length
  example = 'curl "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"';

  constructor() { }

  ngOnInit() {
  }

}
