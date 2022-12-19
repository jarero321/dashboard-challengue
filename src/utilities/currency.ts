export const formatNumberToCurrency = (value: number) => {
  return Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
};
