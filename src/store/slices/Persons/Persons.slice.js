import {createSlice} from '@reduxjs/toolkit'
import {changeSortField, personsInitialState} from "./Persons.helpers";
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
  checkSortField
} = PersonsSlice.actions

export default PersonsSlice.reducer