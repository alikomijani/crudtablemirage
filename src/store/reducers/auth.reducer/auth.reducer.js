import { createSlice } from "@reduxjs/toolkit";

const init = {
  username: "",
  token: "",
  refreshToken: "",
  isLogin: false,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState: init,
  reducers: {
    loginUser: (state, action) => {
      state.isLogin = true;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.username = action.payload.username;
    },
    logoutUser: (state, action) => {
      state.isLogin = false;
      state.token = '';
      state.refreshToken = '';
      state.username = '';
    },
  },
});

export const { loginUser, logoutUser } = authReducer.actions;

export default authReducer.reducer;
