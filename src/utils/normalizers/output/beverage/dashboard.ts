import { Beverage, LanguageValue } from 'utils/types';
import { Dashboard as NormalizedBeverageForDashboard } from 'utils/types/normalized/beverage';
import common from './common';

/* ---------------------------------------------------
 * DASHBOARD BEVERAGE NORMALIZATION
 *
 * I use it in Gatsby to admin fetch on demand.
 * So language-value arrays are not translated and
 * language id remains just the id
 */

const dashboard = (beverage: Beverage): NormalizedBeverageForDashboard => {
  const transformLanguage = ({ values }: { values: LanguageValue[] }) => values;

  const translate = ({ values }: { values: LanguageValue[] }) =>
    transformLanguage({ values });

  return common({ beverage, transformLanguage, translate });
};

export default dashboard;
