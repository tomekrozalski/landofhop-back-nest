import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { IngredientSchema } from 'utils/schemas';
import {
  AddNewIngredientController,
  AddNewIngredientService,
} from './addNewIngredient';
import {
  GetAllIngredientsController,
  GetAllIngredientsService,
} from './getAllIngredients';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Ingredient', schema: IngredientSchema },
    ]),
  ],
  controllers: [AddNewIngredientController, GetAllIngredientsController],
  providers: [AddNewIngredientService, GetAllIngredientsService],
})
export class IngredientModule {}
