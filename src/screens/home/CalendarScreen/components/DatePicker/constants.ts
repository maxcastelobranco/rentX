import responsivePixelSize from "../../../../../utils/responsivePixelSize";

export const OPTION_HEIGHT = responsivePixelSize(32);
export const VISIBLE_ITEMS = 5;

const days: string[] = [];
const years: string[] = [];
const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (let i = 1; i <= 31; i++) {
  days.push(i.toString());
}
const currentYear = new Date().getFullYear();
for (let i = currentYear + 10; i >= currentYear; i--) {
  years.push(i.toString());
}

const valueMap: { [key: string]: number } = {};

days.forEach((day) => {
  valueMap[day] = Number(day);
});
months.forEach((month) => {
  valueMap[month] = months.indexOf(month);
});
years.forEach((year) => {
  valueMap[year] = Number(year);
});

const data = {
  days,
  months,
  years,
  valueMap,
};

export default data;
