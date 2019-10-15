import { combineReducers } from 'redux'
import actionTypes from '../actions/actionsTypes'

import ConfigReducer from './ConfigReducer'


function genericReducer(state = {}, action) {

  switch (action.type) {
    case actionTypes.FETCH_LIST_BOOK:
    case actionTypes.FETCH_LIST_AUTHOR:
    case actionTypes.FETCH_LIST_CATEGORY:
      return state

    case actionTypes.FETCH_LIST_SUCCESS_BOOK:
    case actionTypes.FETCH_LIST_SUCCESS_CATEGORY:
    case actionTypes.FETCH_LIST_SUCCESS_AUTHOR:

      return fetchListSuccess(state, action)

    case actionTypes.FETCH_SUCCESS_BOOK:
    case actionTypes.FETCH_SUCCESS_CATEGORY:
    case actionTypes.FETCH_SUCCESS_AUTHOR:
      return setItemDetails(state, action)

    case actionTypes.ADD_BOOK:
      // case actionTypes.
      return addEditBook(state, action)

    case actionTypes.ADD_SUCCESS_BOOK:
    case actionTypes.ADD_SUCCESS_AUTHOR:
    case actionTypes.ADD_SUCCESS_CATEGORY:

    case actionTypes.EDIT_SUCCESS_BOOK:
    case actionTypes.EDIT_SUCCESS_AUTHOR:
    case actionTypes.EDIT_SUCCESS_CATEGORY:
      return addEditItemSuccess(state, action)

    default:
      return state
  }
}

function fetchListSuccess(state, action) {

  return {
    ...state,
    list: action.list
  }
}

function setItemDetails(state, action) {
  return {
    ...state,
    details: action.details
  }
}


function addEditBook(state, action) {

  return {
    ...state,
    newBook: action.newBook
  }
}

function addEditItemSuccess(state, action) {
  const updateList = state.list.filter(function (obj) {
    return obj.id !== action.item.id;
  });
  return {
    ...state,
    list: [
      action.item,
      ...updateList,
    ]
  }
}

function createFilteredReducer(reducerFunction, reducerPredicate) {
  return (state, action) => {
    const isInitializationCall = state === undefined
    const shouldRunWrappedReducer = reducerPredicate(action) || isInitializationCall
    return shouldRunWrappedReducer ? reducerFunction(state, action) : state
  }
}



const rootReducer = combineReducers({
  // check for suffixed strings
  Book: createFilteredReducer(genericReducer, action => action.type.endsWith('_BOOK')),
  // check for extra data in the action
  Author: createFilteredReducer(genericReducer, action => action.type.endsWith('_AUTHOR')),
  // respond to all 'INCREMENT' actions, but never 'DECREMENT'
  Category: createFilteredReducer(genericReducer, action => action.type.endsWith('_CATEGORY')),
  Config: ConfigReducer
})


export default rootReducer