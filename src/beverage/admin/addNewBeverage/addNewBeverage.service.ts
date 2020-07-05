import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Beverage } from 'beverage/utils/types';

@Injectable()
export class AddNewBeverageService {
  constructor(
    @InjectModel('Beverage') private readonly beverageModel: Model<Beverage>,
  ) {}

  async addNewBeverage({
    badge,
    name,
    brand,
    container,
    notes,
    added,
    shortId,
  }) {
    const newBeverage = new this.beverageModel({
      badge,
      label: {
        general: {
          name,
          brand,
        },
        container,
      },
      ...(notes && {
        editorial: {
          ...(notes && { notes }),
        },
      }),
      added,
      shortId,
    });

    const { _id } = await newBeverage.save();
    const [{ brand: brandBadge }] = await await this.beverageModel.getBrandById(
      _id,
    );

    return { badge, brand: brandBadge, shortId };
  }
}
