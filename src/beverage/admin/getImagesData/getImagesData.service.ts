import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { SiteLanguage } from 'utils/enums';
import { Beverage } from 'beverage/utils/types';
import { RawBeverageType } from './RawBeverage.type';
import { NormalizedBeverageType } from './NormalizedBeverage.type';
import normalize from './normalize';

@Injectable()
export class GetImagesDataService {
  constructor(
    @InjectModel('Beverage') private readonly beverageModel: Model<Beverage>,
  ) {}

  async getImagesData({
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
    const rawBeverage: RawBeverageType = await this.beverageModel.getImagesData(
      { shortId, brand, badge },
    );

    const formattedBeverage: NormalizedBeverageType = normalize({
      beverage: rawBeverage[0],
      language,
    });

    return formattedBeverage;
  }
}
