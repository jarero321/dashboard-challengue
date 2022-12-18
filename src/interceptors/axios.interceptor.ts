import axios, { AxiosRequestConfig } from "axios";

export const AxiosInterceptor = () => {
  const updateHeaders = (request: AxiosRequestConfig) => {
    const token = "token_de_prueba";
    const newHeaders = {
      Authorization: token,
      "Content-type": "apllication-json",
    };
    request.headers = newHeaders;
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
