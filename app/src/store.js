import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Redux/counterslice'

export default configureStore({
  reducer: {
    counter:counterReducer
  }
})