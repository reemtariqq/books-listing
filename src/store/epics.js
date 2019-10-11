import { combineEpics } from 'redux-observable'
import bookEpic from '../api/epics/bookEpic'

export default combineEpics(...[
  ...bookEpic,
])
