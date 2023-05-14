import { configureStore } from "@reduxjs/toolkit";
import nameReducer from './reducers/nameSlice';

const store = configureStore ({
     reducer: {
          name: nameReducer,
     },
});

export default store;