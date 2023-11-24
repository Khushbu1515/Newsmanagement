import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux-toolkit/reducer";


export const store = configureStore({
  reducer: {
    mySlice: authReducer,
   
  },
});