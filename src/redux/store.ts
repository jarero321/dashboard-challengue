import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { authenticationSlice } from "./states/authentication";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  authentication: authenticationSlice.reducer,
});

const persistReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: { persistReducers },
  middleware: [thunk],
});

export const persistor = persistStore(store);
