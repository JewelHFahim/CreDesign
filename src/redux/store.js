import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import apiSlice from "./features/api/apiSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
});
