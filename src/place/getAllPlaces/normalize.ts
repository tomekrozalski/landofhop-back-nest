import { Place } from 'utils/types';

const normalizePlace = ({ coordinates, ...rest }: Place): Place => ({
  ...(coordinates && { coordinates: coordinates.map(value => +value) }),
  ...rest,
});

export default normalizePlace;
