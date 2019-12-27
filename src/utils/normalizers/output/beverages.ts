import { get, isEmpty } from 'lodash';

import { SiteLanguage } from 'utils/enums';
import { Beverage } from 'utils/types';
import { NormalizedBeverage } from 'utils/types/normalized';
import { getValueByLanguage } from 'utils/helpers';

type Props = {
	beverage: Beverage
	language: SiteLanguage
}

const normalizeBeverageDetails = ({ beverage, language }: Props): NormalizedBeverage => {
	const translate = values => getValueByLanguage(values, language);
	const label = query => get(beverage, `label.${query}`);
	const producer = query => get(beverage, `producer.${query}`);
	const editorial = query => get(beverage, `editorial.${query}`);

	const normalizeCooperation = (type: 'label' | 'producer' | 'editorial') =>
		get(beverage, `${type}.general.cooperation`).map(({ badge, name, shortId, website }) => ({
			badge,
			shortId,
			name: translate(name),
			website
		}));

	const formattedObject = {
		badge: beverage.badge,
		name: translate(label('general.name')),
		series: {
			...(label('general.series') && { label: label('general.series') }),
			...(producer('general.series') && { producer: producer('general.series') })
		},
		brand: {
			badge: label('general.brand.badge'),
			name: translate(label('general.brand.name')),
			shortId: label('general.brand.shortId'),
			...(get(beverage, 'beverage.general.brand.website') && { website: get(beverage, 'beverage.general.brand.website') }),
			...(!isEmpty(label('general.brand.consortium')) && { consortium: translate(label('general.brand.consortium')) }),
		},
		cooperation: {
			...(!isEmpty(label('general.cooperation')) && { label: normalizeCooperation('label') }),
			...(!isEmpty(producer('general.cooperation')) && { producer: normalizeCooperation('producer') }),
			...(!isEmpty(editorial('general.cooperation')) && { editorial: normalizeCooperation('editorial') })
		}
	};

	if (isEmpty(formattedObject.series)) {
		delete formattedObject.series;
	}

	if (isEmpty(formattedObject.cooperation)) {
		delete formattedObject.cooperation;
	}

	return formattedObject as NormalizedBeverage;
}

export default normalizeBeverageDetails;
