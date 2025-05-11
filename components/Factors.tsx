import { Text, TextInput, View } from "react-native";
import styles from "../styles/AppStyles";

const Factors = ({
  value,
  label,
  onChangeText,
  placeholder,
}: {
  value: string;
  label: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
        maxLength={3}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Factors;
