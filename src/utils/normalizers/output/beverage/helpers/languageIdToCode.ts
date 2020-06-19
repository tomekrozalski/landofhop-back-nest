import * as mongoose from 'mongoose';
import { Language, LanguageValue } from 'utils/types';

type ExtendedLanguageValue = LanguageValue & { complete?: boolean };

type Props = {
  values: ExtendedLanguageValue[];
  languages: Language[];
};

const languageIdToCode = ({ languages, values }: Props) =>
  values.map(({ language, value, complete }: ExtendedLanguageValue) => {
    const code = languages.find(
      ({ id }) =>
        mongoose.Types.ObjectId(id).toString() ===
        mongoose.Types.ObjectId(language).toString(),
    )?.code;

    return {
      ...(language && { language: code }),
      value,
      complete,
    };
  });

export default languageIdToCode;
