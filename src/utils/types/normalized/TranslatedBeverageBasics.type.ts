import { ContainerType } from '../../enums/beverage';
import { LanguageValue } from '../';

export type TranslatedBeverageBasics = {
	id: string
	shortId: string
	badge: string
	name: LanguageValue
	brand: {
		badge: string
		name: LanguageValue
	}
	containerType: ContainerType
}
