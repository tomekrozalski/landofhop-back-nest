import { LanguageValue } from 'utils/types';

export type Ingredient = {
  badge: string;
  name: LanguageValue[];
  type: string;
  parent?: string;
};
