import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./auth.api";

const init = {
  username: "",
  token: "",
  refreshToken: "",
  isLogin: false,
  pending: false,
  error: '',
};

export const loginUser = createAsyncThunk(
  "authReducer/loginUser",
  async (payload) => {
    try {
      const data = await login(payload.username, payload.password);
      return data;
    } catch (error) {
      throw (error.data.errors[0]);
    }
  }
);

const authReducer = createSlice({
  name: "authReducer",
  initialState: init,
  reducers: {
    logoutUser: (state, action) => {
      state.isLogin = false;
      state.token = "";
      state.refreshToken = "";
      state.username = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.pending = true;
      state.error = "";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLogin = true;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.username = action.payload.username;
      state.pending = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message
    });
  },
});

export const { logoutUser } = authReducer.actions;

export default authReducer.reducer;
