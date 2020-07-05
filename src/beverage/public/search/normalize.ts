import { SiteLanguage } from 'utils/enums';
import { getValueByLanguage } from 'beverage/utils/helpers';
import { RawBeverageType } from './RawBeverage.type';
import { NormalizedBeverageType } from './NormalizedBeverate.type';

type Props = {
  beverage: RawBeverageType;
  language: SiteLanguage;
};

const normalize = ({ beverage, language }: Props): NormalizedBeverageType => {
  const translate = values => getValueByLanguage(values, language, false);

  return {
    ...beverage,
    name: translate(beverage.name),
    brand: {
      ...beverage.brand,
      name: translate(beverage.brand.name),
    },
  };
};

export default normalize;
