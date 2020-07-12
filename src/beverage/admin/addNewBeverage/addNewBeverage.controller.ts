import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'utils/guards';
import { AddNewBeverageService } from './addNewBeverage.service';

@Controller('beverage')
export class AddNewBeverageController {
  constructor(private readonly beverageService: AddNewBeverageService) {}

  @Post()
  @UseGuards(AuthGuard)
  async addNewBeverage(
    @Body('added') added: Date,
    @Body('badge') badge: string,
    @Body('barcode') barcode: string,
    @Body('brand') brand: string,
    @Body('container')
    container: {
      color: string;
      material: string;
      type: string;
      unit: string;
      value: number;
    },
    @Body('contract')
    contract: {
      label?: string;
    },
    @Body('cooperation')
    cooperation: {
      label?: string[];
    },
    @Body('name')
    name: {
      lang: string;
      value: string;
    }[],
    @Body('notes') notes: string,
    @Body('place')
    place: {
      label?: string;
    },
    @Body('series')
    series: {
      label?: { language?: string; value: string }[];
    },
    @Body('shortId') shortId: string,
    @Body('tale')
    tale: {
      label?: { language?: string; value: string }[];
      producer?: { language?: string; value: string }[];
    },
    @Body('updated') updated: Date,
  ) {
    const result: {
      badge: string;
      brand: string;
      shortId: string;
    } = await this.beverageService.addNewBeverage({
      added,
      badge,
      barcode,
      brand,
      container,
      contract,
      cooperation,
      name,
      notes,
      place,
      series,
      shortId,
      tale,
      updated,
    });

    return result;
  }
}
