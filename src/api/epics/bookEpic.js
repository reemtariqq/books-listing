import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import apis from '../apis' // eslint-disable-line
import actionTypes from '../../actions/actionsTypes'
import * as actions from '../../actions/actions'

export default [
  fetchListBooks,
  fetchListAuthors,
  fetchListCategories,

  fetchBook,
  fetchCategory,
  fetchAuthor,

  addBook,
  editCategory,
  editAuthor

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

export function fetchListAuthors(action$) {

  return action$
    .ofType(actionTypes.FETCH_LIST_AUTHOR)
    .switchMap((action) => {
      return apis.fetchList('authors')

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

        .map((res) => actions.fetchListSuccessCategories(res))
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
      return apis.fetchList('books', action.query)

        .map((res) => actions.fetchListSuccessBook(res.body))
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}

export function fetchCategory(action$) {

  return action$
    .ofType(actionTypes.FETCH_CATEGORY)
    .switchMap((action) => {
      return apis.fetchList('categories', action.query)

        .map((res) => actions.fetchSuccessCategory(res.body))

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



export function addBook(action$) {

  return action$
    .ofType(actionTypes.ADDEDIT_BOOK)
    .switchMap((action) => {
      return apis.addItem('books', action.newBook)

        .map((res) =>
          actions.AddEditSuccessBook(res.body)
        )
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}

export function addCategory(action$) {

  return action$
    .ofType(actionTypes.ADD_CATEGORY)
    .switchMap((action) => {
      return apis.addItem('category', action.item)

        .map((res) =>
          actions.AddEditSuccessCategory(res.body)
        )
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}

export function editCategory(action$) {

  return action$
    .ofType(actionTypes.ADDEDIT_CATEGORY)
    .switchMap((action) => {
      return apis.editItem('categories', action.item)

        .map((res) =>
          actions.AddEditSuccessCategory(res.body)
        )
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}

export function editAuthor(action$) {

  return action$
    .ofType(actionTypes.ADDEDIT_AUTHOR)
    .switchMap((action) => {
      return apis.editItem('authors', action.item)

        .map((res) =>
          actions.AddEditSuccessAuthor(res.body)
        )
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}