const language = [
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
];

export default language;
