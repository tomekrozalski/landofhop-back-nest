import { LanguageValue } from '../';
import { NormalizedInstitution } from '.';

export type NormalizedBeverage = {
	badge: string
	name: LanguageValue
	series?: {
		label?: LanguageValue[]
		producer?: LanguageValue[]
	}
	brand: NormalizedInstitution
	cooperation?: {
		label?: NormalizedInstitution[]
		producer?: NormalizedInstitution[]
		editorial?: NormalizedInstitution[]
	}
}
