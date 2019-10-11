import { combineReducers } from 'redux'
import actionTypes from '../actions/actionsTypes'


function genericReducer(state = {}, action) {

  switch (action.type) {
    case actionTypes.FETCH_LIST_BOOK:
    case actionTypes.FETCH_LIST_AUTHORS:
    case actionTypes.FETCH_LIST_CATEGORY:

      return state
    case actionTypes.FETCH_LIST_SUCCESS_BOOK:
    case actionTypes.FETCH_LIST_SUCCESS_CATEGORY:
    case actionTypes.FETCH_LIST_SUCCESS_AUTHOR:
      debugger
      return fetchListSuccess(state, action)
    default:
      return state
  }
}

function fetchListSuccess(state, action) {
  debugger
  return {
    ...state,
    list: action.list
  }
}

function createFilteredReducer(reducerFunction, reducerPredicate) {
  return (state, action) => {
    const isInitializationCall = state === undefined;
    const shouldRunWrappedReducer = reducerPredicate(action) || isInitializationCall;
    return shouldRunWrappedReducer ? reducerFunction(state, action) : state;
  }
}

const rootReducer = combineReducers({
  // check for suffixed strings
  Book: createFilteredReducer(genericReducer, action => action.type.endsWith('_BOOK')),
  // check for extra data in the action
  Author: createFilteredReducer(genericReducer, action => action.type.endsWith('_AUTHOR')),
  // respond to all 'INCREMENT' actions, but never 'DECREMENT'
  Category: createFilteredReducer(genericReducer, action => action.type.endsWith('_CATEGORY'))
})


export default rootReducer