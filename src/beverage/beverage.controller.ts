import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

import { SiteLanguage } from 'utils/enums';
import { AuthGuard } from 'utils/guards';
import { TranslatedBeverage as TranslatedBeverageUpdatedImages } from 'utils/types/beverage/getUpdatedBeverageImages';
import { TranslatedBeverage as BeverageSearchTranslatedResults } from 'utils/types/beverage/getUpdatedBeverageImages';
import {
  Dashboard as NormalizedBeverageForDashboard,
  Regular as NormalizedBeverage,
} from 'utils/types/normalized/beverage';
import { BeverageService } from './beverage.service';

@Controller('beverage')
export class BeverageController {
  constructor(private readonly beverageService: BeverageService) {}

  @Get()
  async getAllBeverages() {
    const beverages: NormalizedBeverage[] = await this.beverageService.getAllBeverages();
    return beverages;
  }

  @Get(':shortId/:brand/:badge')
  async getBeverage(
    @Param('shortId') shortId: string,
    @Param('brand') brand: string,
    @Param('badge') badge: string,
  ) {
    const beverage: NormalizedBeverageForDashboard = await this.beverageService.getBeverage(
      {
        shortId,
        brand,
        badge,
      },
    );

    return beverage;
  }

  @Get('update-beverage-images/:language/:shortId/:brand/:badge')
  @UseGuards(AuthGuard)
  async getUpdatedBeverageImages(
    @Param('language') language: SiteLanguage,
    @Param('shortId') shortId: string,
    @Param('brand') brand: string,
    @Param('badge') badge: string,
  ) {
    const beverage: TranslatedBeverageUpdatedImages = await this.beverageService.getUpdatedBeverageImages(
      {
        language,
        shortId,
        brand,
        badge,
      },
    );

    return beverage;
  }

  @Post('search')
  async beverageSearch(
    @Body('language') language: SiteLanguage,
    @Body('phrase') phrase: string,
  ) {
    const beverage: BeverageSearchTranslatedResults[] = await this.beverageService.beverageSearch(
      { language, phrase },
    );

    return beverage;
  }

  // ------------------------------------------
  // IMAGES

  @Post('cover')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async saveCover(
    @Body('badge') badge: string,
    @Body('brand') brand: string,
    @Body('id') id: string,
    @UploadedFile() image,
    @Body('shortId') shortId: string,
  ) {
    const result: boolean = await this.beverageService.saveCover({
      badge,
      brand,
      id,
      image,
      shortId,
    });
    return result;
  }

  @Post('gallery')
  @UseGuards(AuthGuard)
  @UseInterceptors(FilesInterceptor('images'))
  async saveGallery(
    @Body('badge') badge: string,
    @Body('brand') brand: string,
    @Body('id') id: string,
    @UploadedFiles() images,
    @Body('shortId') shortId: string,
  ) {
    const result: boolean = await this.beverageService.saveGallery({
      badge,
      brand,
      id,
      images,
      shortId,
    });
    return result;
  }

  @Post('cap')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async saveCap(
    @Body('badge') badge: string,
    @Body('brand') brand: string,
    @Body('id') id: string,
    @UploadedFile() image,
    @Body('shortId') shortId: string,
  ) {
    const result: boolean = await this.beverageService.saveCap({
      badge,
      brand,
      id,
      image,
      shortId,
    });
    return result;
  }

  @Get('update-cover-outline/:id/:shortId/:brand/:badge')
  @UseGuards(AuthGuard)
  async updateCoverOutline(
    @Param('badge') badge: string,
    @Param('brand') brand: string,
    @Param('id') id: string,
    @Param('shortId') shortId: string,
  ) {
    const result = this.beverageService.updateCoverOutline({
      badge,
      brand,
      id,
      shortId,
    });
    return result;
  }

  @Get('update-container-outline/:id/:shortId/:brand/:badge')
  @UseGuards(AuthGuard)
  async updateContainerOutline(
    @Param('badge') badge: string,
    @Param('brand') brand: string,
    @Param('id') id: string,
    @Param('shortId') shortId: string,
  ) {
    const result = this.beverageService.updateContainerOutline({
      badge,
      brand,
      id,
      shortId,
    });
    return result;
  }

  @Delete('gallery')
  async removeGallery(
    @Body('badge') badge: string,
    @Body('brand') brand: string,
    @Body('files') files: number,
    @Body('id') id: string,
    @Body('shortId') shortId: string,
  ) {
    const result: boolean = await this.beverageService.removeGallery({
      badge,
      brand,
      files,
      id,
      shortId,
    });
    return result;
  }

  @Delete('cap')
  async removeCap(
    @Body('badge') badge: string,
    @Body('brand') brand: string,
    @Body('id') id: string,
    @Body('shortId') shortId: string,
  ) {
    const result: boolean = await this.beverageService.removeCap({
      badge,
      brand,
      id,
      shortId,
    });
    return result;
  }
}
