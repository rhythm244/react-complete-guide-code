// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";

//the old way เพราะถ้าเกิดมี หลาย slicer อาจจะ.........ไม่รู้เหมือนกัน
// const store = createStore(counterSlice.reducer);

//max แนะนำแบบนี้

//redux want one main reducer
const store = configureStore({
  //redux want one main reducer
  reducer: {
    //counter: conterSlice.reducer
    //auth: authSlice.reducer
    //authSlice.reducer === counterReducer ได้ยังไงยังงงอยู่
    counter: counterReducer,
    auth: authReducer,
  },
});

//actions เป็น method ที่มาจาก createSlice
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;

//จะแยก Reducer ไปอีกไฟล์นึงก็ได้
// const counterReducer = (state = initState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       //การ return object แบบนี้มันจะเป็นการ overwriten เป็นวิธีที่ควรทำ
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return { counter: state.counter - 1 };
//   }

//   if (action.type === "TOGGLE") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }
//   return state;
// };

