import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Beverage } from 'beverage/utils/types';
import { TileType } from './Tile.type';

@Injectable()
export class GetLastTilesService {
  constructor(
    @InjectModel('Beverage') private readonly beverageModel: Model<Beverage>,
  ) {}

  async getLastTiles(amount): Promise<TileType[]> {
    const tiles: TileType[] = await this.beverageModel.getLastTiles(amount);

    return tiles;
  }
}
