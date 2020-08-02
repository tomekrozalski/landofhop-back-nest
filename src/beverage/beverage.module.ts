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
  RemoveBeverageController,
  RemoveBeverageService,
  UpdateBeverageController,
  UpdateBeverageService,
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
    GetAllBeveragesDetailsController,
    SearchBeverageController,
    CapController,
    CoverController,
    GalleryController,
    OutlinesController,
    RemoveBeverageController,
    UpdateBeverageController,
  ],
  providers: [
    AddNewBeverageService,
    GetDetailsService,
    GetLastTilesService,
    GetImagesDataService,
    GetAllBeveragesDetailsService,
    SearchBeverageService,
    CapService,
    CoverService,
    GalleryService,
    RemoveBeverageService,
    OutlinesService,
    UpdateBeverageService,
  ],
})
export class BeverageModule {}
