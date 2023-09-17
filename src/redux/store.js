import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice'
export const store = configureStore({
  reducer: {
    AuthSlice
  },
})

export const token = {
  role: 'company'
}