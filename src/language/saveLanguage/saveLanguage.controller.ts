import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'utils/guards';
import { Language } from 'utils/types';
import { SaveLanguageService } from './saveLanguage.service';

@Controller('language')
export class SaveLanguageController {
  constructor(private readonly languageService: SaveLanguageService) {}

  @Post()
  @UseGuards(AuthGuard)
  async saveLanguage(
    @Body('code') code: string,
    @Body('name')
    name: {
      lang: string;
      value: string;
    }[],
  ): Promise<Language[]> {
    const result: Language[] = await this.languageService.saveLanguage({
      code,
      name,
    });

    return result;
  }
}
