import {statuses} from "../../../utils/constants/common";

export const initialPageParams = {
  totalPages: 0,
  totalElements: 0,
  pageNumber: 0,
  pageSize: 5,
  last: true,
}

export const initialFilterField = {
  searchStr: '',
  chosenValue: '',
  operation: 'eq',
  checked: false
}

export const initialSortField = {
  order: 'asc',
  checked: false
}

export const initialSortFields = {
  id: initialSortField,
  name: initialSortField,
  'coordinates.x': initialSortField,
  'coordinates.y': initialSortField,
  creationDate: initialSortField,
  birthday: initialSortField,
  height: initialSortField,
  weight: initialSortField,
  nationality: initialSortField,
  'location.x': initialSortField,
  'location.y': initialSortField,
  'location.name': initialSortField,
  hairColor: initialSortField,
}

export const initialFilter = {
  id: initialFilterField,
  name: initialFilterField,
  'coordinates.x': initialFilterField,
  'coordinates.y': initialFilterField,
  creationDate: initialFilterField,
  birthday: initialFilterField,
  height: initialFilterField,
  weight: initialFilterField,
  nationality: initialFilterField,
  'location.x': initialFilterField,
  'location.y': initialFilterField,
  'location.name': initialFilterField,
  hairColor: initialFilterField,
}

export const personsInitialState = {
  entities: [],
  sortFields: initialSortFields,
  filters: initialFilter,
  pageParams: initialPageParams,
  status: statuses.IDLE
}

export const changeSortField = (field) => {
  const newField = {
    ...field,
  }
  if (newField.checked) {
    if (newField.order === 'asc') {
      newField.order = 'desc'
    } else {
      newField.order = 'asc'
      newField.checked = false;
    }
  } else {
    newField.checked = true;
  }
  return newField;
}

export const filterOperationTypes = [
  {
    id: 'eq',
    label: '='
  },
  {
    id: 'ne',
    label: '!='
  },
  {
    id: 'gt',
    label: '>'
  },
  {
    id: 'lt',
    label: '<'
  },
  {
    id: 'lte',
    label: '<='
  },
  {
    id: 'gte',
    label: '>='
  },
]