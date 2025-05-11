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
import GenderBox from "../components/Gender";
import Factor from "../components/ScalePicker";
import { colors } from "../constants/colors";
import styles from "../styles/AppStyles";
import { handleCalculateBmi } from "../utils/Calculate";

const Calculator = () => {
  const [selectedGender, setSelectedGender] = useState<string>("Female");
  const [weight, setWeight] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [height, setHeight] = useState<string>("");

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
          <Text style={styles.text}>BMI CALCULATOR</Text>

          <View style={styles.gender}>
            {["Male", "Female"].map((gender) => (
              <GenderBox
                key={gender}
                label={gender}
                isSelected={selectedGender === gender}
                onPress={() => setSelectedGender(gender)}
              />
            ))}
          </View>

          {/* Height Selection */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Height (cm)</Text>
            <Factor
              selectedValue={height}
              onSelect={(value) => setHeight(value)}
              placeholder="170"
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
              placeholder="46"
            />
            <Factors
              value={age}
              label="Age"
              onChangeText={(text) => setAge(text)}
              placeholder="78"
            />
          </View>

          {/* Calculate Button */}
          <TouchableOpacity
            style={styles.customButton}
            onPress={handleCalculation}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                textAlign: "center",
                color: colors.white,
                fontFamily: "Raleway-SemiBold",
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
