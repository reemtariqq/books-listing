import { combineEpics } from 'redux-observable'
import bookEpic from './bookEpic'
import categoryEpic from './categoryEpic'
import authorEpic from './authorEpic'



export default combineEpics(...[
    ...bookEpic,
    ...categoryEpic,
    ...authorEpic
])
