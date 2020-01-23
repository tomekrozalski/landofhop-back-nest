import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { SiteLanguage } from 'utils/enums';
import {
	NormalizedBeverage,
	NormalizedTranslatedBeverage,
	TranslatedBeverageBasics,
} from 'utils/types/normalized';
import { BeverageService } from './beverage.service';

@Controller('beverage')
export class BeverageController {
	constructor(private readonly beverageService: BeverageService) { }

	// @Post()
	// async addBeverage(@Body('badge') badge: string, @Body('added') added: string) {
	// 	const generatedId = await this.beverageService.addBeverage(badge, new Date(added));

	// 	return { id: generatedId };
	// }

	@Get()
	async getAllBeverages() {
		const beverages: NormalizedBeverage[] = await this.beverageService.getAllBeverages();
		return beverages;
	}

	@Get(':language/:shortId/:brand/:badge')
	async getBeverage(
		@Param('language') language: SiteLanguage,
		@Param('shortId') shortId: string,
		@Param('brand') brand: string,
		@Param('badge') badge: string,
	) {
		const beverage: NormalizedTranslatedBeverage = await this.beverageService.getBeverage({
			language,
			shortId,
			brand,
			badge,
		});

		return beverage;
	}

	@Post('search')
	async beverageSearch(
		@Body('language') language: SiteLanguage,
		@Body('phrase') phrase: string,
	) {
		const beverage: TranslatedBeverageBasics[] =
			await this.beverageService.beverageSearch({ language, phrase });

		return beverage;
	}

	// @Put(':badge')
	// updateBeverage(@Param('badge') badge: string, @Body('added') added: string) {
	// 	return this.beverageService.updateBeverage(badge, new Date(added));
	// }

	// @Delete(':badge')
	// removeBeverage(@Param('badge') badge: string) {
	// 	return this.beverageService.removeBeverage(badge);
	// }
}
