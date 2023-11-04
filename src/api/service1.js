import {deleteJson, getJson, postJson} from "../utils/helpers/network-helpers";
import {globalUrl, personsUrl} from "../utils/constants/common";

export const getPersons = async () => {
  try {
    return await getJson(`${globalUrl}/${personsUrl}`)
  } catch (e) {
    console.error('Error was caught during fetching Persons')
  }
}

export const getPersonById = async (id) => {
  try {
    return await getJson(`${globalUrl}/${personsUrl}/${id}`)
  } catch (e) {
    console.error(`Error was caught during fetching person with id: ${id}`)
  }
}

export const deletePerson = async (id) => {
  try {
    return await deleteJson(`${globalUrl}/${personsUrl}/${id}`)
  } catch (e) {
    console.error(`Error was caught during deleting person with id: ${id}`)
  }
}

export const createNewPerson = async (newPerson) => {
  try {
    return await postJson(`${globalUrl}/${personsUrl}`, newPerson)
  } catch (e) {
    console.error('Error was caught during creating new person')
  }
}

export const getPersonsWeightLess = async (weight) => {
  try {
    return await getJson(`${globalUrl}/${personsUrl}/weight-less/${weight}`)
  } catch (e) {
    console.error(`Error was caught during fetching persons with weight less than ${weight}`)
  }
}

export const deletePersonsWeightLess = async (location) => {
  try {
    return await deleteJson(`${globalUrl}/${personsUrl}/location`, location)
  } catch (e) {
    console.error(`Error was caught during deleting persons 
    with location x: ${location.x}, y: ${location.y}, name: ${location.name}`)
  }
}