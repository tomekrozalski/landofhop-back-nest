import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Beverage } from 'beverage/utils/types';
import { NormalizedBeverageType } from './NormalizedBeverage.type';
import normalize from './normalize';

@Injectable()
export class GetDetailsService {
  constructor(
    @InjectModel('Beverage') private readonly beverageModel: Model<Beverage>,
  ) {}

  async getDetails({
    shortId,
    brand,
    badge,
  }: {
    shortId: string;
    brand: string;
    badge: string;
  }): Promise<NormalizedBeverageType> {
    const rawBeverages: Beverage[] = await this.beverageModel.getDetails(
      badge,
      brand,
      shortId,
    );

    const formattedBeverage: NormalizedBeverageType = normalize(
      rawBeverages[0],
    );

    return formattedBeverage;
  }
}
