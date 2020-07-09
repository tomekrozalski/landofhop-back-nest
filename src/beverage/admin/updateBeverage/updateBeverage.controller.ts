import { Body, Controller, Put, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'utils/guards';
import { UpdateBeverageService } from './updateBeverage.service';

@Controller('beverage')
export class UpdateBeverageController {
  constructor(private readonly beverageService: UpdateBeverageService) {}

  @Put()
  @UseGuards(AuthGuard)
  async updateBeverage(
    @Body('id') id: string,
    @Body('badge') badge: string,
    @Body('name')
    name: {
      lang: string;
      value: string;
    }[],
    @Body('brand') brand: string,
    @Body('container')
    container: {
      color: string;
      material: string;
      type: string;
      unit: string;
      value: number;
    },
    @Body('notes') notes: string,
    @Body('added') added: Date,
  ) {
    const result: {
      badge: string;
      brand: string;
      shortId: string;
    } = await this.beverageService.updateBeverage({
      id,
      badge,
      name,
      brand,
      container,
      notes,
      added,
    });

    return result;
  }
}
