import {createSlice} from '@reduxjs/toolkit'
import {
  changeSortField, initialFilter,
  initialFilterField,
  personsInitialState
} from "./Persons.helpers";
import {getPersons} from "./Persons.thunks";
import {statuses} from "../../../utils/constants/common";

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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPersons.pending, (state) => {
        state.status = statuses.PENDING;
      })
      .addCase(getPersons.fulfilled, (state, action) => {
        state.status = statuses.FULFILLED;
        state.entities = action.payload
      })
      .addCase(getPersons.rejected, (state) => {
        state.status = statuses.REJECTED;
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
  clearAllFilters
} = PersonsSlice.actions

export default PersonsSlice.reducer