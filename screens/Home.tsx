import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../constants/colors";

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/home.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to BMI</Text>
      <Text style={styles.subtitle}>
        Your Health, <Text style={{ color: colors.secondary }}>Simplified</Text>
      </Text>
      <Text style={styles.description}>
        Track your BMI and get personalized health tips to stay fit and aware.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/calculator")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FCFC",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  image: {
    width: "80%",
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.textPrimary,
    textAlign: "center",
    fontFamily: "Raleway-Bold",
  },
  subtitle: {
    fontSize: 18,
    color: colors.primary,
    marginTop: 4,
    marginBottom: 12,
    textAlign: "center",
    fontFamily: "Raleway-Medium",
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 12,
    fontFamily: "Raleway-Regular",
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 28,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    fontFamily: "Raleway-SemiBold",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Raleway-SemiBold",
  },
});

export default Home;
