import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'utils/guards';
import { Institution } from 'utils/types';
import { InstitutionService } from './institution.service';

@Controller('institution')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @Get()
  async getAllInstitutions() {
    const institutions: Institution[] = await this.institutionService.getAllInstitutions();
    return institutions;
  }

  @Post()
  @UseGuards(AuthGuard)
  async saveInstitution(
    @Body('badge') badge: string,
    @Body('name')
    name: {
      lang: string;
      value: string;
    }[],
    @Body('ownedBy') ownedBy: string,
    @Body('shortId') shortId: string,
    @Body('website') website: string,
  ) {
    const result: boolean = await this.institutionService.saveInstitution({
      badge,
      name,
      ownedBy,
      shortId,
      website,
    });

    return result;
  }
}
