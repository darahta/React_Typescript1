import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";

export const store= configureStore({
  reducer:{
    auth: authSlice
  }  
})

const state= store.getState()

export type RootStateType=typeof state

export default store