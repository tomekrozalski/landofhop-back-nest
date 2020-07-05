import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'utils/guards';
import { AddNewBeverageService } from './addNewBeverage.service';

@Controller('beverage')
export class AddNewBeverageController {
  constructor(private readonly beverageService: AddNewBeverageService) {}

  @Post()
  @UseGuards(AuthGuard)
  async addNewBeverage(
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
    @Body('shortId') shortId: string,
  ) {
    const result: {
      badge: string;
      brand: string;
      shortId: string;
    } = await this.beverageService.addNewBeverage({
      badge,
      name,
      brand,
      container,
      notes,
      added,
      shortId,
    });

    return result;
  }
}
