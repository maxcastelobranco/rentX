export const money = (n: number) => {
  return `$${n
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    .replace(".00", "")}`;
};
