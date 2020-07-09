import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Beverage } from 'beverage/utils/types';
import { PatchType } from './Patch.type';
import normalize from './normalize';

@Injectable()
export class UpdateBeverageService {
  constructor(
    @InjectModel('Beverage') private readonly beverageModel: Model<Beverage>,
  ) {}

  async updateBeverage(data) {
    const [patch]: PatchType[] = await this.beverageModel.getPatchById(data.id);
    const normalizedData = normalize({ data, patch });

    console.log('normalizedData -->', normalizedData);

    const values: any = await this.beverageModel.update(
      data.id,
      normalizedData,
    );

    if (!values) {
      throw new BadRequestException('Something went wrong');
    }

    const [{ brand }] = await this.beverageModel.getBrandById(data.id);
    return { badge: data.badge, brand, shortId: patch.shortId };
  }
}
