import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  apiDefault,
  createFiltersQueryStr,
  createPageableQuery, createSortQueryStr, deleteJson,
  getJson, getPageParamsFromRes, postJson, putJson, withTimeout
} from "../../../utils/helpers/network-helpers";
import {
  DEFAULT_LOADING_TIMEOUT,
  globalUrl,
  personsUrl
} from "../../../utils/constants/common";
import {setPageParams} from "./Persons.slice";
import {rows} from "../../../mocks/personsMock";

export const getPersons = createAsyncThunk(
  'persons/getPersons',
  async (_, {
    dispatch,
    getState
  }) => {
    const pageParams = getState().persons.pageParams;
    const filters = getState().persons.filters;
    const sortFields = getState().persons.sortFields;

    const pageReqStr = createPageableQuery(pageParams, false);
    const filtersReqStr = createFiltersQueryStr(filters, true);
    const sortReqStr = createSortQueryStr(sortFields, true);

    try {
      const res = await withTimeout(() => apiDefault({
        apiCall: getJson,
        url: `${globalUrl}/${personsUrl}?${pageReqStr}${filtersReqStr}${sortReqStr}`,
        dispatch
      }), DEFAULT_LOADING_TIMEOUT)

      const newPageParams = getPageParamsFromRes(res);

      dispatch(setPageParams(newPageParams));

      return res;
    } catch (e) {
      console.error('Error was caught during fetching Persons')
      return Promise.reject();
    }
  }
)

export const getPersonById = createAsyncThunk(
  'persons/getPersonById',
  async (id, {
    dispatch,
  }) => {
    try {
      const res = await apiDefault({
        apiCall: getJson,
        url: `${globalUrl}/${personsUrl}/${id}`,
        dispatch
      })

      //todo
      return res;
      return rows[0];
    } catch (e) {
      console.error('Error was caught during fetching Persons')
      return Promise.reject();
    }
  }
)

export const savePerson = createAsyncThunk(
  'persons/savePerson',
  async (id, {
    dispatch,
    getState
  }) => {
    const updatedPerson = getState().persons.personOnEdit;
    console.log(updatedPerson)
    try {
      await apiDefault({
        apiCall: putJson,
        url: `${globalUrl}/${personsUrl}/${id}`,
        data: updatedPerson,
        dispatch
      })
      dispatch(getPersons());
    } catch (e) {
      console.error('Error was caught during fetching Persons')
      return Promise.reject();
    }
  }
)

export const deletePerson = createAsyncThunk(
  'persons/deletePerson',
  async (id, {
    dispatch,
  }) => {
    try {
      await apiDefault({
        apiCall: deleteJson,
        url: `${globalUrl}/${personsUrl}/${id}`,
        dispatch
      })
      dispatch(getPersons());
    } catch (e) {
      console.error('Error was caught during fetching Persons')
      return Promise.reject();
    }
  }
)

export const createPerson = createAsyncThunk(
  'persons/savePerson',
  async (_, {
    dispatch,
    getState
  }) => {
    const newPerson = getState().persons.personOnEdit;
    try {
      await apiDefault({
        apiCall: postJson,
        url: `${globalUrl}/${personsUrl}`,
        data: newPerson,
        dispatch
      })
      dispatch(getPersons());
    } catch (e) {
      console.error('Error was caught during fetching Persons')
      return Promise.reject();
    }
  }
)
