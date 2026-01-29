import { Component, computed, signal } from '@angular/core';
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
  protected readonly servingsCount = signal(1);

  protected readonly adjustedRecipe = computed(() => {
    return {
      ...this.activeRecipe(),
      ingredients: this.activeRecipe().ingredients.map((ingredient) => ({
        ...ingredient,
        quantity: ingredient.quantity * this.servingsCount(),
      })),
    };
  });

  protected changeActiveRecipe(index: number): void {
    this.activeRecipe.set(MOCK_RECIPES[index]);
  }

  protected increment(): void {
    this.servingsCount.update((current) => current + 1);
  }

  protected decrement(): void {
    this.servingsCount.update((current) => {
      if (current > 1) {
        return current - 1;
      }
      return current;
    });
  }
}
