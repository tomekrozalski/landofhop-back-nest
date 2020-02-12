import { RawBeverage, TranslatedBeverage } from 'utils/types/beverage/getUpdatedBeverageImages';
import { SiteLanguage } from 'utils/enums';
import { getValueByLanguage } from 'utils/helpers';

type Props = {
	beverage: RawBeverage
	language: SiteLanguage
}

const normalizeUpdatedBeverageImgages = ({ beverage, language }: Props): TranslatedBeverage => {
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

export default normalizeUpdatedBeverageImgages;
