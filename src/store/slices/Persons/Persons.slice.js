import {createSlice} from '@reduxjs/toolkit'
import {
  changeSortField, emptyPerson, initialFilter,
  initialFilterField,
  personsInitialState
} from "./Persons.helpers";
import {getPersonById, getPersons} from "./Persons.thunks";
import {
  statuses
} from "../../../utils/constants/common";

export const PersonsSlice = createSlice({
  name: 'persons',
  initialState: personsInitialState,
  reducers: {
    setPageParams: (state, action) => {
      state.pageParams = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageParams.pageSize = action.payload;
    },
    setFilterSearchStr: (state, action) => {
      state.filters[action.payload.field] = {
        ...state.filters[action.payload.field],
        searchStr: action.payload.value
      }
    },
    setFilterOperation: (state, action) => {
      state.filters[action.payload.field] = {
        ...state.filters[action.payload.field],
        operation: action.payload.value
      }
    },
    applyFilters: (state) => {
      for (const filterName in state.filters) {
        const filter = state.filters[filterName];
        if (filter.searchStr && !filter.chosenValue) {
          filter.chosenValue = filter.searchStr
        }
      }
    },
    clearFilterField: (state, action) => {
      state.filters[action.payload] = initialFilterField
    },
    clearAllFilters: (state) => {
      state.filters = initialFilter
    },
    setPage: (state, action) => {
      state.pageParams.pageNumber = action.payload
    },
    checkSortField: (state, action) => {
      state.sortFields = {
        ...state.sortFields,
        [action.payload]: changeSortField(state.sortFields[action.payload])
      }
    },
    changePersonOnEdit: (state, action) => {
      const value = action.payload.field === 'creationDate' || action.payload.field === 'birthday' ?
                    new Date(action.payload.value).toJSON() : action.payload.value;

        state.personOnEdit[action.payload.field] = action.payload.nestedField ? {
          ...state.personOnEdit[action.payload.field],
          [action.payload.nestedField]: value
        } : value

    },
    clearPersonOnEdit: (state) => {
      state.personOnEdit = emptyPerson
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPersons.pending, (state) => {
        state.status = statuses.PENDING;
      })
      .addCase(getPersons.fulfilled, async (state, action) => {
        state.status = statuses.FULFILLED
        state.entities = action.payload
      })
      .addCase(getPersons.rejected, (state) => {
        state.status = statuses.REJECTED;
      })

      .addCase(getPersonById.pending, (state) => {
        state.singlePersonStatus = statuses.PENDING;
      })
      .addCase(getPersonById.fulfilled, (state, action) => {
        state.singlePersonStatus = statuses.FULFILLED
        state.personOnEdit = action.payload
      })
      .addCase(getPersonById.rejected, (state) => {
        state.singlePersonStatus = statuses.REJECTED
      })
  }
})

export const {
  setPageParams,
  setPageSize,
  setPage,
  checkSortField,
  setFilterSearchStr,
  setFilterOperation,
  applyFilters,
  clearFilterField,
  clearAllFilters,
  changePersonOnEdit,
  clearPersonOnEdit
} = PersonsSlice.actions

export default PersonsSlice.reducer