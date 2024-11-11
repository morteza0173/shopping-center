export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return (
    new Intl.NumberFormat("fa-IR", {
      style: "decimal",
    }).format(value) + " تومان"
  );
};
