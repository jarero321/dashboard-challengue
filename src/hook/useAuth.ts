import { User } from "./../models/user";
import { AppStore } from "./../redux/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
const useAuth = () => {
  const dispatch = useDispatch();
  const userState = useSelector(
    (store: AppStore) => store.persistReducers.user
  );

  const isAuthent = () => {
    const { token } = userState;
    return Boolean(token.length > 0);
  };

  return {
    isAuthent,
  };
};
export default useAuth;
