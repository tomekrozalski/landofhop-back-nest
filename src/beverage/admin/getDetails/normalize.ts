import { LanguageValue } from 'utils/types';
import { Beverage } from 'beverage/utils/types';
import { beverageDetailsNormalizer } from 'beverage/utils/helpers';
import { NormalizedBeverageType } from './NormalizedBeverage.type';

/* ---------------------------------------------------
 * DASHBOARD BEVERAGE NORMALIZATION
 *
 * I use it in Gatsby to admin fetch on demand.
 * So language-value arrays are not translated and
 * language id remains just the id
 */

const normalize = (beverage: Beverage): NormalizedBeverageType => {
  const transformLanguage = ({ values }: { values: LanguageValue[] }) => values;

  const translate = ({ values }: { values: LanguageValue[] }) =>
    transformLanguage({ values });

  return beverageDetailsNormalizer({ beverage, transformLanguage, translate });
};

export default normalize;
