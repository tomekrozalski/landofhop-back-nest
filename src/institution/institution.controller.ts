import { Controller, Get } from '@nestjs/common';

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
}
