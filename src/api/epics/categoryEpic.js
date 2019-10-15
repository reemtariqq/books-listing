import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import apis from '../apis' // eslint-disable-line
import actionTypes from '../../actions/actionsTypes'
import * as actions from '../../actions/actions'

export default [
  fetchListCategories,
  fetchCategory,
  addCategory,
  editCategory,

]


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



export function addCategory(action$) {

  return action$
    .ofType(actionTypes.ADD_CATEGORY)
    .switchMap((action) => {
      return apis.addItem('categories', action.item)

        .map((res) =>
          actions.AddSuccessCategory(res.body)
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
    .ofType(actionTypes.EDIT_CATEGORY)
    .switchMap((action) => {
      return apis.editItem('categories', action.item)

        .map((res) =>
          actions.EditSuccessCategory(res.body)
        )
      // .catch((err) => Rx
      //   .Observable
      //   .of(appActions.throwError(err)
      //   )
      // )
    })
}



