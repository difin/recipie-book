import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuItemSelected = new EventEmitter<{item: string}>();
  constructor() { }

  collapsed = true;

  ngOnInit(): void {
  }

  recipesSelected() {
    this.menuItemSelected.emit({
      item: 'recipes'
    });
  }

  shoppingListSelected() {
    this.menuItemSelected.emit({
      item: 'shopping list'
    });
  }
}
