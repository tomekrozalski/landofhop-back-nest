import { Controller, Get } from '@nestjs/common';

import { Language } from 'utils/types';
import { GetAllLanguagesService } from './getAllLanguages.service';

@Controller('language')
export class GetAllLanguagesController {
  constructor(private readonly languageService: GetAllLanguagesService) {}

  @Get()
  async getAllLanguages() {
    const languages: Language[] = await this.languageService.getAllLanguages();
    return languages;
  }
}
