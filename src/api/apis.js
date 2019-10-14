import { from } from 'rxjs'
import request from 'superagent'


export default {
  fetchList,
  fetchItem,
  addEditItem,
  editItem
}



function fetchList(listName, query) {
  let url = `http://localhost:4000/${listName}/${query && query.id ? query.id : ''
    }`
  const fetchQuery = query ? {
    '_page': query.page,
    '_limit': query.limit,

  } : {}

  if (query && query.from) {
    url = `http://localhost:4000/${listName}?${query.from}=${query.id}`

  }
  return from(
    request
      .get(url)
      .set("Accept", "application/json")
      .query(fetchQuery)
  )
}



function fetchItem(itemName, id) {
  return from(
    request
      .get(`${process.env.REACT_APP__API_HOST} /${itemName}/${id} `)
  )
}

function addEditItem(itemName, item) {
  return from(
    request
      .post(`http://localhost:4000/${itemName}`)
      .send(item)
  )
}

function editItem(itemName, item) {
  return from(
    request
      .patch(`http://localhost:4000/${itemName}/${item.id}`)
      .send(item)
  )
}