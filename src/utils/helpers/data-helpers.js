export const headCells = [
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'coordinates',
    label: 'Coordinates',
    nestedCells: [
      {
        id: "x",
        label: "x"
      },
      {
        id: "y",
        label: "y"
      },
    ]
  },
  {
    id: 'creationDate',
    label: 'Creation Date',
  },
  {
    id: 'height',
    label: 'Height',
  },
  {
    id: 'birthday',
    label: 'Birthday',
  },
  {
    id: 'weight',
    label: 'Weight',
  },
  {
    id: 'nationality',
    label: 'Nationality',
  },
  {
    id: 'location',
    label: 'Location',
    nestedCells: [
      {
        id: "x",
        label: "x"
      },
      {
        id: "y",
        label: "y"
      },
      {
        id: "name",
        label: "Name"
      },
    ]
  },
  {
    id: 'hairColor',
    label: 'Hair color',
  },
];

export const createData = (
  id,
  name,
  coordinates,
  creationDate,
  height,
  birthday,
  weight,
  nationality,
  location,
  hairColor
) => {
  return {
    id,
    name,
    coordinates,
    creationDate,
    height,
    birthday,
    weight,
    nationality,
    location,
    hairColor
  };
}

export const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export const getComparator = (order, orderBy) => {
  return order === 'desc' ? (a, b) => descendingComparator(
    a,
    b,
    orderBy
  ) : (a, b) => -descendingComparator(
    a,
    b,
    orderBy
  );
}