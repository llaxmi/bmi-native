export const getCategoryStyle = (bmi) => {
  if (bmi < 16) {
    return { backgroundColor: "#F8D766" }; // severely underweight
  } else if (bmi >= 16 && bmi <= 18.4) {
    return { backgroundColor: "#F8D766" }; // underweight
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return { backgroundColor: "#48BD51" }; // normal
  } else if (bmi >= 25 && bmi <= 29.9) {
    return { backgroundColor: "#F09319" }; // Overweight
  } else if (bmi >= 30 && bmi <= 34.9) {
    return { backgroundColor: "#F37171" }; // Moderately Overweight
  } else if (bmi >= 35 && bmi <= 39.9) {
    return { backgroundColor: "#F43F5E" }; // severely Overweight
  } else {
    return { backgroundColor: "#B91C1C" }; // morbidly Obese
  }
};
