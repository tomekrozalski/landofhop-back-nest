import { Controller, Get, Param } from '@nestjs/common';

import { NormalizedBeverageType } from './NormalizedBeverage.type';
import { GetDetailsService } from './getDetails.service';

@Controller('beverage')
export class GetDetailsController {
  constructor(private readonly beverageService: GetDetailsService) {}

  @Get(':shortId/:brand/:badge')
  async getDetails(
    @Param('shortId') shortId: string,
    @Param('brand') brand: string,
    @Param('badge') badge: string,
  ): Promise<NormalizedBeverageType> {
    const beverage: NormalizedBeverageType = await this.beverageService.getDetails(
      {
        shortId,
        brand,
        badge,
      },
    );

    return beverage;
  }
}
