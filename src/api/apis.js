import * as Rx from 'rxjs'
import { from } from 'rxjs'
import request from 'superagent'


export default {
  fetchList,
  fetchItem,
  editItem,
}



function fetchList(listName) {

  return from(
    request
      .get(`http://localhost:4000/${listName}`)
      .set("Accept", "application/json")
  )
}


function fetchItem(itemName, id) {
  return from(
    request
      .get(`${process.env.REACT_APP__API_HOST}/${itemName}/${id}`)
  )
}

function editItem() {
  return from(
    request
      .get(`${process.env.REACT_APP__API_HOST}/account`)
  )
}


