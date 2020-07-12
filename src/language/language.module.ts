import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LanguageSchema } from 'utils/schemas';
import {
  GetAllLanguagesController,
  GetAllLanguagesService,
} from './getAllLanguages';
import { SaveLanguageController, SaveLanguageService } from './saveLanguage';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Language', schema: LanguageSchema }]),
  ],
  controllers: [GetAllLanguagesController, SaveLanguageController],
  providers: [GetAllLanguagesService, SaveLanguageService],
})
export class LanguageModule {}
