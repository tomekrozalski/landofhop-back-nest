import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'utils/guards';
import { Country } from 'utils/types';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getAllCountries() {
    const countries: Country[] = await this.countryService.getAllCountries();
    return countries;
  }

  @Post()
  @UseGuards(AuthGuard)
  async savePlace(
    @Body('code') code: string,
    @Body('name')
    name: {
      lang: string;
      value: string;
    }[],
  ) {
    const result: boolean = await this.countryService.saveCountry({
      code,
      name,
    });

    return result;
  }
}
