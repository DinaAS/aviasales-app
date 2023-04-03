import { combineReducers, configureStore } from '@reduxjs/toolkit'

import sortReducer from './sortSlice'
import filterReducer from './filterSlice'
import ticketReducer from './ticketSlice'

const reducer = combineReducers({
  sortReducer,
  filterReducer,
  ticketReducer,
})

export default configureStore({
  reducer,
})
