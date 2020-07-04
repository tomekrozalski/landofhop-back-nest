/*
 * The script gets hash of language and transforms it to code,
 * for example "5ee260a7d38d9759575b2b61" to "pl"
 * It makes it only for beverage name and beverage brand name
 *
 * We use it in:
 * * getLastTiles.query
 */

const getNameAndBrandLanguage = [
  // ------------------------------------------------
  // Name
  {
    $set: {
      'label.general.name_info': {
        $map: {
          input: '$label.general.name',
          as: 'names',
          in: {
            language: {
              $arrayElemAt: [
                {
                  $filter: {
                    input: '$language',
                    as: 'values',
                    cond: { $eq: ['$$values.id', '$$names.language'] },
                  },
                },
                0,
              ],
            },
            value: '$$names.value',
          },
        },
      },
    },
  },
  {
    $set: {
      'label.general.name': {
        $map: {
          input: '$label.general.name_info',
          as: 'names',
          in: {
            language: '$$names.language.code',
            value: '$$names.value',
          },
        },
      },
    },
  },
  // ------------------------------------------------
  // Beverage Brand Name
  {
    $set: {
      'label.general.brand_language_info': {
        $map: {
          input: '$label.general.brand_info.name',
          as: 'names',
          in: {
            language: {
              $arrayElemAt: [
                {
                  $filter: {
                    input: '$language',
                    as: 'values',
                    cond: { $eq: ['$$values.id', '$$names.language'] },
                  },
                },
                0,
              ],
            },
            value: '$$names.value',
          },
        },
      },
    },
  },
  {
    $set: {
      'label.general.brand_info.name': {
        $map: {
          input: '$label.general.brand_language_info',
          as: 'names',
          in: {
            language: '$$names.language.code',
            value: '$$names.value',
          },
        },
      },
    },
  },
];

export default getNameAndBrandLanguage;
