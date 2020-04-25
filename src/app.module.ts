import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './user/user.module';
import { BeverageModule } from './beverage/beverage.module';
import { InstitutionModule } from './institution/institution.module';
import { PlaceModule } from './place/place.module';

@Module({
  imports: [
    UserModule,
    BeverageModule,
    InstitutionModule,
    PlaceModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@landofhop-ku9ye.mongodb.net/landofhop?retryWrites=true`,
    ),
  ],
})
export class AppModule {}
