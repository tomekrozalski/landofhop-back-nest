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
    @Body('aged')
    aged: {
      label?: {
        type?: string;
        wood?: string;
        time?: {
          unit: string;
          value: number;
        };
        previousContent?: string[];
      }[];
    },
    @Body('alcohol')
    alcohol: {
      label?: {
        relate: string;
        scope?: string;
        unit: string;
        value: number;
      };
    },
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
    @Body('dryHopped')
    dryHopped: {
      label?: string[];
    },
    @Body('expirationDate')
    expirationDate: {
      label?: {
        unit: string;
        value: number;
      };
    },
    @Body('extract')
    extract: {
      label?: {
        relate: string;
        unit: string;
        value: number;
      };
    },
    @Body('fermentation')
    fermentation: {
      label?: string[];
    },
    @Body('filtration')
    filtration: {
      label?: boolean;
    },
    @Body('id') id: string,
    @Body('ingredientsDescription')
    ingredientsDescription: {
      label?: {
        language;
        value;
        complete;
      }[];
    },
    @Body('ingredientsList')
    ingredientsList: {
      label?: string[];
    },
    @Body('isDryHopped')
    isDryHopped: {
      label?: boolean;
    },
    @Body('name')
    name: {
      lang: string;
      value: string;
    }[],
    @Body('notes') notes: string,
    @Body('pasteurization')
    pasteurization: {
      label?: boolean;
    },
    @Body('place')
    place: {
      label?: string;
    },
    @Body('series')
    series: {
      label?: { language?: string; value: string }[];
    },
    @Body('smokedMalt')
    smokedMalt: {
      label?: boolean;
    },
    @Body('style')
    style: {
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
      aged,
      alcohol,
      badge,
      barcode,
      brand,
      container,
      contract,
      cooperation,
      dryHopped,
      expirationDate,
      extract,
      fermentation,
      filtration,
      id,
      ingredientsDescription,
      ingredientsList,
      isDryHopped,
      name,
      notes,
      pasteurization,
      place,
      series,
      smokedMalt,
      style,
      tale,
      updated,
    });

    return result;
  }
}
