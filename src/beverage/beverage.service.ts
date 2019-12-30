import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { SiteLanguage } from 'utils/enums';
import { Beverage } from 'utils/types';
import { NormalizedBeverage, NormalizedTranslatedBeverage } from 'utils/types/normalized';
import normalizeBeverageDetails from 'utils/normalizers/output/beverage';
import { getValueByLanguage } from 'utils/helpers';

@Injectable()
export class BeverageService {
	constructor(@InjectModel('Beverage') private readonly beverageModel: Model<Beverage>) { }

	// async addBeverage(badge: string, added: Date) {
	// 	const newBeverage = new this.beverageModel({});
	// 	const result = await newBeverage.save();

	// 	// @ToDo: test it
	// 	console.log('-->', result);
	// 	return result._id as string;
	// }

	async getAllBeverages() {
		const rawBeverages: Beverage[] = await this.beverageModel.getAllBeverages();
		const formattedBeverages: NormalizedBeverage[] = rawBeverages.map(beverage => normalizeBeverageDetails({ beverage, translated: false }));

		return formattedBeverages;
	}

	async getBeverage({
		language,
		shortId,
		brand,
		badge,
	}: {
		language: SiteLanguage,
		shortId: string,
		brand: string,
		badge: string,
	}) {
		const rawBeverages: Beverage[] = await this.beverageModel.getBeverage(badge, brand, shortId);
		const formattedBeverage: NormalizedTranslatedBeverage = normalizeBeverageDetails({ beverage: rawBeverages[0], language, translated: true });

		return formattedBeverage;
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
