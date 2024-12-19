import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const imageSize = width * 0.15; // Responsive image size based on screen width

const Gender = ({
  isSelected,
  onPress,
  src,
}: {
  isSelected: boolean;
  src: any;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? styles.selected : {}]}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View>
        <Image source={src} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    shadowColor: "#697565",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    borderWidth: 2,
    borderColor: "white",
    // For Android
  },
  selected: {
    borderColor: "#8CCBBE",
    borderWidth: 2,
  },
  image: {
    width: imageSize,
    height: imageSize,
    resizeMode: "contain",
  },
});

export default Gender;
