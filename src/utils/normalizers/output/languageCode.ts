import * as mongoose from 'mongoose';
import { Language, LanguageValue } from 'utils/types';

type Props = {
  values: LanguageValue[];
  languages: Language[];
};

const getLanguageCode = ({ languages, values }: Props) =>
  values.map((props: LanguageValue) => {
    const language = languages.find(
      ({ id }) =>
        mongoose.Types.ObjectId(id).toString() ===
        mongoose.Types.ObjectId(props.language).toString(),
    )?.code;

    return {
      ...props,
      ...(language && { language }),
    };
  });

export default getLanguageCode;
