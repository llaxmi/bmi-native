import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, G } from "react-native-svg";
import { colors } from "../constants/colors";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface BMIGaugeProps {
  bmi: number;
  size?: number;
}

export default function BMIGauge({ bmi, size = 200 }: BMIGaugeProps) {
  // Define stroke widths and radius
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Create gauge arc from 0 to 40 BMI
  const maxBMI = 40;

  // Define color stops
  const colorRanges = [
    {
      max: 18.5,
      color: colors.bmiCategories.underweight,
      label: "Underweight",
    },
    { max: 25, color: colors.bmiCategories.normal, label: "Normal weight" },
    { max: 30, color: colors.bmiCategories.overweight, label: "Overweight" },
    { max: 40, color: colors.bmiCategories.obese, label: "Obese" },
  ];

  // Determine gauge progress (0 to 1)
  const progress = Math.min(bmi / maxBMI, 1);
  const dashOffset = useSharedValue(circumference);

  // Get color and label based on BMI value
  const getColorAndLabelForBMI = (bmiValue: number) => {
    for (const range of colorRanges) {
      if (bmiValue <= range.max) {
        return { color: range.color, label: range.label };
      }
    }
    return {
      color: colorRanges[colorRanges.length - 1].color,
      label: colorRanges[colorRanges.length - 1].label,
    };
  };

  const { color: gaugeColor, label: bmiLabel } = getColorAndLabelForBMI(bmi);

  useEffect(() => {
    // Animate the gauge filling
    dashOffset.value = withTiming(circumference * (1 - progress), {
      duration: 1500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [bmi, circumference, progress]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: dashOffset.value,
  }));

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
          {/* Background circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={colors.gaugeBackground}
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Animated foreground circle */}
          <AnimatedCircle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={gaugeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            animatedProps={animatedProps}
          />
        </G>

        {/* BMI category markers */}
        <G>
          {/* Underweight marker */}
          <Circle
            cx={size / 2 - radius * Math.cos(Math.PI * 0.75)}
            cy={size / 2 - radius * Math.sin(Math.PI * 0.75)}
            r={4}
            fill={colors.bmiCategories.underweight}
          />

          {/* Normal marker */}
          <Circle
            cx={size / 2 - radius * Math.cos(Math.PI * 0.5)}
            cy={size / 2 - radius * Math.sin(Math.PI * 0.5)}
            r={4}
            fill={colors.bmiCategories.normal}
          />

          {/* Overweight marker */}
          <Circle
            cx={size / 2 - radius * Math.cos(Math.PI * 0.25)}
            cy={size / 2 - radius * Math.sin(Math.PI * 0.25)}
            r={4}
            fill={colors.bmiCategories.overweight}
          />

          {/* Obese marker */}
          <Circle
            cx={size / 2 - radius * Math.cos(0)}
            cy={size / 2 - radius * Math.sin(0)}
            r={4}
            fill={colors.bmiCategories.obese}
          />
        </G>
      </Svg>
      {/* Display BMI category inside the circle */}
      <Text style={styles.bmiLabel}>{bmiLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  bmiLabel: {
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
