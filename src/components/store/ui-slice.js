import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisble: false },
  //a map of method
  reducers: {
    toggle(state) {
      state.cartIsVisble = !state.cartIsVisble;
    },
  },
});


export const uiActions = uiSlice.actions;

export default uiSlice.reducer;