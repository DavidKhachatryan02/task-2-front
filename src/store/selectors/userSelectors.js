import { createSelector } from "@reduxjs/toolkit";

const baseName = "user";
const selectState = (state) => state[baseName];

export const selectUserState = createSelector(selectState, (state) => state);
export const selectUser = createSelector(selectState, (state) => state.data);
