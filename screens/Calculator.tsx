import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Factors from "../components/Factors";
import Gender from "../components/Gender";
import ScalePicker from "../components/ScalePicker";
import styles from "../styles/AppStyles";
import { handleCalculateBmi } from "../utils/Calculate";

const Calculator = () => {
  const gender = [
    { label: "Male", image: require("../assets/man.png") },
    { label: "Female", image: require("../assets/woman.png") },
  ];

  const [selectedGender, setSelectedGender] = useState<string>("Female");
  const [weight, setWeight] = useState<string>("56");
  const [age, setAge] = useState<string>("23");
  const [height, setHeight] = useState<string>("102");

  const handleCalculation = () => {
    const result = handleCalculateBmi(weight, height, age);
    if (!result) {
      alert("Cannot be calculated");
      return;
    }
    router.push({ pathname: "/result", params: { result } });
  };

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar style="dark" />
          <Text style={styles.text}>BMI Calculator</Text>

          {/* Gender Selection */}
          <View style={styles.gender}>
            {gender.map((item) => (
              <Gender
                key={item.label}
                src={item.image}
                isSelected={selectedGender === item.label}
                onPress={() => setSelectedGender(item.label)}
              />
            ))}
          </View>

          {/* Height Selection */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Height (cm)</Text>
            <ScalePicker
              selectedValue={height}
              onSelect={(value) => setHeight(value)}
            />
          </View>

          {/* Weight and Age inputs */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 10,
            }}
          >
            <Factors
              value={weight}
              label="Weight (kg)"
              onChangeText={(text) => setWeight(text)}
            />
            <Factors
              value={age}
              label="Age"
              onChangeText={(text) => setAge(text)}
            />
          </View>

          <TouchableOpacity
            style={styles.customButton}
            onPress={handleCalculation}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                textAlign: "center",
                color: "white",
              }}
            >
              Calculate BMI
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};

export default Calculator;
