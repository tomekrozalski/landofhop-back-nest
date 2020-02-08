import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';

import { SiteLanguage } from 'utils/enums';
import { AuthGuard } from 'utils/guards';
import {
	NormalizedBeverage,
	NormalizedTranslatedBeverage,
	TranslatedBeverageBasics,
} from 'utils/types/normalized';
import { BeverageService } from './beverage.service';
import * as potrace from 'potrace';




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

	@Get('create-traced-svgs/:shortId/:brand/:badge')
	// @UseGuards(AuthGuard)
	async getTracedSVGs(
		@Param('shortId') shortId: string,
		@Param('brand') brand: string,
		@Param('badge') badge: string,
	) {

		await potrace.trace('https://land-of-hop-images.s3.eu-central-1.amazonaws.com/browar-stu-mostow/baltic-porter/93r65i/cover/jpg/4x.jpg', {
			color: '#666',
			threshold: 200,
			turdSize: 20,
			alphaMax: 20,
		}, (err: any, svg: string) => {

			if (err) {
				return false;
			}

			console.log('svg', svg);

			return svg;
		});

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
