import { Controller, Get } from '@nestjs/common';

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
}
