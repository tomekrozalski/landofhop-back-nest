import { RawBeverage } from 'utils/types/beverage/getUpdatedBeverageImages';

type Props = {
  id: string;
};

const removeCap = function({ id }: Props): RawBeverage {
  return this.findByIdAndUpdate(
    id,
    {
      $unset: {
        'editorial.photos.cap': '',
      },
    },
    { useFindAndModify: false },
  );
};

export default removeCap;
