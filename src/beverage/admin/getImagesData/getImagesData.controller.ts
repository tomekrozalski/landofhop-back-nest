import { Controller, Get, Param, UseGuards } from '@nestjs/common';

import { SiteLanguage } from 'utils/enums';
import { AuthGuard } from 'utils/guards';
import { NormalizedBeverageType } from './NormalizedBeverage.type';
import { GetImagesDataService } from './getImagesData.service';

@Controller('beverage')
export class GetImagesDataController {
  constructor(private readonly beverageService: GetImagesDataService) {}

  @Get('images/:language/:shortId/:brand/:badge')
  @UseGuards(AuthGuard)
  async getImagesData(
    @Param('language') language: SiteLanguage,
    @Param('shortId') shortId: string,
    @Param('brand') brand: string,
    @Param('badge') badge: string,
  ): Promise<NormalizedBeverageType> {
    const beverage: NormalizedBeverageType = await this.beverageService.getImagesData(
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
