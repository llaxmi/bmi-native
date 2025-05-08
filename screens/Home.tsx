import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
      <Text style={styles.subtitle}>Your Health, Simplified</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#1C1C1E",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#4BB5A8",
    marginTop: 4,
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: "#4BB5A8",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 28,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Home;
