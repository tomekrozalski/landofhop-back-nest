import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'utils/guards';
import { Language } from 'utils/types';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  async getAllLanguages() {
    const languages: Language[] = await this.languageService.getAllLanguages();
    return languages;
  }

  @Post()
  @UseGuards(AuthGuard)
  async saveLanguage(
    @Body('code') code: string,
    @Body('name')
    name: {
      lang: string;
      value: string;
    }[],
  ) {
    const result: boolean = await this.languageService.saveLanguage({
      code,
      name,
    });

    return result;
  }
}
