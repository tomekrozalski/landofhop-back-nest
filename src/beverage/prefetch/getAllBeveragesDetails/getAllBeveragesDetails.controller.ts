import { Controller, Get } from '@nestjs/common';

import { GetAllBeveragesDetailsService } from './getAllBeveragesDetails.service';
import { NormalizedBeverage } from './NormalizedBeverage.type';

@Controller('beverage')
export class GetAllBeveragesDetailsController {
  constructor(
    private readonly beverageService: GetAllBeveragesDetailsService,
  ) {}

  @Get()
  async getAllBeveragesDetails(): Promise<NormalizedBeverage[]> {
    const beverages: NormalizedBeverage[] = await this.beverageService.getAllBeveragesDetails();
    return beverages;
  }
}
