import { Component, signal } from '@angular/core';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly activeRecipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly recipeCount = signal(0);
  protected recipeName1 = MOCK_RECIPES[0].name;
  protected recipeName2 = MOCK_RECIPES[1].name;

  protected changeActiveRecipe(index: number): void {
    this.activeRecipe.set(MOCK_RECIPES[index]);
  }
}
