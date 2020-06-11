import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LanguageSchema } from 'utils/schemas';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Language', schema: LanguageSchema }]),
  ],
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class LanguageModule {}
