import { RawBeverage as BeverageSearchRawResults } from 'utils/types/beverage/beverageSearch';
import { Search as NormalizedBeverageForSearch } from 'utils/types/normalized/beverage';
import { SiteLanguage } from 'utils/enums';
import { getValueByLanguage } from './helpers';

/* ---------------------------------------------------
 * SEARCH BEVERAGE NORMALIZATION
 *
 * I use it in Gatsby to fetch on use demand.
 * So language-value arrays are translated, but
 * language id I do not replace by language code
 * in the normalizer, because I do it earlier in
 * mongo query. Also it is not complete beverage
 * details data, but only data needed on tiles screen
 */

const search = (
  beverage: BeverageSearchRawResults,
  language: SiteLanguage,
): NormalizedBeverageForSearch => {
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
      ...(outline ? { outlines: { cover: outline } } : { outlines: null }),
    };
  }

  return result;
};

export default search;
