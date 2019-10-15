import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import apis from '../apis' // eslint-disable-line
import actionTypes from '../../actions/actionsTypes'
import * as actions from '../../actions/actions'

export default [
  fetchListAuthors,
  fetchAuthor,
  addAuthor,
  editAuthor,
]




export function fetchListAuthors(action$) {

  return action$
    .ofType(actionTypes.FETCH_LIST_AUTHOR)
    .switchMap(() => {
      return apis.fetchList('authors')

        .map((res) => actions.fetchListSuccessAuthors(res))
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}

export function fetchAuthor(action$) {

  return action$
    .ofType(actionTypes.FETCH_AUTHOR)
    .switchMap((action) => {
      return apis.fetchList('authors', action.query)

        .map((res) => actions.fetchSuccessAuthor(res.body))
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}


export function editAuthor(action$) {

  return action$
    .ofType(actionTypes.EDIT_AUTHOR)
    .switchMap((action) => {
      return apis.editItem('authors', action.item)

        .map((res) =>
          actions.EditSuccessAuthor(res.body)
        )
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}


export function addAuthor(action$) {

  return action$
    .ofType(actionTypes.ADD_AUTHOR)
    .switchMap((action) => {
      return apis.addItem('authors', action.newAuthor)

        .map((res) =>
          actions.AddSuccessAuthor(res.body)
        )
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}

