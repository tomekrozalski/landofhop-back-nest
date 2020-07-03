import { RawBeverage } from 'utils/types/beverage/getBeverageImagesData';

type Props = {
  id: string;
};

const removeGallery = function({ id }: Props): RawBeverage {
  return this.findByIdAndUpdate(
    id,
    {
      $unset: {
        'editorial.photos.gallery': '',
        'editorial.photos.outlines.gallery': '',
      },
    },
    { useFindAndModify: false },
  );
};

export default removeGallery;
