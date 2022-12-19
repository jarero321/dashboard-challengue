import { DashBoard } from "@/models/dashboard";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getReport = (): Promise<DashBoard> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/challenge/report`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getReport };
