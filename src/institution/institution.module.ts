import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { InstitutionSchema } from 'utils/schemas';
import { InstitutionController } from './institution.controller';
import { InstitutionService } from './institution.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Institution', schema: InstitutionSchema },
    ]),
  ],
  controllers: [InstitutionController],
  providers: [InstitutionService],
})
export class InstitutionModule {}
