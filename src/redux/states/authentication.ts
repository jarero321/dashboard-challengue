import { createSlice } from "@reduxjs/toolkit";
import { Authentication } from "../../models/authentication";

const initialState: Authentication = { token: "" };

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    addToken: (state, action) => {
      return { ...state, token: action.payload };
    },
    removeToken: (state, _action) => {
      return { ...state, token: "" };
    },
  },
});

export const { addToken, removeToken } = authenticationSlice.actions;

export default authenticationSlice.reducer;
