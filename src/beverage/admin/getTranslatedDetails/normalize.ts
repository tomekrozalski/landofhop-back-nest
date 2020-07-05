import { SiteLanguage } from 'utils/enums';
import { LanguageValue } from 'utils/types';
import { Beverage } from 'beverage/utils/types';
import {
  beverageDetailsNormalizer,
  getValueByLanguage,
  languageIdToCode,
} from 'beverage/utils/helpers';
import { NormalizedBeverageType } from './NormalizedBeverage.type';

/* ---------------------------------------------------
 * DETAILS BEVERAGE NORMALIZATION
 *
 * I use it in Gatsby to fetch beverage details on
 * admin demand. I use it only to update data, which
 * I already have from the regular call (prefetching).
 * Anyway, language-value arrays are translated here
 * and language id is replaced by language code
 */

const details = (
  beverage: Beverage,
  language: SiteLanguage,
): NormalizedBeverageType => {
  const transformLanguage = ({ values }: { values: LanguageValue[] }) =>
    languageIdToCode({
      languages: beverage.language,
      values,
    });

  const translate = ({
    strict,
    values,
  }: {
    strict?: boolean;
    values: LanguageValue[];
  }) => getValueByLanguage(transformLanguage({ values }), language, strict);

  return beverageDetailsNormalizer({ beverage, transformLanguage, translate });
};

export default details;
