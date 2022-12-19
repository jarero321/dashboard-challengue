import { TypeWithKey } from "@/models/type-with-key";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { AppStore } from "@/redux/store";
import { getReport } from "@/pages/Dashboard/services/dashboard";
import { addReport } from "@/redux/states/dashboard";
const useDashboard = () => {
  const dispatch = useDispatch();

  const userState = useSelector(
    (store: AppStore) => store.persistReducers.user
  );
  const dashboardState = useSelector(
    (store: AppStore) => store.persistReducers.dashboard
  );

  const getUserName = (type?: "name" | "firstName" | "complete") => {
    const { name, paternalSurname, maternalSurname } = userState;
    const nameReturned: TypeWithKey<string> = {
      name: name,
      firstName: `${name} ${paternalSurname}`,
      complete: `${name} ${paternalSurname} ${maternalSurname}`,
      default: name,
    };
    return (type && nameReturned[type]) || nameReturned["default"];
  };

  const getUserReport = async () => {
    try {
      const userReport = await getReport();
      dispatch(addReport(userReport));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getUserName,
    getUserReport,
    dashboardState,
  };
};

export default useDashboard;
