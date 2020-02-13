import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';

import { SiteLanguage } from 'utils/enums';
import { AuthGuard } from 'utils/guards';
import { TranslatedBeverage as TranslatedBeverageUpdatedImages } from 'utils/types/beverage/getUpdatedBeverageImages';
import { TranslatedBeverage as BeverageSearchTranslatedResults } from 'utils/types/beverage/getUpdatedBeverageImages';
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

	// -------------------------------------------------
	// Temporal method, I will not need it in the future
	@Get('update-cover-outline/:id/:shortId/:brand/:badge')
	@UseGuards(AuthGuard)
	async updateCoverOutline(
		@Param('badge') badge: string,
		@Param('brand') brand: string,
		@Param('id') id: string,
		@Param('shortId') shortId: string,
	) {
		const result = this.beverageService.updateCoverOutline({ badge, brand, id, shortId });
		return result;
	}

	// -------------------------------------------------
	// Temporal method, I will not need it in the future
	@Get('update-container-outline/:id/:shortId/:brand/:badge')
	@UseGuards(AuthGuard)
	async updateContainerOutline(
		@Param('badge') badge: string,
		@Param('brand') brand: string,
		@Param('id') id: string,
		@Param('shortId') shortId: string,
	) {
		const result = this.beverageService.updateContainerOutline({ badge, brand, id, shortId });
		return result;
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

	@Get('update-beverage-images/:language/:shortId/:brand/:badge')
	@UseGuards(AuthGuard)
	async getUpdatedBeverageImages(
		@Param('language') language: SiteLanguage,
		@Param('shortId') shortId: string,
		@Param('brand') brand: string,
		@Param('badge') badge: string,
	) {
		const beverage: TranslatedBeverageUpdatedImages = await this.beverageService.getUpdatedBeverageImages({
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
		const beverage: BeverageSearchTranslatedResults[] =
			await this.beverageService.beverageSearch({ language, phrase });

		return beverage;
	}

	// @Delete(':badge')
	// removeBeverage(@Param('badge') badge: string) {
	// 	return this.beverageService.removeBeverage(badge);
	// }
}
