import { Controller, Get, Param } from '@nestjs/common';

import { SiteLanguage } from 'utils/enums';
import { NormalizedBeverageType } from './NormalizedBeverage.type';
import { GetTranslatedDetailsService } from './getTranslatedDetails.service';

@Controller('beverage')
export class GetTranslatedDetailsController {
  constructor(private readonly beverageService: GetTranslatedDetailsService) {}

  @Get(':language/:shortId/:brand/:badge')
  async getTranslatedDetails(
    @Param('language') language: SiteLanguage,
    @Param('shortId') shortId: string,
    @Param('brand') brand: string,
    @Param('badge') badge: string,
  ): Promise<NormalizedBeverageType> {
    const beverage: NormalizedBeverageType = await this.beverageService.getTranslatedDetails(
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
