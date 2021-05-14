export const getData = (url, successCallback, errorCallback) => {
  fetch(url)
    .then(resp => resp.json())
    .then(data => successCallback(data))
    .catch(err => errorCallback(err))
}

export const cutTitle = (title, pos) => {
  if(title.length < pos) return title
  else return title.slice(0, pos) + '...'
}
