import {getGlobalUrl} from "../helpers/network-helpers";

export const PRIMARY_TIMEOUT = 150000;

export const globalUrl = getGlobalUrl();
export const personsUrl = 'persons';
export const statuses = {
  IDLE: 'idle',
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

export const filterTypes = {
  TEXT: 'text',
  SELECT: 'select',
  NUMBER: 'number',
  DATE: 'date'
}

export const messageErrorMoreThen500 = 'Server Error:  Сервер недоступен';
export const messageErrorLessThen500 = 'Client Error:  Неудачный запрос на сервер';