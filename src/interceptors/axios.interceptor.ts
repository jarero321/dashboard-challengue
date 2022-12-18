import axios, { AxiosRequestConfig } from "axios";

let store: any;

export const injectStore = (_store: any) => (store = _store);

export const AxiosInterceptor = () => {
  const updateHeaders = (request: AxiosRequestConfig) => {
    const token = store.getState().persistReducers.user.token;
    if (token) {
      const newHeaders = {
        Authorization: token,
        "Content-type": "apllication-json",
      };
      request.headers = newHeaders;
    }
    return request;
  };

  axios.interceptors.request.use((request) => {
    return updateHeaders(request);
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
