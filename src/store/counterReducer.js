import { createSlice } from "@reduxjs/toolkit";

const initStateCounter = { counter: 0, showCounter: true };

//@redux/toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState: initStateCounter,
  //อันนี้เราไม่จำเป็นต้องเขียน check ว่า มันเป็น action.type แบบไหน เราแค่เขียน method ให้ตรงกับ
  //ให้ตรงกับ action.type ไปเลย
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//actions เป็น method ที่มาจาก createSlice
export const counterActions = counterSlice.actions
export default counterSlice.reducer;
