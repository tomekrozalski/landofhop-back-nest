import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

import { SiteLanguage } from 'utils/enums';
import { AuthGuard } from 'utils/guards';
import { TranslatedBeverage as BeverageSearchTranslatedResults } from 'utils/types/beverage/getUpdatedBeverageImages';
import {
  Dashboard as NormalizedBeverageForDashboard,
  Regular as NormalizedBeverage,
} from 'utils/types/normalized/beverage';
import { GetBeverageDetailsService } from '../services';

@Controller('beverage')
export class GetBeverageDetailsController {
  constructor(private readonly beverageService: GetBeverageDetailsService) {}

  @Get()
  async getAllBeverages() {
    const beverages: NormalizedBeverage[] = await this.beverageService.getAllBeverages();
    return beverages;
  }

  @Get(':shortId/:brand/:badge')
  async getBeverageForDashboard(
    @Param('shortId') shortId: string,
    @Param('brand') brand: string,
    @Param('badge') badge: string,
  ) {
    const beverage: NormalizedBeverageForDashboard = await this.beverageService.getBeverage(
      {
        shortId,
        brand,
        badge,
      },
    );

    return beverage;
  }

  @Get(':language/:shortId/:brand/:badge')
  async getTranslatedDetails(
    @Param('language') language: SiteLanguage,
    @Param('shortId') shortId: string,
    @Param('brand') brand: string,
    @Param('badge') badge: string,
  ) {
    const beverage: NormalizedBeverage = await this.beverageService.getTranslatedDetails(
      {
        language,
        shortId,
        brand,
        badge,
      },
    );

    return beverage;
  }

  @Post('search')
  async beverageSearch(
    @Body('language') language: SiteLanguage,
    @Body('phrase') phrase: string,
  ) {
    const beverage: BeverageSearchTranslatedResults[] = await this.beverageService.beverageSearch(
      { language, phrase },
    );

    return beverage;
  }

  @Get('update-beverage-images/:language/:shortId/:brand/:badge')
  @UseGuards(AuthGuard)
  async getUpdatedBeverageImages(
    @Param('language') language: SiteLanguage,
    @Param('shortId') shortId: string,
    @Param('brand') brand: string,
    @Param('badge') badge: string,
  ) {
    const beverage: BeverageSearchTranslatedResults = await this.beverageService.getUpdatedBeverageImages(
      {
        language,
        shortId,
        brand,
        badge,
      },
    );

    return beverage;
  }
}
