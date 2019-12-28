import {
	get,
	isBoolean,
	isEmpty,
	isNumber,
	unset,
} from 'lodash';

import { SiteLanguage, DataLanguage } from 'utils/enums';
import { Beverage } from 'utils/types';
import { NormalizedBeverage } from 'utils/types/normalized';
import { getValueByLanguage } from 'utils/helpers';

type Props = {
	beverage: Beverage
	language: SiteLanguage
}

const normalizeBeverageDetails = ({ beverage, language }: Props): NormalizedBeverage => {
	const translate = (values, strict = false) => getValueByLanguage(values, language, strict);
	const label = query => get(beverage, `label.${query}`);
	const producer = query => get(beverage, `producer.${query}`);
	const editorial = query => get(beverage, `editorial.${query}`);

	const normalizeBrand = institution => ({
		badge: institution.badge,
		name: translate(institution.name),
		shortId: institution.shortId,
		...(institution.website && { website: institution.website }),
		...(institution.consortium && { consortium: translate(institution.consortium) }),
	});

	const normalizePlace = place => ({
		city: translate(place.city),
		country: translate(place.country.name),
	});

	const normalizeExtract = ({ relate, unit, value }) => ({
		relate,
		unit,
		value: +value,
	});

	const normalizeAlcohol = alcohol => ({
		...(alcohol.relate && { relate: alcohol.relate }),
		...(alcohol.unit && { unit: alcohol.unit }),
		...(alcohol.value && { value: +alcohol.value }),
		...(alcohol.scope && { scope: alcohol.scope }),
	});

	const normalizeAged = (type: 'label' | 'producer' | 'editorial') => {
		const value = get(beverage, `${type}.brewing.aged`);

		if (!isEmpty(value)) {
			if (value.length === 1 && isEmpty(value[0])) {
				return { [type]: true }
			}

			return { [type]: get(beverage, `${type}.brewing.aged`) }
		}

		return false;
	}

	const normalizeDryHopping = (type: 'label' | 'producer' | 'editorial') => {
		if (!isEmpty(get(beverage, `${type}.brewing.dryHopped.hops`))) {
			return { [type]: get(beverage, `${type}.brewing.dryHopped.hops`).map(({ name }) => translate(name)) }
		}

		if (get(beverage, `${type}.brewing.isDryHopped`)) {
			return { [type]: true }
		}

		return false;
	}

	const formattedObject = {
		shortId: beverage.shortId,
		badge: beverage.badge,
		name: translate(label('general.name')),
		series: {
			...(label('general.series') && { label: label('general.series') }),
			...(producer('general.series') && { producer: producer('general.series') })
		},
		brand: normalizeBrand(label('general.brand')),
		cooperation: {
			...(!isEmpty(label('general.cooperation')) && { label: label('general.cooperation').map(normalizeBrand) }),
			...(!isEmpty(producer('general.cooperation')) && { producer: producer('general.cooperation').map(normalizeBrand) }),
			...(!isEmpty(editorial('general.cooperation')) && { editorial: editorial('general.cooperation').map(normalizeBrand) })
		},
		contract: {
			...(!isEmpty(label('general.contract')) && { label: normalizeBrand(label('general.contract')) }),
			...(!isEmpty(producer('general.contract')) && { producer: normalizeBrand(producer('general.contract')) }),
			...(!isEmpty(editorial('general.contract')) && { editorial: normalizeBrand(editorial('general.contract')) })
		},
		place: {
			...(label('general.place.city') && { label: normalizePlace(label('general.place')) }),
			...(producer('general.place.city') && { producer: normalizePlace(producer('general.place')) }),
			...(editorial('general.place.city') && { editorial: normalizePlace(editorial('general.place')) })
		},
		tale: {
			...(label('general.tale') && { label: label('general.tale') }),
			...(producer('general.tale') && { producer: translate(producer('general.tale'), true) }),
		},
		...(label('general.barcode') && { barcode: label('general.barcode') }),
		fermentation: {
			...(!isEmpty(label('brewing.fermentation')) && { label: label('brewing.fermentation') }),
			...(!isEmpty(producer('brewing.fermentation')) && { producer: producer('brewing.fermentation') }),
			...(!isEmpty(editorial('brewing.fermentation')) && { editorial: editorial('brewing.fermentation') })
		},
		extract: {
			...(!isEmpty(label('brewing.extract')) && { label: normalizeExtract(label('brewing.extract')) }),
			...(!isEmpty(producer('brewing.extract')) && { producer: normalizeExtract(producer('brewing.extract')) })
		},
		alcohol: {
			...(!isEmpty(label('brewing.alcohol')) && { label: normalizeAlcohol(label('brewing.alcohol')) }),
			...(!isEmpty(producer('brewing.alcohol')) && { producer: normalizeAlcohol(producer('brewing.alcohol')) }),
			...(!isEmpty(editorial('brewing.alcohol')) && { editorial: normalizeAlcohol(editorial('brewing.alcohol')) })
		},
		filtration: {
			...(isBoolean(label('brewing.filtration')) && { label: label('brewing.filtration') }),
			...(isBoolean(producer('brewing.filtration')) && { producer: producer('brewing.filtration') }),
			...(isBoolean(editorial('brewing.filtration')) && { editorial: editorial('brewing.filtration') })
		},
		pasteurization: {
			...(isBoolean(label('brewing.pasteurization')) && { label: label('brewing.pasteurization') }),
			...(isBoolean(producer('brewing.pasteurization')) && { producer: producer('brewing.pasteurization') }),
			...(isBoolean(editorial('brewing.pasteurization')) && { editorial: editorial('brewing.pasteurization') })
		},
		aged: {
			...(normalizeAged('label')),
			...(normalizeAged('producer')),
			...(normalizeAged('editorial'))
		},
		style: {
			...(!isEmpty(label('brewing.style')) && { label: label('brewing.style') }),
			...(!isEmpty(producer('brewing.style')) && { producer: producer('brewing.style') }),
			...(!isEmpty(editorial('brewing.style')) && { editorial: editorial('brewing.style') })
		},
		dryHopped: {
			...(normalizeDryHopping('label')),
			...(normalizeDryHopping('producer')),
			...(normalizeDryHopping('editorial'))
		},
		expirationDate: {
			...(!isEmpty(label('brewing.expirationDate')) && { label: label('brewing.expirationDate') }),
			...(!isEmpty(producer('brewing.expirationDate')) && { producer: producer('brewing.expirationDate') })
		},
		ingredientsDescription: {
			...(label('ingredients.description') && { label: translate(label('ingredients.description')) }),
			...(producer('ingredients.description') && { producer: translate(producer('ingredients.description')) }),
		},
		ingredientsList: {
			...(label('ingredients.list') && { label: label('ingredients.list').map(({ name, type }) => ({ name: translate(name), type })) }),
			...(producer('ingredients.list') && { producer: producer('ingredients.list').map(({ name, type }) => ({ name: translate(name), type })) }),
		},
		smokedMalt: {
			...(isBoolean(label('ingredients.smokedMalt')) && { label: label('ingredients.smokedMalt') }),
			...(isBoolean(producer('ingredients.smokedMalt')) && { producer: producer('ingredients.smokedMalt') }),
		},
		bitterness: {
			...(isNumber(label('impressions.bitterness')) && { label: label('impressions.bitterness') }),
			...(isNumber(producer('impressions.bitterness')) && { producer: producer('impressions.bitterness') }),
		},
		sweetness: {
			...(isNumber(label('impressions.sweetness')) && { label: label('impressions.sweetness') }),
			...(isNumber(producer('impressions.sweetness')) && { producer: producer('impressions.sweetness') }),
		},
		fullness: {
			...(isNumber(label('impressions.fullness')) && { label: label('impressions.fullness') }),
			...(isNumber(producer('impressions.fullness')) && { producer: producer('impressions.fullness') }),
		},
		power: {
			...(isNumber(label('impressions.power')) && { label: label('impressions.power') }),
			...(isNumber(producer('impressions.power')) && { producer: producer('impressions.power') }),
		},
		hoppyness: {
			...(isNumber(label('impressions.hoppyness')) && { label: label('impressions.hoppyness') }),
			...(isNumber(producer('impressions.hoppyness')) && { producer: producer('impressions.hoppyness') }),
		},
		temperature: {
			...(!isEmpty(label('impressions.temperature')) && { label: label('impressions.temperature') }),
			...(!isEmpty(producer('impressions.temperature')) && { producer: producer('impressions.temperature') }),
		},
		color: {
			...(editorial('impressions.color') && { editorial: editorial('impressions.color') }),
		},
		clarity: {
			...(editorial('impressions.clarity') && { editorial: editorial('impressions.clarity') }),
		},
		container: {
			color: label('container.color'),
			material: label('container.material'),
			unit: label('container.unit'),
			type: label('container.type'),
			value: label('container.value'),
			...(isBoolean(label('container.hasCapWireFlip')) && { hasCapWireFlip: label('container.hasCapWireFlip') })
		},
		price: {
			...(!isEmpty(label('price')) && { label: label('price').map(({ value, ...rest }) => ({ ...rest, value: +value })) }),
			...(!isEmpty(producer('price')) && { producer: producer('price').map(({ value, ...rest }) => ({ ...rest, value: +value })) }),
			...(!isEmpty(editorial('price')) && { editorial: editorial('price').map(({ value, ...rest }) => ({ ...rest, value: +value })) }),
		},
		photos: {
			...(editorial('photos.cap') && { cap: true }),
			...(editorial('photos.cover') && { cover: editorial('photos.cover') }),
			...(editorial('photos.gallery') && { gallery: editorial('photos.gallery') }),
		},
		...(editorial('notes') && { notes: editorial('notes') }),
		added: beverage.added,
		...(beverage.updated && { updated: beverage.updated }),
	};

	const deleteIfEmpty = (fields: string[]) => {
		fields.forEach(field => {
			if (isEmpty(get(formattedObject, field))) {
				unset(formattedObject, field);
			}
		})
	}

	deleteIfEmpty([
		'series',
		'cooperation',
		'contract',
		'place',
		'tale.producer',
		'tale',
		'fermentation',
		'extract',
		'alcohol',
		'filtration',
		'pasteurization',
		'aged',
		'style',
		'dryHopped',
		'expirationDate',
		'ingredientsDescription',
		'ingredientsList',
		'smokedMalt',
		'bitterness',
		'sweetness',
		'fullness',
		'power',
		'hoppyness',
		'temperature',
		'color',
		'clarity',
		'price',
		'photos',
	]);

	return formattedObject as NormalizedBeverage;
}

export default normalizeBeverageDetails;
