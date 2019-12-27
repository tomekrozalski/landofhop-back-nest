import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
	async getAllBeveragesDetails() {
		const beverages = await this.beverageService.getAllBeveragesDetails();
		return beverages;
	}

	// @Get(':badge')
	// getSingleBeverageDetails(@Param('badge') badge: string) {
	// 	return this.beverageService.getSingleBeverageDetails(badge);
	// }

	// @Put(':badge')
	// updateBeverage(@Param('badge') badge: string, @Body('added') added: string) {
	// 	return this.beverageService.updateBeverage(badge, new Date(added));
	// }

	// @Delete(':badge')
	// removeBeverage(@Param('badge') badge: string) {
	// 	return this.beverageService.removeBeverage(badge);
	// }
}
