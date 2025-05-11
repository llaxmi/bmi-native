import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";

type Props = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

const GenderBox = ({ label, isSelected, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.box, isSelected && styles.selectedBox]}
      onPress={onPress}
    >
      <Text style={[styles.label, isSelected && styles.selectedLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#a1ddda",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#a1ddda",
    marginHorizontal: 6,
    width: "40%",
  },
  selectedBox: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  label: {
    fontSize: 18,
    color: colors.textPrimary,
    fontFamily: "Raleway-Medium",
    textAlign: "center",
  },
  selectedLabel: {
    fontFamily: "Raleway-Bold",
    color: colors.textPrimary,
  },
});

export default GenderBox;
