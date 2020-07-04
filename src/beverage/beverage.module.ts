import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BeverageSchema } from 'utils/schemas';
import {
  AddNewBeverageController,
  BeverageCapController,
  BeverageCoverController,
  BeverageGalleryController,
  BeverageOutlinesController,
  GetBeverageDetailsController,
} from './controllers';
import {
  AddNewBeverageService,
  BeverageCapService,
  BeverageCoverService,
  BeverageGalleryService,
  BeverageOutlinesService,
  GetBeverageDetailsService,
} from './services';

import { GetLastTilesController, GetLastTilesService } from './admin';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Beverage', schema: BeverageSchema }]),
  ],
  controllers: [
    GetBeverageDetailsController,
    AddNewBeverageController,
    BeverageCoverController,
    BeverageGalleryController,
    BeverageOutlinesController,
    BeverageCapController,

    GetLastTilesController,
  ],
  providers: [
    GetBeverageDetailsService,
    AddNewBeverageService,
    BeverageCoverService,
    BeverageGalleryService,
    BeverageOutlinesService,
    BeverageCapService,

    GetLastTilesService,
  ],
})
export class BeverageModule {}
