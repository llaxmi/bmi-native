export const handleCalculateBmi = (weight, height, age) => {
  // Validate input to ensure all values are provided and are positive numbers
  if (
    !weight ||
    !height ||
    !age ||
    isNaN(weight) ||
    isNaN(height) ||
    isNaN(age)
  ) {
    return;
  }

  const weightInKg = parseFloat(weight);
  const heightInM = parseFloat(height) / 100;

  if (weightInKg <= 0 || heightInM <= 0 || age <= 0) {
    return "Invalid input. Weight, height, and age must be greater than 0.";
  }

  // Calculate BMI using the formula: weight / (height * height)
  const calculatedBmi = weightInKg / (heightInM * heightInM);

  return calculatedBmi.toFixed(1);
};
