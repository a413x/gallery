export const getData = (url, successCallback, errorCallback) => {
  fetch(url)
    .then(resp => resp.json())
    .then(data => successCallback(data))
    .catch(err => errorCallback(err))
}
