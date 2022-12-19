import { createSlice } from "@reduxjs/toolkit";
import { DashBoard } from "@/models/dashboard";

const initialState: DashBoard = {
  averageTicket: 0,
  topTicket: 0,
  topPaymentMethod: "",
  revenuePerHour: [],
  previousDay: {
    averageTicket: 0,
    topTicket: 0,
    topPaymentMethod: "",
    revenuePerHour: [],
  },
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addReport: (state, action: { payload: DashBoard }) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addReport } = dashboardSlice.actions;
export default dashboardSlice.reducer;
