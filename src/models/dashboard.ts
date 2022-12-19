export interface DashBoard {
  averageTicket: number;
  topTicket: number;
  topPaymentMethod: string;
  revenuePerHour: number[];
  previousDay: {
    averageTicket: number;
    topTicket: number;
    topPaymentMethod: string;
    revenuePerHour: number[];
  };
}
