const getLanguages = [
  {
    $lookup: {
      from: 'languages',
      pipeline: [
        {
          $project: {
            _id: 0,
            code: 1,
            id: '$_id',
          },
        },
      ],
      as: 'language',
    },
  },
];

export default getLanguages;
