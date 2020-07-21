import { Controller, Get } from '@nestjs/common';

import { Ingredient } from '../Ingredient.type';
import { GetAllIngredientsService } from './getAllIngredients.service';

@Controller('ingredient')
export class GetAllIngredientsController {
  constructor(private readonly ingredientService: GetAllIngredientsService) {}

  @Get()
  async getAllIngredients() {
    const ingredients: Ingredient[] = await this.ingredientService.getAllIngredients();
    return ingredients;
  }
}
