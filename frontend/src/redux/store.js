import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './userSlice'
import  conversationSlice  from './conversationSlice.js'
import  messageSlice  from './messageSlice'


export const store = configureStore({
  reducer: {
    user:userSlice,
    conversation:conversationSlice,
    message:messageSlice
  },
})