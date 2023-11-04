import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  apiDefault,
  createFiltersQueryStr,
  createPageableQuery, createSortQueryStr,
  getJson, getPageParamsFromRes
} from "../../../utils/helpers/network-helpers";
import {globalUrl, personsUrl} from "../../../utils/constants/common";
import {setPageParams} from "./Persons.slice";

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
      const res = await apiDefault({
        apiCall: getJson,
        url: `${globalUrl}/${personsUrl}?${pageReqStr}${filtersReqStr}${sortReqStr}`,
        dispatch
    })

      const newPageParams = getPageParamsFromRes(res);

      dispatch(setPageParams(newPageParams));

      return res;
    } catch (e) {
      console.error('Error was caught during fetching Persons')
      return Promise.reject();
    }
  }
)