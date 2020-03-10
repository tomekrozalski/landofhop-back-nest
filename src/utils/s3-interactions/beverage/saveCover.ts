import * as aws from 'aws-sdk';
import * as sharp from 'sharp';

const s3 = new aws.S3({});

aws.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export enum ImageSize {
	large,
	big,
	small,
}

export enum ImageFormat {
	jpg,
	webp,
}

const getWidth = (size: ImageSize) => {
	switch (size) {
		case ImageSize.large:
			return 880;
		case ImageSize.big:
			return 440;
		case ImageSize.small:
		default:
			return 220;
	}
}

const getName = (size: ImageSize) => {
	switch (size) {
		case ImageSize.large:
			return '4x';
		case ImageSize.big:
			return '2x';
		case ImageSize.small:
		default:
			return '1x';
	}
}

const saveCover = ({
	coverPath,
	format,
	image,
	size,
}: {
	coverPath: string,
	format: ImageFormat,
	image: any,
	size: ImageSize
}) => (
		new Promise((resolve, reject) => {
			if (format === ImageFormat.jpg) {
				sharp(image.buffer)
					.jpeg({})
					.resize(getWidth(size))
					.toBuffer((err, data) => (
						s3.upload({
							Bucket: 'land-of-hop-images',
							Key: `${coverPath}/jpg/${getName(size)}.jpg`,
							Body: data,
							ACL: 'public-read',
						}, (errors, data) => {
							if (errors) {
								reject(errors);
							} else {
								resolve(data);
							}
						})
					));
			}

			if (format === ImageFormat.webp) {
				sharp(image.buffer)
					.webp({})
					.resize(getWidth(size))
					.toBuffer((err, data) => (
						s3.upload({
							Bucket: 'land-of-hop-images',
							Key: `${coverPath}/webp/${getName(size)}.webp`,
							Body: data,
							ACL: 'public-read',
						}, (errors, data) => {
							if (errors) {
								reject(errors);
							} else {
								resolve(data);
							}
						})
					));
			}
		})
	);

export default saveCover;
