import {
	RawBeverage as BeverageSearchRawResults,
	TranslatedBeverage as BeverageSearchTranslatedResults,
} from 'utils/types/beverage/beverageSearch';
import { SiteLanguage } from 'utils/enums';
import { getValueByLanguage } from 'utils/helpers';

type Props = {
	beverage: BeverageSearchRawResults
	language: SiteLanguage
}

const normalizeSearchResult = ({ beverage, language }: Props): BeverageSearchTranslatedResults => {
	const translate = values => getValueByLanguage(values, language, false);

	const result = {
		id: beverage.id,
		shortId: beverage.shortId,
		badge: beverage.badge,
		name: translate(beverage.name),
		brand: {
			...beverage.brand,
			name: translate(beverage.brand.name),
		},
		container: beverage.container,
		photos: null,
	};

	const cover = beverage.photos?.cover;
	const outline = beverage.photos?.outlines?.cover;

	if (cover || outline) {
		result.photos = {
			...(cover ? { cover } : { cover: null }),
			...(outline ? { outlines: { cover: outline } } : { outlines: null })
		}
	}

	return result;
}

export default normalizeSearchResult;
