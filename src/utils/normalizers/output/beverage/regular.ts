import { Beverage, LanguageValue } from 'utils/types';
import { Regular as NormalizedBeverage } from 'utils/types/normalized/beverage';
import { languageIdToCode } from './helpers';
import common from './common';

/* ---------------------------------------------------
 * REGULAR BEVERAGE NORMALIZATION
 *
 * I use it in Gatsby to prefetch all beverages.
 * So language-value arrays are not translated, but
 * language id is replaced by language code
 */

const regular = (beverage: Beverage): NormalizedBeverage => {
  const transformLanguage = ({ values }: { values: LanguageValue[] }) =>
    languageIdToCode({
      languages: beverage.language,
      values,
    });

  const translate = ({ values }: { values: LanguageValue[] }) =>
    transformLanguage({ values });

  return common({ beverage, transformLanguage, translate });
};

export default regular;
