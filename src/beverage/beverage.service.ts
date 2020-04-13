import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as sharp from 'sharp';
import * as potrace from 'potrace';
import * as SVGO from 'svgo';
import * as sizeOf from 'buffer-image-size';
import 'isomorphic-unfetch';

import { SiteLanguage } from 'utils/enums';
import { Beverage } from 'utils/types';
import {
  NormalizedBeverage,
  NormalizedTranslatedBeverage,
} from 'utils/types/normalized';
import {
  RawBeverage as BeverageUpdatedImages,
  TranslatedBeverage as TranslatedBeverageUpdatedImages,
} from 'utils/types/beverage/getUpdatedBeverageImages';
import {
  RawBeverage as BeverageSearchRawResults,
  TranslatedBeverage as BeverageSearchTranslatedResults,
} from 'utils/types/beverage/getUpdatedBeverageImages';
import {
  normalizeBeverageDetails,
  normalizeSearchResult,
  normalizeUpdatedBeverageImgages,
} from 'utils/normalizers/output';
import {
  ImageFormat,
  ImageSize,
  removeCap,
  removeGallery,
  saveCap,
  saveCover,
  saveGallery,
} from 'utils/s3-interactions/beverage';

import { getValueByLanguage } from 'utils/helpers';

@Injectable()
export class BeverageService {
  constructor(
    @InjectModel('Beverage') private readonly beverageModel: Model<Beverage>,
  ) {}

  async getAllBeverages() {
    const rawBeverages: Beverage[] = await this.beverageModel.getAllBeverages();
    const formattedBeverages: NormalizedBeverage[] = rawBeverages.map(
      beverage => normalizeBeverageDetails({ beverage, translated: false }),
    );

    return formattedBeverages;
  }

  async getBeverage({
    shortId,
    brand,
    badge,
  }: {
    shortId: string;
    brand: string;
    badge: string;
  }) {
    const rawBeverages: Beverage[] = await this.beverageModel.getBeverage(
      badge,
      brand,
      shortId,
    );

    const formattedBeverage: NormalizedBeverage = normalizeBeverageDetails({
      beverage: rawBeverages[0],
      translated: false,
    });

    return formattedBeverage;
  }

  async getTranslatedBeverage({
    language,
    shortId,
    brand,
    badge,
  }: {
    language: SiteLanguage;
    shortId: string;
    brand: string;
    badge: string;
  }) {
    const rawBeverages: Beverage[] = await this.beverageModel.getBeverage(
      badge,
      brand,
      shortId,
    );
    const formattedBeverage: NormalizedTranslatedBeverage = normalizeBeverageDetails(
      { beverage: rawBeverages[0], language, translated: true },
    );

    return formattedBeverage;
  }

  async getTracedSVG({ badge, brand, color, shortId, type }) {
    const svgo = new SVGO({
      multipass: true,
      floatPrecision: 0,
      plugins: [
        {
          removeViewBox: false,
        },
        {
          removeDimensions: true,
        },
      ],
    });

    return new Promise((resolve, reject) => {
      const generalPath = `${process.env.IMAGES_SERVER}/${brand}/${badge}/${shortId}`;
      const imgPath =
        type === 'cover'
          ? `${generalPath}/cover/jpg/4x.jpg`
          : `${generalPath}/container/jpg/4x/01.jpg`;
      const imgColor = `#${color}`;

      fetch(imgPath)
        .then(response => response.arrayBuffer())
        .then(data => {
          const image = Buffer.from(data);

          sharp(image)
            .resize(220)
            .toBuffer()
            .then(preparedImage => {
              potrace.trace(
                preparedImage,
                {
                  color: imgColor,
                  threshold: 200,
                  optTolerance: 0.4,
                  turdSize: 100,
                  turnPolicy: potrace.Potrace.TURNPOLICY_MAJORITY,
                },
                (err: any, svg: string) => {
                  if (err) {
                    reject();
                  }

                  svgo.optimize(svg).then((result: any) => {
                    resolve(result.data);
                  });
                },
              );
            })
            .catch(err => {
              reject(err);
            });
        });
    });
  }

  async updateCoverOutline({ badge, brand, id, shortId }) {
    const outline = await this.getTracedSVG({
      badge,
      brand,
      color: 'ddd',
      shortId,
      type: 'cover',
    });
    const response: boolean = await this.beverageModel.updateCoverOutline({
      id,
      outline,
    });
    return response;
  }

  async updateContainerOutline({ badge, brand, id, shortId }) {
    const outline = await this.getTracedSVG({
      badge,
      brand,
      color: 'ddd',
      shortId,
      type: 'container',
    });
    const response: boolean = await this.beverageModel.updateContainerOutline({
      id,
      outline,
    });
    return response;
  }

  async getUpdatedBeverageImages({
    language,
    shortId,
    brand,
    badge,
  }: {
    language: SiteLanguage;
    shortId: string;
    brand: string;
    badge: string;
  }) {
    const rawBeverage: BeverageUpdatedImages = await this.beverageModel.getUpdatedBeverageImages(
      { shortId, brand, badge },
    );
    const formattedBeverage: TranslatedBeverageUpdatedImages = normalizeUpdatedBeverageImgages(
      { beverage: rawBeverage[0], language },
    );

    return formattedBeverage;
  }

  async beverageSearch({
    language,
    phrase,
  }: {
    language: SiteLanguage;
    phrase: string;
  }) {
    const rawResults: BeverageSearchRawResults[] = await this.beverageModel.beverageSearch(
      phrase,
    );

    if (!rawResults.length) {
      return [];
    }

    const formattedResults: BeverageSearchTranslatedResults[] = rawResults.map(
      beverage =>
        normalizeSearchResult({
          beverage,
          language,
        }),
    );

    return formattedResults;
  }

  async saveCover({
    badge,
    brand,
    id,
    image,
    shortId,
  }: {
    badge: string;
    brand: string;
    id: string;
    image: { buffer: Buffer };
    shortId: string;
  }) {
    const coverPath = `${brand}/${badge}/${shortId}/cover`;

    const result = Promise.all([
      saveCover({
        coverPath,
        format: ImageFormat.webp,
        image,
        size: ImageSize.large,
      }),
      saveCover({
        coverPath,
        format: ImageFormat.webp,
        image,
        size: ImageSize.big,
      }),
      saveCover({
        coverPath,
        format: ImageFormat.webp,
        image,
        size: ImageSize.small,
      }),
      saveCover({
        coverPath,
        format: ImageFormat.jpg,
        image,
        size: ImageSize.large,
      }),
      saveCover({
        coverPath,
        format: ImageFormat.jpg,
        image,
        size: ImageSize.big,
      }),
      saveCover({
        coverPath,
        format: ImageFormat.jpg,
        image,
        size: ImageSize.small,
      }),
    ])
      .then(async () => {
        const { height, width } = sizeOf(image.buffer);
        await this.beverageModel.saveCover({ height, id, width });
        return true;
      })
      .catch(() => false);

    return result;
  }

  async saveGallery({
    badge,
    brand,
    id,
    images,
    shortId,
  }: {
    badge: string;
    brand: string;
    id: string;
    images: { buffer: Buffer }[];
    shortId: string;
  }) {
    const containerPath = `${brand}/${badge}/${shortId}/container`;

    const result = Promise.all(
      images.reduce((acc, image, i) => {
        const properIndex = i + 1;
        const fileName =
          properIndex < 10 ? `0${properIndex}` : properIndex.toString();

        return [
          ...acc,
          saveGallery({
            containerPath,
            fileName,
            format: ImageFormat.webp,
            image,
            size: ImageSize.large,
          }),
          saveGallery({
            containerPath,
            fileName,
            format: ImageFormat.webp,
            image,
            size: ImageSize.big,
          }),
          saveGallery({
            containerPath,
            fileName,
            format: ImageFormat.webp,
            image,
            size: ImageSize.small,
          }),
          saveGallery({
            containerPath,
            fileName,
            format: ImageFormat.jpg,
            image,
            size: ImageSize.large,
          }),
          saveGallery({
            containerPath,
            fileName,
            format: ImageFormat.jpg,
            image,
            size: ImageSize.big,
          }),
          saveGallery({
            containerPath,
            fileName,
            format: ImageFormat.jpg,
            image,
            size: ImageSize.small,
          }),
        ];
      }, []),
    )
      .then(async data => {
        await this.beverageModel.saveGallery({ id, images: images.length });
        return true;
      })
      .catch(() => false);

    return result;
  }

  async saveCap({
    badge,
    brand,
    id,
    image,
    shortId,
  }: {
    badge: string;
    brand: string;
    id: string;
    image: { buffer: Buffer };
    shortId: string;
  }) {
    const capPath = `${brand}/${badge}/${shortId}/cap`;

    const result = Promise.all([
      saveCap({
        capPath,
        format: ImageFormat.webp,
        image,
        size: ImageSize.large,
      }),
      saveCap({
        capPath,
        format: ImageFormat.webp,
        image,
        size: ImageSize.big,
      }),
      saveCap({
        capPath,
        format: ImageFormat.webp,
        image,
        size: ImageSize.small,
      }),
      saveCap({
        capPath,
        format: ImageFormat.jpg,
        image,
        size: ImageSize.large,
      }),
      saveCap({
        capPath,
        format: ImageFormat.jpg,
        image,
        size: ImageSize.big,
      }),
      saveCap({
        capPath,
        format: ImageFormat.jpg,
        image,
        size: ImageSize.small,
      }),
    ])
      .then(async () => {
        await this.beverageModel.saveCap({ id });
        return true;
      })
      .catch(() => false);

    return result;
  }

  async removeGallery({
    badge,
    brand,
    files,
    id,
    shortId,
  }: {
    badge: string;
    brand: string;
    files: number;
    id: string;
    shortId: string;
  }) {
    const result = removeGallery({
      badge,
      brand,
      files,
      shortId,
    })
      .then(async () => {
        await this.beverageModel.removeGallery({ id });
        return true;
      })
      .catch(() => false);

    return result;
  }

  async removeCap({
    badge,
    brand,
    id,
    shortId,
  }: {
    badge: string;
    brand: string;
    id: string;
    shortId: string;
  }) {
    const result = removeCap({
      badge,
      brand,
      shortId,
    })
      .then(async () => {
        await this.beverageModel.removeCap({ id });
        return true;
      })
      .catch(() => false);

    return result;
  }
}
