/* eslint-disable no-underscore-dangle, import/no-extraneous-dependencies */
import { createStore, compose, applyMiddleware } from 'redux'

import { createEpicMiddleware } from 'redux-observable'
// import thunk from 'redux-thunk'

import rootReducer from './reducers'
import rootEpic from './epics'

const epicMiddleware = createEpicMiddleware() 


function configureStoreProd(initialState) {
  const middlewares = [
    epicMiddleware,
  ]

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
  )
  )
}

function configureStoreDev(initialState) {
  const middlewares = [

    epicMiddleware,
  ]

  // add support for Redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
  )
  )
  epicMiddleware.run(rootEpic)

  return store
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
