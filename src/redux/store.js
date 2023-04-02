import { combineReducers, configureStore } from '@reduxjs/toolkit'

import sortReducer from './sortSlice'
import filterReducer from './filterSlice'

const reducer = combineReducers({
  sortReducer,
  filterReducer,
})

export default configureStore({
  reducer,
})
