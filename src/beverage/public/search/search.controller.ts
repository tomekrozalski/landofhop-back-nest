import { Body, Controller, Post } from '@nestjs/common';

import { SiteLanguage } from 'utils/enums';
import { SearchBeverageService } from './search.service';
import { NormalizedBeverageType } from './NormalizedBeverate.type';

@Controller('beverage')
export class SearchBeverageController {
  constructor(private readonly beverageService: SearchBeverageService) {}

  @Post('search')
  async search(
    @Body('language') language: SiteLanguage,
    @Body('phrase') phrase: string,
  ): Promise<NormalizedBeverageType[]> {
    const beverage: NormalizedBeverageType[] = await this.beverageService.search(
      { language, phrase },
    );

    return beverage;
  }
}
