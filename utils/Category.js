import { colors } from "../constants/colors";

export const getCategoryStyle = (bmi) => {
  if (bmi < 16) {
    return { backgroundColor: colors.bmiCategories.underweight };
  } else if (bmi >= 16 && bmi <= 18.4) {
    return { backgroundColor: colors.bmiCategories.underweight };
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return { backgroundColor: colors.bmiCategories.normal };
  } else if (bmi >= 25 && bmi <= 29.9) {
    return { backgroundColor: colors.bmiCategories.overweight };
  } else if (bmi >= 30 && bmi <= 40) {
    return { backgroundColor: colors.bmiCategories.obese };
  } else {
    return { backgroundColor: colors.bmiCategories.overweight };
  }
};
