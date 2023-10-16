import { configureStore } from '@reduxjs/toolkit';
import mySlice  from "./Reducer"

const store = configureStore({
  reducer: {
    myData: mySlice,
  },
});

export default store;