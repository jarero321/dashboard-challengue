import { createSlice } from "@reduxjs/toolkit";
import { IResponseGetUser, User } from "@/models/user";

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
    addUser: (state, action: { payload: IResponseGetUser }) => {
      return { ...state, ...action.payload };
    },
    removeUser: () => {
      return { ...initialState };
    },
  },
});

export const { addToken, addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
