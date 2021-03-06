import * as mongoose from 'mongoose';
import { Language, LanguageValue } from 'utils/types';

type Props = {
  values: any[];
  languages: Language[];
};

const languageIdToCode = ({ languages, values }: Props) =>
  values.map(({ language, ...rest }: any) => {
    const code = languages.find(
      ({ id }) =>
        mongoose.Types.ObjectId(id).toString() ===
        mongoose.Types.ObjectId(language).toString(),
    )?.code;

    return {
      ...(language && { language: code }),
      ...rest,
    };
  });

export default languageIdToCode;
