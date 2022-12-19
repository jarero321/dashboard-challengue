import axios from "axios";
import {
  IResponseGetUser,
  IResponseSignUp,
  UserCredentials,
} from "../models/user";

const API_URL = import.meta.env.VITE_API_URL;

const signUpWithCrendentials = (
  userCredentials: UserCredentials
): Promise<IResponseSignUp> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/challenge/login`, userCredentials)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getUser = (): Promise<IResponseGetUser> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/challenge/me`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getUser, signUpWithCrendentials };
