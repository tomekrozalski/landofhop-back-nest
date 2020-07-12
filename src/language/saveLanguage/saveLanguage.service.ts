import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Language } from 'utils/types';

@Injectable()
export class SaveLanguageService {
  constructor(
    @InjectModel('Language')
    private readonly languageModel: Model<Language>,
  ) {}

  async saveLanguage({ code, name }): Promise<Language[]> {
    const newLanguage = new this.languageModel({
      code,
      name: name.map(({ lang, value }) => ({
        ...(lang !== 'none' && { language: lang }),
        value,
      })),
    });

    await newLanguage.save();

    const updatedLanguages = await this.languageModel.getAllLanguages();
    return updatedLanguages;
  }
}
