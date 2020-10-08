import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  recipes: Recipe[] = [
    new Recipe('Curried Tomato Lentil Soup',
      'This is curried tomato lentil soup',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
    new Recipe('Curried Tomato Lentil Soup',
      'This is curried tomato lentil soup',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg')
  ];

  ngOnInit(): void {
  }

}
