import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { SiteLanguage } from 'utils/enums';
import { Beverage } from 'beverage/utils/types';
import { RawBeverageType } from './RawBeverage.type';
import { NormalizedBeverageType } from './NormalizedBeverate.type';
import normalize from './normalize';

@Injectable()
export class SearchBeverageService {
  constructor(
    @InjectModel('Beverage') private readonly beverageModel: Model<Beverage>,
  ) {}

  async search({
    language,
    phrase,
  }: {
    language: SiteLanguage;
    phrase: string;
  }): Promise<NormalizedBeverageType[]> {
    const rawResults: RawBeverageType[] = await this.beverageModel.search(
      phrase,
    );

    if (!rawResults.length) {
      return [];
    }

    const formattedResults: NormalizedBeverageType[] = rawResults.map(
      beverage => normalize({ beverage, language }),
    );

    return formattedResults;
  }
}
