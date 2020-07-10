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

  async savePlace({
    city,
    country,
    institution,
    latitude,
    longitude,
    shortId,
  }): Promise<Place[]> {
    const newPlace = new this.placeModel({
      city: city.map(({ lang, value }) => ({
        ...(lang !== 'none' && { language: lang }),
        value,
      })),
      country,
      institution,
      shortId,
      ...(latitude &&
        longitude && {
          location: {
            type: 'Point',
            coordinates: [latitude, longitude],
          },
        }),
    });

    await newPlace.save();

    const updatedPlaces = await this.getAllPlaces();
    return updatedPlaces;
  }
}
