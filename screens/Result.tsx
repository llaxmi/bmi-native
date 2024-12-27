import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "../styles/AppStyles";
import { getCategoryStyle } from "../utils/Category";

const Result = () => {
  const { result } = useLocalSearchParams<{ result: string }>();
  const router = useRouter();

  const handleGoBack = () => router.back();
  const bmi = parseFloat(result || "0");

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
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
            <View style={[styles.resultContainer, getCategoryStyle(bmi)]}>
              <Text style={{ color: "#fff", fontWeight: "600", fontSize: 24 }}>
                BMI ={" "}
              </Text>
              <Text style={styles.resultText}>{result} kg/m²</Text>
            </View>

            {/* Button */}
            <TouchableOpacity style={styles.againButton} onPress={handleGoBack}>
              <Text style={styles.buttonText}>Calculate Again ↻</Text>
            </TouchableOpacity>

            {/* Image Section */}
            <View>
              <Text style={styles.subheader}>BMI Classification:</Text>
              <Image
                source={require("../assets/bmi.png")}
                style={{
                  height: 400,
                  width: 300,
                  alignSelf: "center",
                }}
              />
            </View>

            {/* Facts and Studies Section */}
            <View>
              <Text style={styles.subheader}>Facts and Studies:</Text>
              <Text style={styles.classification}>
                The Body Mass Index (BMI) is a useful tool to assess body weight
                in relation to height. However, it doesn't directly measure body
                fat, and its accuracy can vary depending on factors such as
                muscle mass.
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
