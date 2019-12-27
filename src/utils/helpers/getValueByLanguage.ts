import { LanguageValue } from '../types';
import { SiteLanguage } from '../enums';

export default (values: LanguageValue[], language: SiteLanguage) =>
	values.find(item => item.language === language) || values[0];
