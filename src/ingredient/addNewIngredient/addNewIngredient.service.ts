import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Ingredient } from '../Ingredient.type';

@Injectable()
export class AddNewIngredientService {
  constructor(
    @InjectModel('Ingredient')
    private readonly ingredientModel: Model<Ingredient>,
  ) {}

  async addNewIngredient({ badge, name, type }): Promise<Ingredient[]> {
    const newIngredient = new this.ingredientModel({
      badge,
      name: name.map(({ lang, value }) => ({
        ...(lang !== 'none' && { language: lang }),
        value,
      })),
      type,
    });

    await newIngredient.save();

    const updatedIngredients = await this.ingredientModel.getAllIngredients();
    return updatedIngredients;
  }
}
