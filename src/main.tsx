import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  AxiosInterceptor,
  injectStore,
} from "@/interceptors/axios.interceptor";
import { store, persistor } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilitiesConfigurator } from "@/utilities/snackbar-manager";

injectStore(store);
AxiosInterceptor();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider>
      <SnackbarUtilitiesConfigurator />
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </SnackbarProvider>
  </React.StrictMode>
);
