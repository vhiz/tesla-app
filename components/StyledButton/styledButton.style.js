import { StyleSheet } from "react-native";

const styledButton = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});

export default styledButton;
