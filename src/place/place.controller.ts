import { Controller, Get } from '@nestjs/common';

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
}
