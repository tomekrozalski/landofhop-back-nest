import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Institution } from 'utils/types';

@Injectable()
export class InstitutionService {
  constructor(
    @InjectModel('Institution')
    private readonly institutionModel: Model<Institution>,
  ) {}

  async getAllInstitutions() {
    const institutions: Institution[] = await this.institutionModel.getAllInstitutions();
    return institutions;
  }

  async saveInstitution({ badge, name, ownedBy, shortId, website }) {
    const newInstitution = new this.institutionModel({
      badge,
      name: name.map(({ lang, value }) => ({
        ...(lang !== 'none' && { language: lang }),
        value,
      })),
      ...(ownedBy && { consortium: ownedBy }),
      shortId,
      ...(website && { website }),
    });

    await newInstitution.save();
    return true;
  }
}
