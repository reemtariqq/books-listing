import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/take'
import apis from '../apis' // eslint-disable-line
import actionTypes from '../../actions/actionsTypes'
import * as actions from '../../actions/actions'

export default [
  fetchListBooks,
  fetchListAuthors,
  fetchListCategories
]


export function fetchListBooks(action$) {

  return action$
    .ofType(actionTypes.FETCH_LIST_BOOK)
    .switchMap((action) => {
      return apis.fetchList('books', action.query)
        // handle successes
        .map((res) => actions.fetchListSuccessBook(res))
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}

export function fetchListAuthors(action$) {

  return action$
    .ofType(actionTypes.FETCH_LIST_AUTHORS)
    .switchMap((action) => {
      return apis.fetchList('authors')
        // handle successes
        .map((res) => actions.fetchListSuccessAuthors(res))
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}

export function fetchListCategories(action$) {

  return action$
    .ofType(actionTypes.FETCH_LIST_CATEGORY)
    .switchMap((action) => {
      return apis.fetchList('categories')
        // handle successes
        .map((res) => actions.fetchListSuccessCategories(res))
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}
