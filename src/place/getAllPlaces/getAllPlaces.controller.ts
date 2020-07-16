import { Controller, Get } from '@nestjs/common';

import { Place } from 'utils/types';
import { GetAllPlacesService } from './getAllPlaces.service';

@Controller('place')
export class GetAllPlacesController {
  constructor(private readonly placeService: GetAllPlacesService) {}

  @Get()
  async getAllplaces(): Promise<Place[]> {
    const places: Place[] = await this.placeService.getAllPlaces();
    return places;
  }
}
