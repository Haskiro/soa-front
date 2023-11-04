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
        id: "coordinates.x",
        label: "x"
      },
      {
        id: "coordinates.y",
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
        id: "location.x",
        label: "x"
      },
      {
        id: "location.y",
        label: "y"
      },
      {
        id: "location.name",
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

export const getFilterDeps = (filters) => {
  return Object.values(filters).map(filter => filter.chosenValue);
}