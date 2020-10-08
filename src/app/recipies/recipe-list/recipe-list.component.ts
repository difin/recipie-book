import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() itemSelectedEvent = new EventEmitter<Recipe>();
  constructor() { }

  recipes: Recipe[] = [
    new Recipe('Curried Tomato Lentil Soup',
      'This is curried tomato lentil soup',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
    new Recipe('Homemade Cornbread',
      'This is Homemade Cornbread',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/10/cornbread.jpg')
  ];

  ngOnInit(): void {
  }

  onSelected(item: Recipe) {
    this.itemSelectedEvent.emit(item);
  }
}
