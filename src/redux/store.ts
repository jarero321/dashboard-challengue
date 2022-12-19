import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { userSlice } from "./states/user";
import thunk from "redux-thunk";
import { User } from "../models/user";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  user: userSlice.reducer,
});

const persistReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: { persistReducers },
  middleware: [thunk],
});

export interface AppStore {
  persistReducers: {
    user: User;
  };
}
export const persistor = persistStore(store);
