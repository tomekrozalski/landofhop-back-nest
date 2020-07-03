import { RawBeverage } from 'utils/types/beverage/getBeverageImagesData';

type Props = {
  height: number;
  id: string;
  width: number;
};

const saveCover = function({ height, id, width }: Props): RawBeverage {
  return this.findByIdAndUpdate(
    id,
    {
      'editorial.photos.cover': { height, width },
    },
    { useFindAndModify: false },
  );
};

export default saveCover;
