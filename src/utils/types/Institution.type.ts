import { LanguageValue } from '.';

export type Institution = {
  badge: string;
  id: string;
  name: LanguageValue[];
  shortId: string;
  website?: string;
  consortium?: LanguageValue[];
};
