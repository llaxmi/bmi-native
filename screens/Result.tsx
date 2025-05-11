import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BMIGauge from "../components/BMIGauge";
import { colors } from "../constants/colors";
import styles from "../styles/AppStyles";
import { getCategoryStyle } from "../utils/Category";

const Result = () => {
  const { result } = useLocalSearchParams<{ result: string }>();
  const router = useRouter();

  const handleGoBack = () => router.back();
  const bmi = parseFloat(result || "0");

  const getBMICategory = (bmiValue: number) => {
    if (bmiValue < 18.5) return "Underweight";
    if (bmiValue < 25) return "Normal weight";
    if (bmiValue < 30) return "Overweight";
    return "Obese";
  };

  const bmiCategory = getBMICategory(bmi);

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <SafeAreaView
          style={{ flex: 1, backgroundColor: colors.backgroundLight }}
        >
          <StatusBar style="dark" />

          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingVertical: 30,
              flexGrow: 1,
            }}
          >
            {/* Main Content */}
            <View
              style={[
                styles.resultContainer,
                { backgroundColor: getCategoryStyle(bmi).backgroundColor },
              ]}
            >
              <Text
                style={{
                  color: colors.backgroundLight,
                  fontWeight: "600",
                  fontSize: 24,
                }}
              >
                BMI =
              </Text>
              <Text style={styles.resultText}>{result} kg/m²</Text>
            </View>

            {/* BMI Gauge */}
            <View style={{ alignItems: "center", marginVertical: 20 }}>
              <BMIGauge bmi={bmi} size={250} />
            </View>
            {/* Button */}
            <TouchableOpacity style={styles.againButton} onPress={handleGoBack}>
              <Text style={styles.buttonText}>Calculate Again ↻</Text>
            </TouchableOpacity>

            {/* Facts and Studies Section */}
            <View
              style={{
                padding: 20,
                borderRadius: 10,
                marginVertical: 20,
                borderWidth: 1,
                backgroundColor: colors.secondaryLight,
                borderColor: colors.secondary,
              }}
            >
              <Text style={styles.subheader}>Facts and Studies:</Text>
              <Text style={styles.classification}>
                Body Mass Index (BMI) is a measure of body fat based on weight
                and height, used to categorize individuals as underweight,
                normal weight, overweight, or obese.
              </Text>
              <Text style={styles.classification}>
                While BMI is widely used, it is essential to consider other
                factors such as diet, physical activity, and family history when
                evaluating overall health.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};

export default Result;
