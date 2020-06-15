const language = [
  {
    $lookup: {
      from: 'languages',
      pipeline: [
        {
          $project: {
            _id: 0,
            code: 1,
            id: '$_id',
            name: 1,
          },
        },
      ],
      as: 'language',
    },
  },
];

export default language;
