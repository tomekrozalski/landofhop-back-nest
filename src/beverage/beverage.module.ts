import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BeverageSchema } from 'utils/schemas';

import {
  AddNewBeverageController,
  AddNewBeverageService,
  GetDetailsController,
  GetDetailsService,
  GetImagesDataController,
  GetImagesDataService,
  GetLastTilesController,
  GetLastTilesService,
  GetTranslatedDetailsController,
  GetTranslatedDetailsService,
} from './admin';
import {
  CapController,
  CapService,
  CoverController,
  CoverService,
  GalleryController,
  GalleryService,
  OutlinesController,
  OutlinesService,
} from './images';
import {
  GetAllBeveragesDetailsController,
  GetAllBeveragesDetailsService,
} from './prefetch';
import { SearchBeverageController, SearchBeverageService } from './public';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Beverage', schema: BeverageSchema }]),
  ],
  controllers: [
    AddNewBeverageController,
    GetDetailsController,
    GetLastTilesController,
    GetImagesDataController,
    GetTranslatedDetailsController,
    GetAllBeveragesDetailsController,
    SearchBeverageController,
    CapController,
    CoverController,
    GalleryController,
    OutlinesController,
  ],
  providers: [
    AddNewBeverageService,
    GetDetailsService,
    GetLastTilesService,
    GetImagesDataService,
    GetTranslatedDetailsService,
    GetAllBeveragesDetailsService,
    SearchBeverageService,
    CapService,
    CoverService,
    GalleryService,
    OutlinesService,
  ],
})
export class BeverageModule {}
