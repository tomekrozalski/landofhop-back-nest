import { Beverage } from 'utils/types';

type Props = {
	id: string
	outline: string
}

const updateContainerOutline = function ({ id, outline }: Props): boolean {
	return this.updateOne({ _id: id }, {
		$set: {
			'editorial.photos.outlines.gallery': outline
		}
	})
		.then(() => {
			return true;
		})
		.catch(() => {
			return false
		});
}

export default updateContainerOutline;
