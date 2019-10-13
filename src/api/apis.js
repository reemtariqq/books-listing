import { from } from 'rxjs'
import request from 'superagent'


export default {
  fetchList,
  fetchItem,
  addEditItem,
}



function fetchList(listName, query) {

  const fetchQuery = query ? {
    '_page': query.page,
    '_limit': query.limit,

  } : {}

  if (query && query.from) {
    query[query.from] = query.id
    delete query.id
  }

  return from(
    request
      .get(`http://localhost:4000/${listName}/${query && query.id ? query.id : ''
        }`)
      .set("Accept", "application/json")
      .query(fetchQuery)
  )
}



function fetchItem(itemName, id) {
  return from(
    request
      .get(`${process.env.REACT_APP__API_HOST}/${itemName}/${id}`)
  )
}

function addEditItem(item) {
  return from(
    request
      .post(`http://localhost:4000/books`)
      .send(item)
  )
}


