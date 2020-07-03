import { Controller, Get, Param, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'utils/guards';
import { BeverageOutlinesService } from '../../services';

@Controller('beverage')
export class BeverageOutlinesController {
  constructor(private readonly beverageService: BeverageOutlinesService) {}

  @Get('update-cover-outline/:id/:shortId/:brand/:badge')
  @UseGuards(AuthGuard)
  async updateCoverOutline(
    @Param('badge') badge: string,
    @Param('brand') brand: string,
    @Param('id') id: string,
    @Param('shortId') shortId: string,
  ) {
    const result = this.beverageService.updateCoverOutline({
      badge,
      brand,
      id,
      shortId,
    });
    return result;
  }

  @Get('update-container-outline/:id/:shortId/:brand/:badge')
  @UseGuards(AuthGuard)
  async updateContainerOutline(
    @Param('badge') badge: string,
    @Param('brand') brand: string,
    @Param('id') id: string,
    @Param('shortId') shortId: string,
  ) {
    const result = this.beverageService.updateContainerOutline({
      badge,
      brand,
      id,
      shortId,
    });
    return result;
  }
}
