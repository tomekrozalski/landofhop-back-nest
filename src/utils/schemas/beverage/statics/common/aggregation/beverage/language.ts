const language = [
  // ------------------------------------------------
  // Label - name, series, brand, cooperation
  // {
  //   $set: {
  //     'label.general.name_info': {
  //       $map: {
  //         input: '$label.general.name',
  //         as: 'names',
  //         in: {
  //           language: {
  //             $arrayElemAt: [
  //               {
  //                 $filter: {
  //                   input: '$language',
  //                   as: 'values',
  //                   cond: { $eq: ['$$values.id', '$$names.language'] },
  //                 },
  //               },
  //               0,
  //             ],
  //           },
  //           value: '$$names.value',
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   $set: {
  //     'label.general.name': {
  //       $map: {
  //         input: '$label.general.name_info',
  //         as: 'names',
  //         in: {
  //           language: '$$names.language.code',
  //           value: '$$names.value',
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   $set: {
  //     'label.general.series_info': {
  //       $map: {
  //         input: '$label.general.series',
  //         as: 'names',
  //         in: {
  //           language: {
  //             $arrayElemAt: [
  //               {
  //                 $filter: {
  //                   input: '$language',
  //                   as: 'values',
  //                   cond: { $eq: ['$$values.id', '$$names.language'] },
  //                 },
  //               },
  //               0,
  //             ],
  //           },
  //           value: '$$names.value',
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   $set: {
  //     'label.general.series': {
  //       $map: {
  //         input: '$label.general.series_info',
  //         as: 'names',
  //         in: {
  //           language: '$$names.language.code',
  //           value: '$$names.value',
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   $set: {
  //     'label.general.brand_language_info': {
  //       $map: {
  //         input: '$label.general.brand_info.name',
  //         as: 'names',
  //         in: {
  //           language: {
  //             $arrayElemAt: [
  //               {
  //                 $filter: {
  //                   input: '$language',
  //                   as: 'values',
  //                   cond: { $eq: ['$$values.id', '$$names.language'] },
  //                 },
  //               },
  //               0,
  //             ],
  //           },
  //           value: '$$names.value',
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   $set: {
  //     'label.general.brand_info.name': {
  //       $map: {
  //         input: '$label.general.brand_language_info',
  //         as: 'names',
  //         in: {
  //           language: '$$names.language.code',
  //           value: '$$names.value',
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   $set: {
  //     'label.general.cooperation_language_info': {
  //       $map: {
  //         input: '$label.general.cooperation_info',
  //         as: 'coop',
  //         in: {
  //           badge: '$$coop.badge',
  //           id: '$$coop._id',
  //           name: {
  //             $map: {
  //               input: '$$coop.name',
  //               as: 'names',
  //               in: {
  //                 language: {
  //                   $arrayElemAt: [
  //                     {
  //                       $filter: {
  //                         input: '$language',
  //                         as: 'values',
  //                         cond: { $eq: ['$$values.id', '$$names.language'] },
  //                       },
  //                     },
  //                     0,
  //                   ],
  //                 },
  //                 value: '$$names.value',
  //               },
  //             },
  //           },
  //           shortId: '$$coop.shortId',
  //           website: '$$coop.website',
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   $set: {
  //     'label.general.cooperation_info': {
  //       $map: {
  //         input: '$label.general.cooperation_language_info',
  //         as: 'coop',
  //         in: {
  //           badge: '$$coop.badge',
  //           id: '$$coop.id',
  //           name: {
  //             $map: {
  //               input: '$$coop.name',
  //               as: 'names',
  //               in: {
  //                 language: '$$names.language.code',
  //                 value: '$$names.value',
  //               },
  //             },
  //           },
  //           shortId: '$$coop.shortId',
  //           website: '$$coop.website',
  //         },
  //       },
  //     },
  //   },
  // },
  // // ------------------------------------------------
  // // Producer - series, cooperation
  // {
  //   $set: {
  //     'producer.general.series_info': {
  //       $map: {
  //         input: '$producer.general.series',
  //         as: 'names',
  //         in: {
  //           language: {
  //             $arrayElemAt: [
  //               {
  //                 $filter: {
  //                   input: '$language',
  //                   as: 'values',
  //                   cond: { $eq: ['$$values.id', '$$names.language'] },
  //                 },
  //               },
  //               0,
  //             ],
  //           },
  //           value: '$$names.value',
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   $set: {
  //     'producer.general.series': {
  //       $map: {
  //         input: '$producer.general.series_info',
  //         as: 'names',
  //         in: {
  //           language: '$$names.language.code',
  //           value: '$$names.value',
  //         },
  //       },
  //     },
  //   },
  // },
];

export default language;
