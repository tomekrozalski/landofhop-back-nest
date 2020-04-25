import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Place } from 'utils/types';
import { normalizePlace } from 'utils/normalizers/output';

@Injectable()
export class PlaceService {
  constructor(
    @InjectModel('Place')
    private readonly placeModel: Model<Place>,
  ) {}

  async getAllPlaces() {
    const places: Place[] = await this.placeModel.getAllPlaces();
    return places.map(normalizePlace);
  }
}
