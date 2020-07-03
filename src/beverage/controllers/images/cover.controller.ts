import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { AuthGuard } from 'utils/guards';
import { BeverageCoverService } from '../../services';

@Controller('beverage')
export class BeverageCoverController {
  constructor(private readonly beverageService: BeverageCoverService) {}

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
}
