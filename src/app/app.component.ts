import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  componentToShow = 'recipes';

  onNavigate(menuItem: {item: string}) {
    this.componentToShow = menuItem.item;
  }
}
