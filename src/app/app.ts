import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly tagline = signal('A place to save my favourite recipes');
  protected readonly recipeCount = signal(0);

  protected messages = {
    add: 'A nice form to add a recipe will appear soon',
    list: 'A recipe list will appear soon',
  };

  protected log(message: string): void {
    console.log(message);
  }
}
