import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as sharp from 'sharp';
import * as potrace from 'potrace';
import * as SVGO from 'svgo';
import 'isomorphic-unfetch';

import { SiteLanguage } from 'utils/enums';
import { Beverage, BeverageBasics } from 'utils/types';
import { NormalizedBeverage, NormalizedTranslatedBeverage, TranslatedBeverageBasics } from 'utils/types/normalized';
import {
	RawBeverage as BeverageUpdatedImages,
	TranslatedBeverage as TranslatedBeverageUpdatedImages
} from 'utils/types/beverage/getUpdatedBeverageImages';

import {
	normalizeBeverageBasics,
	normalizeBeverageDetails,
	normalizeUpdatedBeverageImgages,
} from 'utils/normalizers/output';

import { getValueByLanguage } from 'utils/helpers';

@Injectable()
export class BeverageService {
	constructor(@InjectModel('Beverage') private readonly beverageModel: Model<Beverage>) { }

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

	async getTracedSVG({
		badge,
		brand,
		color,
		shortId,
		type,
	}) {
		const svgo = new SVGO({ multipass: true, floatPrecision: 0 });

		return new Promise((resolve, reject) => {
			const generalPath = `${process.env.IMAGES_SERVER}/${brand}/${badge}/${shortId}`;
			const imgPath = type === 'cover'
				? `${generalPath}/cover/jpg/4x.jpg`
				: `${generalPath}/container/jpg/4x/01.jpg`;
			const imgColor = `#${color}`;

			fetch(imgPath)
				.then(response => response.arrayBuffer())
				.then(data => {
					const image = Buffer.from(data);

					sharp(image)
						.resize(220)
						.toBuffer()
						.then(preparedImage => {
							potrace.trace(preparedImage, {
								color: imgColor,
								threshold: 200,
								optTolerance: 0.4,
								turdSize: 100,
								turnPolicy: potrace.Potrace.TURNPOLICY_MAJORITY,
							}, (err: any, svg: string) => {
								if (err) {
									reject();
								}

								svgo.optimize(svg)
									.then((result: any) => {
										resolve(result.data);
									});
							});
						})
						.catch(err => { reject(err) });
				});
		});
	}

	async updateCoverOutline({ badge, brand, id, shortId }) {
		const outline = await this.getTracedSVG({
			badge,
			brand,
			color: 'ddd',
			shortId,
			type: 'cover'
		});
		const response: boolean = await this.beverageModel.updateCoverOutline({ id, outline });
		return response;
	}

	async updateContainerOutline({ badge, brand, id, shortId }) {
		const outline = await this.getTracedSVG({
			badge,
			brand,
			color: 'ddd',
			shortId,
			type: 'container'
		});
		const response: boolean = await this.beverageModel.updateContainerOutline({ id, outline });
		return response;
	}

	async getUpdatedBeverageImages({
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
		const rawBeverage: BeverageUpdatedImages = await this.beverageModel.getUpdatedBeverageImages({ shortId, brand, badge });
		const formattedBeverage: TranslatedBeverageUpdatedImages = normalizeUpdatedBeverageImgages({ beverage: rawBeverage[0], language });

		return formattedBeverage;
	}

	async beverageSearch({
		language,
		phrase,
	}: {
		language: SiteLanguage,
		phrase: string,
	}) {
		const rawResults: BeverageBasics[] = await this.beverageModel.beverageSearch(phrase);

		if (!rawResults.length) {
			return [];
		}

		const formattedResults: TranslatedBeverageBasics[] = rawResults.map(beverage =>
			normalizeBeverageBasics({
				beverage,
				language,
			}));

		return formattedResults;
	}
}
