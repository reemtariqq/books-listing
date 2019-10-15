import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'

import 'rxjs/add/observable/of';
import * as Rx from 'rxjs'

import apis from '../apis' // eslint-disable-line
import actionTypes from '../../actions/actionsTypes'
import * as actions from '../../actions/actions'

export default [
  fetchListBooks,
  fetchBook,
  addBook,
  editBook,
]


export function fetchListBooks(action$) {

  return action$
    .ofType(actionTypes.FETCH_LIST_BOOK)
    .switchMap((action) => {
      return apis.fetchList('books', action.query)

        .map((res) => actions.fetchListSuccessBook(res))
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}


export function fetchBook(action$) {

  return action$
    .ofType(actionTypes.FETCH_BOOK)
    .switchMap((action) => {
      return apis.fetchList('books', action.query).mergeMap((res) =>
        Rx.Observable.of(
          actions.fetchSuccessBook(res.body),
          actions.fetchCategory({ id: res.body.category })
        ))
    })
}


export function addBook(action$) {

  return action$
    .ofType(actionTypes.ADD_BOOK)
    .switchMap((action) => {
      return apis.addItem('books', action.newBook)

        .map((res) =>
          actions.AddSuccessBook(res.body)
        )
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}



export function editBook(action$) {

  return action$
    .ofType(actionTypes.EDIT_BOOK)
    .switchMap((action) => {
      debugger
      return apis.editItem('books', action.item)

        .map((res) =>
          actions.EditSuccessBook(res.body)
        )
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}
