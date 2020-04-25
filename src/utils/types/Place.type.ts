import { LanguageValue } from '.';

export type Place = {
  city?: LanguageValue[];
  coordinates?: number[];
  country: LanguageValue[];
  id: string;
  institution: LanguageValue[];
};
