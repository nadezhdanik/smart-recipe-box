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
}
