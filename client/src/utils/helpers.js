export const formatToInputDate = (date) => {
  const localeDate = new Date(parseInt(date) + 86400000).toLocaleString();
  return `${new Date(localeDate).getFullYear()}-${String(
    new Date(localeDate).getMonth() + 1
  ).padStart(2, "0")}-${String(new Date(localeDate).getDay() + 1    ).padStart(
    2,
    "0"
  )}`;
};
