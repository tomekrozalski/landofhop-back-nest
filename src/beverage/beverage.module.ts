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
  ],
  providers: [
    GetBeverageDetailsService,
    AddNewBeverageService,
    BeverageCoverService,
    BeverageGalleryService,
    BeverageOutlinesService,
    BeverageCapService,
  ],
})
export class BeverageModule {}
