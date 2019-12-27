import { Module } from '@nestjs/common';

import { BeverageModule } from './beverage/beverage.module'

@Module({
  imports: [BeverageModule],
})
export class AppModule { }
