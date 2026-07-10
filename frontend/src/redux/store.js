import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './userSlice'
import  conversationSlice  from './conversationSlice.js'
// import  messageSlice  from './message.slice'


export const store = configureStore({
  reducer: {
    user:userSlice,
    conversation:conversationSlice,
    // message:messageSlice
  },
})