import { LanguageValue } from 'utils/types';
import { SiteLanguage } from 'utils/enums';

type ExtendedLanguageValue = LanguageValue & { complete?: boolean };

export default (
  values: ExtendedLanguageValue[],
  language: string | SiteLanguage = SiteLanguage.pl,
  strict: boolean = false,
) => {
  if (strict && !values.find(item => item.language === language)) {
    return null;
  }

  return values.find(item => item.language === language) || values[0];
};
