import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { SiteLanguage } from 'utils/enums';
import { Beverage } from 'utils/types';
import {
  Regular as NormalizedBeverage,
  Search as NormalizedBeverageForSearch,
} from 'utils/types/normalized/beverage';
import {
  RawBeverage as BeverageSearchRawResults,
  TranslatedBeverage as TranslatedBeverageUpdatedResults,
} from 'utils/types/beverage/getBeverageImagesData';
import {
  normalizeBeverage,
  normalizeBeverageForDashboard,
  normalizeBeverageForDetails,
  normalizeBeverageForSearch,
} from 'utils/normalizers/output/beverage';

import { normalizeUpdatedBeverageImgages } from 'utils/normalizers/output';

@Injectable()
export class GetBeverageDetailsService {
  constructor(
    @InjectModel('Beverage') private readonly beverageModel: Model<Beverage>,
  ) {}

  async getAllBeverages() {
    const rawBeverages: Beverage[] = await this.beverageModel.getAllBeverages();

    const formattedBeverages: NormalizedBeverage[] = rawBeverages.map(
      beverage => normalizeBeverage(beverage),
    );

    return formattedBeverages;
  }

  async getBeverage({
    shortId,
    brand,
    badge,
  }: {
    shortId: string;
    brand: string;
    badge: string;
  }) {
    const rawBeverages: Beverage[] = await this.beverageModel.getBeverageForDashboard(
      badge,
      brand,
      shortId,
    );

    const formattedBeverage = normalizeBeverageForDashboard(rawBeverages[0]);
    return formattedBeverage;
  }

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
  }) {
    const rawBeverages: Beverage[] = await this.beverageModel.getBeverage(
      badge,
      brand,
      shortId,
    );

    const formattedBeverage: any = normalizeBeverageForDetails(
      rawBeverages[0],
      language,
    );

    return formattedBeverage;
  }

  async beverageSearch({
    language,
    phrase,
  }: {
    language: SiteLanguage;
    phrase: string;
  }) {
    const rawResults: BeverageSearchRawResults[] = await this.beverageModel.beverageSearch(
      phrase,
    );

    if (!rawResults.length) {
      return [];
    }

    const formattedResults: NormalizedBeverageForSearch[] = rawResults.map(
      beverage => normalizeBeverageForSearch(beverage, language),
    );

    return formattedResults;
  }

  async getBeverageImagesData({
    language,
    shortId,
    brand,
    badge,
  }: {
    language: SiteLanguage;
    shortId: string;
    brand: string;
    badge: string;
  }) {
    const rawBeverage: BeverageSearchRawResults = await this.beverageModel.getBeverageImagesData(
      { shortId, brand, badge },
    );
    const formattedBeverage: TranslatedBeverageUpdatedResults = normalizeUpdatedBeverageImgages(
      { beverage: rawBeverage[0], language },
    );

    return formattedBeverage;
  }
}
