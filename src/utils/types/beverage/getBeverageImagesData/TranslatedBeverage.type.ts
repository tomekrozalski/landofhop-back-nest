import { ContainerType } from 'utils/enums/beverage';
import { LanguageValue } from 'utils/types';

export type TranslatedBeverage = {
	id: string
	shortId: string
	badge: string
	brand: {
		badge: string
		name: LanguageValue
	}
	name: LanguageValue
	photos?: {
		cover?: {
			height: number
			width: number
		}
		gallery?: number
		outlines?: {
			cover?: string
			gallery?: string
		}
	}
	container: {
		type: ContainerType
	}
}
