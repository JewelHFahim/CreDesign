import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

// export const { } = cartSlice.actions;
export default counterSlice.reducer;
