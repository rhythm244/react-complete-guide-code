import { createSlice } from "@reduxjs/toolkit";

const initAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authenthication",
  initialState: initAuthState,
  //อันนี้เราไม่จำเป็นต้องเขียน check ว่า มันเป็น action.type แบบไหน เราแค่เขียน method ให้ตรงกับ
  //ให้ตรงกับ action.type ไปเลย
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//actions เป็น method ที่มาจาก createSlice
export const authActions = authSlice.actions;

export default authSlice.reducer;
