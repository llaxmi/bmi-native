export const handleCalculateBmi = (weight, height, age) => {
  if (!weight || !height || !age) {
    return;
  }
  const weightInKg = parseFloat(weight);
  const heightInM = parseFloat(height) / 100; // converting height to meters
  const calculatedBmi = weightInKg / (heightInM * heightInM);
  return calculatedBmi.toFixed(2);
};
