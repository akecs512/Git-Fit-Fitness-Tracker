export const STR_OPTION = {
  name: "Strength/Resistance",
  bgColor: "bg-[#1a8e79]", // needs to be this way because Tailwind expects a full string somewhere in the code.
  foreColor: "#000000",
};
export const CARD_OPTION = {
  name: "Cardio/Aerobic",
  bgColor: "bg-[#89527f]",
  foreColor: "#000000",
};
export const FLEX_OPTION = {
  name: "Flexibility",
  bgColor: "bg-[#19a1fc]",
  foreColor: "#000000",
};
export const workoutCategories = [
  STR_OPTION.name,
  CARD_OPTION.name,
  FLEX_OPTION.name,
];
