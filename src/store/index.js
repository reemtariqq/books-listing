// import { initializeOptions } from 'react-jplayer'

import configureStore from './configureStore'

const store = configureStore()


export const dispatch = store.dispatch

export default store
