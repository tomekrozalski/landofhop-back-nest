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
      producer?: {
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
      producer?: {
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
      producer?: number;
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
      producer?: string;
    },
    @Body('cooperation')
    cooperation: {
      label?: string[];
      producer?: string[];
    },
    @Body('dryHopped')
    dryHopped: {
      label?: string[];
      producer?: string[];
    },
    @Body('expirationDate')
    expirationDate: {
      label?: {
        unit: string;
        value: number;
      };
      producer?: {
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
      producer?: {
        relate: string;
        unit: string;
        value: number;
      };
    },
    @Body('fermentation')
    fermentation: {
      label?: string[];
      producer?: string[];
    },
    @Body('filtration')
    filtration: {
      label?: boolean;
      producer?: boolean;
    },
    @Body('fullness')
    fullness: {
      label?: number;
      producer?: number;
    },
    @Body('hoppyness')
    hoppyness: {
      label?: number;
      producer?: number;
    },
    @Body('ingredientsDescription')
    ingredientsDescription: {
      label?: {
        language;
        value;
        complete;
      }[];
      producer?: {
        language;
        value;
        complete;
      }[];
    },
    @Body('ingredientsList')
    ingredientsList: {
      label?: string[];
      producer?: string[];
    },
    @Body('isDryHopped')
    isDryHopped: {
      label?: boolean;
      producer?: boolean;
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
      producer?: boolean;
    },
    @Body('place')
    place: {
      label?: string;
      producer?: string;
    },
    @Body('power')
    power: {
      label?: number;
      producer?: number;
    },
    @Body('price')
    price: {
      label?: {
        currency: string;
        date: Date;
        value: number;
      }[];
      producer?: {
        currency: string;
        date: Date;
        value: number;
      }[];
      editorial?: {
        currency: string;
        date: Date;
        value: number;
      }[];
    },
    @Body('series')
    series: {
      label?: { language?: string; value: string }[];
      producer?: { language?: string; value: string }[];
    },
    @Body('shortId') shortId: string,
    @Body('smokedMalt')
    smokedMalt: {
      label?: boolean;
      producer?: boolean;
    },
    @Body('style')
    style: {
      label?: { language?: string; value: string }[];
      producer?: { language?: string; value: string }[];
    },
    @Body('sweetness')
    sweetness: {
      label?: number;
      producer?: number;
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
      producer?: {
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
      price,
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
