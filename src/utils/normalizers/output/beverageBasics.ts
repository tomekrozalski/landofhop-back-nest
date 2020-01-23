import { BeverageBasics } from 'utils/types';
import { TranslatedBeverageBasics } from 'utils/types/normalized';
import { SiteLanguage } from 'utils/enums';
import { getValueByLanguage } from 'utils/helpers';

type Props = {
	beverage: BeverageBasics
	language: SiteLanguage
}

const normalizeBeverageBasics = ({ beverage, language }: Props): TranslatedBeverageBasics => {
	const translate = values => getValueByLanguage(values, language, false);

	return {
		...beverage,
		name: translate(beverage.name),
		brand: {
			...beverage.brand,
			name: translate(beverage.brand.name),
		}
	};
}

export default normalizeBeverageBasics;
