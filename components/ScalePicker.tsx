import React, { useEffect, useRef } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  selectedValue: string;
  onSelect: (value: string) => void;
}

const ScalePicker = ({ selectedValue, onSelect }: Props) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const heightArray = Array.from({ length: 100 }, (_, i) =>
    (i + 100).toString()
  );

  const itemWidth = 50; // Width of each item
  const screenWidth = Dimensions.get("window").width;
  const centerOffset = (screenWidth - itemWidth) / 6;

  useEffect(() => {
    const index = heightArray.indexOf(selectedValue);

    // Check if the selectedValue exists in the array and if the scroll view is available
    if (index !== -1 && scrollViewRef.current) {
      // Scroll to the position calculated based on the item's index, width, and offset
      scrollViewRef.current.scrollTo({
        x: index * itemWidth - centerOffset, // Calculate the horizontal position
        animated: true,
      });
    }
  }, [selectedValue]);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWidth}
      decelerationRate="fast"
      contentContainerStyle={{
        paddingHorizontal: centerOffset,
        alignItems: "center",
      }}
    >
      {heightArray.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => onSelect(value)}
          style={{
            width: itemWidth,
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
              width: selectedValue === value ? 2 : 0,
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
