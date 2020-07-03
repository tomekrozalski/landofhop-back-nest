import {
  Body,
  Controller,
  Delete,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { AuthGuard } from 'utils/guards';
import { BeverageCapService } from '../../services';

@Controller('beverage')
export class BeverageCapController {
  constructor(private readonly beverageService: BeverageCapService) {}

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
