import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Beverage } from 'beverage/utils/types';
import { NormalizedBeverage } from './NormalizedBeverage.type';
import normalize from './normalize';

@Injectable()
export class GetAllBeveragesDetailsService {
  constructor(
    @InjectModel('Beverage') private readonly beverageModel: Model<Beverage>,
  ) {}

  async getAllBeveragesDetails(): Promise<NormalizedBeverage[]> {
    const rawBeverages: Beverage[] = await this.beverageModel.getAllBeveragesDetails();

    const formattedBeverages: NormalizedBeverage[] = rawBeverages.map(
      beverage => normalize(beverage),
    );

    return formattedBeverages;
  }
}
