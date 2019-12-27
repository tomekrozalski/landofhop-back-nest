import { LanguageValue } from '../';

export type NormalizedInstitution = {
	badge: string
	name: LanguageValue
	shortId: string
	website?: string
	consortium?: LanguageValue
}
