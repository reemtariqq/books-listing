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
      // .map((res) => {
      //   actions.fetchSuccessBook(res.body)
      //   actions.fetchCategory(res.body.category).map((res) => {
      //     action.fetchSuccessCategory(res)
      //   })
      // })
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
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


