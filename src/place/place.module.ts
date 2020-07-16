import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PlaceSchema } from 'utils/schemas';
import { GetAllPlacesController, GetAllPlacesService } from './getAllPlaces';
import { SavePlaceController, SavePlaceService } from './savePlace';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Place', schema: PlaceSchema }]),
  ],
  controllers: [GetAllPlacesController, SavePlaceController],
  providers: [GetAllPlacesService, SavePlaceService],
})
export class PlaceModule {}
