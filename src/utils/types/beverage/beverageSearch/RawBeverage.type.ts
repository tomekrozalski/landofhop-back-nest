import { ContainerType } from 'utils/enums/beverage';
import { LanguageValue } from 'utils/types';

export type RawBeverage = {
	id: string
	shortId: string
	badge: string
	name: LanguageValue[]
	brand: {
		badge: string
		name: LanguageValue[]
	}
	photos?: {
		cover?: {
			height: number
			width: number
		}
		outlines?: {
			cover?: string
		}
	}
	container: {
		type: ContainerType
	}
}
