import { ContainerType } from '../enums/beverage';
import { LanguageValue } from '.';

export type BeverageBasics = {
	id: string
	shortId: string
	badge: string
	name: LanguageValue[]
	brand: {
		badge: string
		name: LanguageValue[]
	}
	containerType: ContainerType
}
