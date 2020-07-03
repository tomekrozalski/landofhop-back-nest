import { RawBeverage } from 'utils/types/beverage/getBeverageImagesData';

type Props = {
  id: string;
  images: number;
};

const saveGallery = function({ id, images }: Props): RawBeverage {
  return this.findByIdAndUpdate(
    id,
    {
      'editorial.photos.gallery': images,
    },
    { useFindAndModify: false },
  );
};

export default saveGallery;
