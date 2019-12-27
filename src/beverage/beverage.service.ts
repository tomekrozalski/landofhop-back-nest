import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Beverage } from 'utils/types';

@Injectable()
export class BeverageService {
	beverages = [];

	constructor(@InjectModel('Beverage') private readonly beverageModel: Model<Beverage>) { }

	// async addBeverage(badge: string, added: Date) {
	// 	const newBeverage = new this.beverageModel({});
	// 	const result = await newBeverage.save();

	// 	// @ToDo: test it
	// 	console.log('-->', result);
	// 	return result._id as string;
	// }

	async getAllBeveragesDetails() {
		const result = await this.beverageModel.find().exec();

		return result as Beverage[];
	}

	// getSingleBeverageDetails(badge: string) {
	// 	const result = this.findBeverage(badge)[0];

	// 	return { ...result };
	// }

	// updateBeverage(badge: string, added: Date) {
	// 	const [result, resultIndex] = this.findBeverage(badge);

	// 	this.beverages[resultIndex] = { ...result, added };
	// }

	// removeBeverage(badge: string) {
	// 	const [_, resultIndex] = this.findBeverage(badge);

	// 	this.beverages.splice(resultIndex, 1);
	// 	return badge;
	// }

	// private findBeverage(badge): [Beverage, number] {
	// 	const resultIndex = this.beverages.findIndex((beverage) => beverage.badge === badge);
	// 	const result = this.beverages[resultIndex];

	// 	if (!result) {
	// 		throw new NotFoundException('Could not found a beverage');
	// 	}

	// 	return [result, resultIndex];
	// }
}
