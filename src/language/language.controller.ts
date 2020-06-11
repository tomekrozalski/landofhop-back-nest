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
}
