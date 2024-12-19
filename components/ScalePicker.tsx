import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface Props {
  selectedValue: string;
  onSelect: (value: string) => void;
}

const ScalePicker = ({ selectedValue, onSelect }: Props) => {
  const heightArray = Array.from({ length: 100 }, (_, i) =>
    (i + 100).toString()
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={50}
      contentContainerStyle={{
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
      {heightArray.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => onSelect(value)}
          style={{
            width: 50,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 4,
          }}
        >
          <Text
            style={{
              fontSize: selectedValue === value ? 26 : 16,
              fontWeight: selectedValue === value ? "600" : "400",
              color: selectedValue === value ? "#117554" : "black",
            }}
          >
            {value}
          </Text>
          {/* Scale line */}
          <View
            style={{
              width: selectedValue === value ? 1 : 0,
              height: 10,
              backgroundColor: "gray",
              marginVertical: 8,
            }}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ScalePicker;
