import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Language } from 'utils/types';

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel('Language')
    private readonly languageModel: Model<Language>,
  ) {}

  async getAllLanguages() {
    const languages: Language[] = await this.languageModel.getAllLanguages();
    return languages;
  }

  async saveLanguage({ code, name }) {
    const newLanguage = new this.languageModel({
      code,
      name: name.map(({ lang, value }) => ({
        ...(lang !== 'none' && { language: lang }),
        value,
      })),
    });

    await newLanguage.save();
    return true;
  }
}
