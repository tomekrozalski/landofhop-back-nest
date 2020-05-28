import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { AuthGuard } from 'utils/guards';
import { Place } from 'utils/types';
import { PlaceService } from './place.service';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get()
  async getAllplaces() {
    const places: Place[] = await this.placeService.getAllPlaces();
    return places;
  }

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
  ) {
    const result: boolean = await this.placeService.savePlace({
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
