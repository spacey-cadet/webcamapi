import { configureStore } from "@reduxjs/toolkit";
import { webcationAPI } from "./features/apiSlice";

export const store = configureStore({
    reducer:{
       [ webcationAPI.reducerPath]: webcationAPI.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(webcationAPI.middleware)
})