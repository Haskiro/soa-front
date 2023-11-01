import {deleteJson, getJson} from "../utils/helpers/network-helpers";
import {globalUrl} from "../utils/constants/common";

export const getPersons = async () => {
  try {
    return await getJson(`${globalUrl}/${persons}`)
  } catch (e) {
    console.error('Error was caught during fetching persons')
  }
}

export const getPersonById = async (id) => {
  try {
    return await getJson(`${globalUrl}/${persons}/${id}`)
  } catch (e) {
    console.error(`Error was caught during fetching person with id: ${id}`)
  }
}

export const deletePerson = async (id) => {
  try {
    return await deleteJson(`${globalUrl}/${persons}/${id}`)
  } catch (e) {
    console.error(`Error was caught during deleting person with id: ${id}`)
  }
}

export const createNewPerson = async (newPerson) => {
  try {
    return await postJson(`${globalUrl}/${persons}`, newPerson)
  } catch (e) {
    console.error('Error was caught during creating new person')
  }
}

export const getPersonsWeightLess = async (weight) => {
  try {
    return await getJson(`${globalUrl}/${persons}/weight-less/${weight}`)
  } catch (e) {
    console.error(`Error was caught during fetching persons with weight less than ${weight}`)
  }
}

export const deletePersonsWeightLess = async (location) => {
  try {
    return await deleteJson(`${globalUrl}/${persons}/location`, location)
  } catch (e) {
    console.error(`Error was caught during deleting persons 
    with location x: ${location.x}, y: ${location.y}, name: ${location.name}`)
  }
}