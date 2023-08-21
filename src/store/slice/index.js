import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { languageID: "1" },
};

//!!todo

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail: (email) => {
      user.email = email;
    },
    setUserCode: (code) => {
      user.code = code;
    },
    incrementByAmount: (state, action) => {
      user.value += action.payload;
    },
  },
});

export const { setUserEmail, setUserCode} = userSlice.actions;

export default userSlice.reducer;
