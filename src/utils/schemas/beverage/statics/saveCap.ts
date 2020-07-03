import { RawBeverage } from 'utils/types/beverage/getBeverageImagesData';

const saveCap = function({ id }: { id: string }): RawBeverage {
  return this.findByIdAndUpdate(
    id,
    { 'editorial.photos.cap': true },
    { useFindAndModify: false },
  );
};

export default saveCap;
