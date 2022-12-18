import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user";

const initialState: User = {
  token: "",
  name: "",
  paternalSurname: "",
  maternalSurname: "",
  phone: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
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

export const { addToken, removeToken } = userSlice.actions;

export default userSlice.reducer;
