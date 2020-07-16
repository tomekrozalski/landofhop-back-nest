import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'utils/guards';
import { Place } from 'utils/types';
import { SavePlaceService } from './savePlace.service';

@Controller('place')
export class SavePlaceController {
  constructor(private readonly placeService: SavePlaceService) {}

  @Post()
  @UseGuards(AuthGuard)
  async savePlace(
    @Body('city')
    city: {
      lang: string;
      value: string;
    },
    @Body('country') country: string,
    @Body('institution') institution: string,
    @Body('latitude') latitude: number,
    @Body('longitude') longitude: number,
    @Body('shortId') shortId: string,
  ): Promise<Place[]> {
    const result: Place[] = await this.placeService.savePlace({
      city,
      country,
      institution,
      latitude,
      longitude,
      shortId,
    });

    return result;
  }
}
