import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    code: "",
    languageID: "1",
    userPerosnalData: {},
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserCode: (state, action) => {
      state.code = action.payload;
    },
    setUserPerosnalData: (state, action) => {
      state.userPerosnalData = { ...action.payload };
    },
  },
});

export const { setUserEmail, setUserCode, setUserPerosnalData } =
  userSlice.actions;
export default userSlice.reducer;
