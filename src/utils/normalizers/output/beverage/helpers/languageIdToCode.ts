import * as mongoose from 'mongoose';
import { Language, LanguageValue } from 'utils/types';

type Props = {
  values: LanguageValue[];
  languages: Language[];
};

const languageIdToCode = ({ languages, values }: Props) =>
  values.map(({ language, value }: LanguageValue) => {
    const code = languages.find(
      ({ id }) =>
        mongoose.Types.ObjectId(id).toString() ===
        mongoose.Types.ObjectId(language).toString(),
    )?.code;

    return {
      ...(language && { language: code }),
      value,
    };
  });

export default languageIdToCode;
