import { Beverage, LanguageValue } from 'utils/types';
import { SiteLanguage } from 'utils/enums';
import { Regular as NormalizedBeverage } from 'utils/types/normalized/beverage';
import { getValueByLanguage, languageIdToCode } from './helpers';
import common from './common';

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
): NormalizedBeverage => {
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

  return common({ beverage, transformLanguage, translate });
};

export default details;
