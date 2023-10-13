export const STR_OPTION = {
  name: "Strength/Resistance",
  bgColor: "bg-secondary", // needs to be this way because Tailwind expects a full string somewhere in the code.
  foreColor: "btn-primary", //primary
  chartColor: "#1a8e79"
};
export const CARD_OPTION = {
  name: "Cardio/Aerobic",
  bgColor: "bg-error",
  foreColor: "btn-info", //info
  chartColor: "#89527f",
};
export const FLEX_OPTION = {
  name: "Flexibility",
  bgColor: "bg-accent",
  foreColor: "btn-success", //success
  chartColor: "#19a1fc",
};
export const workoutCategories = [
  STR_OPTION.name,
  CARD_OPTION.name,
  FLEX_OPTION.name,
];

export const workoutCategoriesBgColors = {
  [STR_OPTION.name]: STR_OPTION.bgColor,
  [CARD_OPTION.name]: CARD_OPTION.bgColor,
  [FLEX_OPTION.name]: FLEX_OPTION.bgColor,
};

export const workoutCategoriesForeColors = {
  [STR_OPTION.name]: STR_OPTION.foreColor,
  [CARD_OPTION.name]: CARD_OPTION.foreColor,
  [FLEX_OPTION.name]: FLEX_OPTION.foreColor,
};
