const createRequest = (method) => {
  return (url, data) => {
    return fetch(url, {
      method,
      body: data && JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export const getJson = createRequest('GET');
export const postJson = createRequest('POST');
export const deleteJson = createRequest('DELETE');
export const patchJson = createRequest('PATCH');

export const getGlobalUrl = () => {
  return process.env.REACT_APP_SERVER_URL || '';
}