import { Controller, Get, Param } from '@nestjs/common';

import { GetLastTilesService } from './getLastTiles.service';
import { TileType } from './Tile.type';

@Controller('beverage')
export class GetLastTilesController {
  constructor(private readonly beverageService: GetLastTilesService) {}

  @Get('get-last-tiles/:amount')
  async getLastTiles(@Param('amount') amount: string): Promise<TileType[]> {
    const beverages: TileType[] = await this.beverageService.getLastTiles(
      amount,
    );
    return beverages;
  }
}
