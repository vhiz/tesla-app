import { Dimensions, StyleSheet } from "react-native";

const carItem = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("screen").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },

  t: {
    width: 150,
    height: 150,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },

  title: {
    fontSize: 40,
    fontWeight: "500",
    color: "lightgrey",
  },
  subTitle: {
    fontSize: 15,
    color: "lightgray",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttons: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default carItem;
