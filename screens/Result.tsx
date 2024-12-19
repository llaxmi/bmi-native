import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/AppStyles";

const Result = () => {
  const { result } = useLocalSearchParams<{ result: string }>();
  const router = useRouter();

  const handleGoBack = () => router.back();

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
      }}
    >
      <View style={styles.resultContainer}>
        <Text style={{ color: "#fff", fontWeight: "600" }}>Your BMI is: </Text>
        <Text style={styles.resultText}>{result} kg/m²</Text>
      </View>

      <TouchableOpacity style={styles.againButton} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Calculate Again ↻</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.subheader}>BMI Classification:</Text>
        <Image
          source={require("../assets/bmi.png")}
          style={{ height: 400, width: 300, alignSelf: "center" }}
        />
      </View>

      <View style={styles.studyContainer}>
        <Text style={styles.subheader}>Facts and Studies:</Text>
        <Text style={styles.classification}>
          The Body Mass Index (BMI) is a useful tool to assess body weight in
          relation to height. However, it doesn't directly measure body fat, and
          its accuracy can vary depending on factors such as muscle mass.
        </Text>
        <Text style={styles.classification}>
          While BMI is widely used, it is essential to consider other factors
          such as diet, physical activity, and family history when evaluating
          overall health.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Result;
