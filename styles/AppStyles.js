import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  gender: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginBottom: 10,
  },
  inputContainer: {
    padding: 24,
    borderRadius: 12,
    backgroundColor: "#E9EFEC",
    shadowColor: "#697565",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    margin: 10,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: "#E9EFEC",
    margin: 8,
    borderRadius: 8,
    alignItems: "center",
    height: 150,
    justifyContent: "center",
    shadowColor: "#697565",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
    color: "#555",
  },
  input: {
    padding: 6,
    borderBottomWidth: 2,
    borderColor: "#8CCBBE",
    textAlign: "center",
    marginTop: 8,
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    maxWidth: 60,
    alignSelf: "center",
  },
  resultContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#8CCBBE",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  resultText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  customButton: {
    backgroundColor: "#8CCBBE",
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#16423C",
    marginBottom: 16,
  },
  c: {
    flex: 1,
  },
  studyContainer: {
    marginVertical: 10,
  },
  subheader: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555",
  },
  classification: {
    fontSize: 14,
    color: "#373A40",
    textAlign: "justify",
  },
  againButton: {
    margin: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default styles;