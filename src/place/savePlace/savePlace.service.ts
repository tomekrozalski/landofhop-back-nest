import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Place } from 'utils/types';

@Injectable()
export class SavePlaceService {
  constructor(
    @InjectModel('Place')
    private readonly placeModel: Model<Place>,
  ) {}

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

    const updatedPlaces = await this.placeModel.getAllPlaces();
    return updatedPlaces;
  }
}
