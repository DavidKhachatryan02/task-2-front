import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loaded: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => ({
      ...state,
      data: payload,
      loaded: true,
    }),
    logout: () => {
      sessionStorage.removeItem("email");
      return {
        data: null,
        loaded: true,
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
