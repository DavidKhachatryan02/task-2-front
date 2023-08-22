import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    code: "",
    languageID: "1",
    userPersonalData: {},
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserCode: (state, action) => {
      state.code = action.payload;
    },
    setUserPersonalData: (state, action) => {
      state.userPersonalData = { ...action.payload };
    },
  },
});

export const { setUserEmail, setUserCode, setUserPersonalData } =
  userSlice.actions;
export default userSlice.reducer;
