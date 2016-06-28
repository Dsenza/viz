export default data = {
  users: [
    {
      id: 1,
      name: 'Stu',
      organizations: [
        {
          id: 1,
          start: '2016-01-01',
          end: '2016-02-05',
          position: 1
        }
      ],
    }, {
      id: 2
      name: 'Sally',
      organizations: [
        {
          id: 1,
          start: '2016-01-05',
          end: '2016-02-01',
          position: 2
        }
      ]
    }
  ],
  organizations: [
    {
      id: 1,
      name: 'Robinhood',
      users: [1, 2],
      roles: {
        0: 'manager'
        1: 'superviser',
        2: 'case worker'
      }
    }
  ]