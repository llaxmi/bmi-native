import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../constants/colors";

interface Props {
  selectedValue: string;
  onSelect: (value: string) => void;
  placeholder?: string;
}

const Factor = ({ selectedValue, onSelect, placeholder }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={selectedValue}
        onChangeText={onSelect}
        keyboardType="numeric"
        maxLength={3}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  input: {
    width: 100,
    height: 50,
    borderRadius: 5,
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor: colors.primary,
    fontSize: 24,
    fontFamily: "Raleway-Medium",
    color: colors.textPrimary,
  },
});

export default Factor;
