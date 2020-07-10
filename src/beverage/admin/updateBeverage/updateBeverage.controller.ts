import { Body, Controller, Put, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'utils/guards';
import { UpdateBeverageService } from './updateBeverage.service';

@Controller('beverage')
export class UpdateBeverageController {
  constructor(private readonly beverageService: UpdateBeverageService) {}

  @Put()
  @UseGuards(AuthGuard)
  async updateBeverage(
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
    @Body('id') id: string,
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
    } = await this.beverageService.updateBeverage({
      added,
      badge,
      barcode,
      brand,
      container,
      contract,
      cooperation,
      id,
      name,
      notes,
      place,
      series,
      tale,
      updated,
    });

    return result;
  }
}
