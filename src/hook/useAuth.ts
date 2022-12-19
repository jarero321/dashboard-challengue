import React from "react";
import { UserCredentials } from "@/models/user";
import { AppStore } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { addToken, addUser, removeUser } from "@/redux/states/user";
import { getUser, signUpWithCrendentials } from "@/services/user";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [loaderSignUp, setLoaderSignUp] = React.useState(false);
  const dispatch = useDispatch();
  const userState = useSelector(
    (store: AppStore) => store.persistReducers.user
  );

  const isAuthent = () => {
    const { token } = userState;
    return Boolean(token.length > 0);
  };
  const getUserInfo = async () => {
    const userInfo = await getUser();
    dispatch(addUser(userInfo));
  };
  const signUp = async (userCredentials: UserCredentials) => {
    setLoaderSignUp(true);
    try {
      const { token } = await signUpWithCrendentials(userCredentials);
      dispatch(addToken(token));
      await getUserInfo();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setLoaderSignUp(false);
    }
  };

  const logOut = () => {
    dispatch(removeUser());
  };
  return {
    isAuthent,
    signUp,
    logOut,
    loaderSignUp,
  };
};
export default useAuth;
