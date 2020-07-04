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

  async getAllInstitutions(): Promise<Institution[]> {
    const institutions: Institution[] = await this.institutionModel.getAllInstitutions();
    return institutions;
  }

  async saveInstitution({
    badge,
    name,
    ownedBy,
    shortId,
    website,
  }): Promise<Institution[]> {
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

    const updatedInstitutions = await this.getAllInstitutions();
    return updatedInstitutions;
  }
}
