import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { SiteLanguage } from 'utils/enums';
import { Beverage } from 'beverage/utils/types';
import { NormalizedBeverageType } from './NormalizedBeverage.type';
import normalize from './normalize';

@Injectable()
export class GetTranslatedDetailsService {
  constructor(
    @InjectModel('Beverage') private readonly beverageModel: Model<Beverage>,
  ) {}

  async getTranslatedDetails({
    language,
    shortId,
    brand,
    badge,
  }: {
    language: SiteLanguage;
    shortId: string;
    brand: string;
    badge: string;
  }): Promise<NormalizedBeverageType> {
    const rawBeverages: Beverage[] = await this.beverageModel.getTranslatedDetails(
      badge,
      brand,
      shortId,
    );

    const formattedBeverage: NormalizedBeverageType = normalize(
      rawBeverages[0],
      language,
    );

    return formattedBeverage;
  }
}
