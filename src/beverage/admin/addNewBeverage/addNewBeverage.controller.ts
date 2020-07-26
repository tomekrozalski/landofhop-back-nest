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
        unit: string;
        value: number;
        scope?: string;
      };
    },
    @Body('badge') badge: string,
    @Body('barcode') barcode: string,
    @Body('bitterness')
    bitterness: {
      label?: number;
    },
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
    @Body('fullness')
    fullness: {
      label?: number;
    },
    @Body('hoppyness')
    hoppyness: {
      label?: number;
    },
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
    @Body('power')
    power: {
      label?: number;
    },
    @Body('series')
    series: {
      label?: { language?: string; value: string }[];
    },
    @Body('shortId') shortId: string,
    @Body('smokedMalt')
    smokedMalt: {
      label?: boolean;
    },
    @Body('style')
    style: {
      label?: { language?: string; value: string }[];
    },
    @Body('sweetness')
    sweetness: {
      label?: number;
    },
    @Body('tale')
    tale: {
      label?: { language?: string; value: string }[];
      producer?: { language?: string; value: string }[];
    },
    @Body('temperature')
    temperature: {
      label?: {
        from: number;
        to: number;
        unit: string;
      };
    },
    @Body('updated') updated: Date,
  ) {
    const result: {
      badge: string;
      brand: string;
      shortId: string;
    } = await this.beverageService.addNewBeverage({
      added,
      aged,
      alcohol,
      badge,
      barcode,
      bitterness,
      brand,
      container,
      contract,
      cooperation,
      dryHopped,
      expirationDate,
      extract,
      fermentation,
      filtration,
      fullness,
      hoppyness,
      ingredientsDescription,
      ingredientsList,
      isDryHopped,
      name,
      notes,
      pasteurization,
      place,
      power,
      series,
      shortId,
      smokedMalt,
      style,
      sweetness,
      tale,
      temperature,
      updated,
    });

    return result;
  }
}
