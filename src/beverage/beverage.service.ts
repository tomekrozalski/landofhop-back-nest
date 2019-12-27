import { Injectable, NotFoundException } from '@nestjs/common';
import { Beverage } from './beverage.model';

@Injectable()
export class BeverageService {
	private beverages: Beverage[] = [];

	addBeverage(badge: string, added: Date) {
		const newBeverage = new Beverage(badge, added);
		this.beverages.push(newBeverage);

		return badge;
	}

	getAllBeveragesDetails() {
		return [...this.beverages];
	}

	getSingleBeverageDetails(badge: string) {
		const result = this.findBeverage(badge)[0];

		return { ...result };
	}

	updateBeverage(badge: string, added: Date) {
		const [result, resultIndex] = this.findBeverage(badge);

		this.beverages[resultIndex] = { ...result, added };
	}

	removeBeverage(badge: string) {
		const [_, resultIndex] = this.findBeverage(badge);

		this.beverages.splice(resultIndex, 1);
		return badge;
	}

	private findBeverage(badge): [Beverage, number] {
		const resultIndex = this.beverages.findIndex((beverage) => beverage.badge === badge);
		const result = this.beverages[resultIndex];

		if (!result) {
			throw new NotFoundException('Could not found a beverage');
		}

		return [result, resultIndex];
	}
}
