import { View, Text, ImageBackground } from "react-native";
import carItem from "./carItem.style.js";
import StyleButton from "../StyledButton/StyleButton.js";

export default function CarItems({ name, tagline, img }) {
  return (
    <View style={carItem.carContainer}>
      <ImageBackground source={img} style={carItem.backgroundImage} />
      <View style={carItem.titles}>
        <View style={carItem.t}>
          <Text style={carItem.title}>{name}</Text>
          <Text style={carItem.subTitle}>Starting at ${tagline}</Text>
        </View>
      </View>
      <View style={carItem.buttons}>
        <StyleButton type={"primary"} text={"custom order"} />
        <StyleButton type={"secondary"} text={"Exsistig inventory"} />
      </View>
    </View>
  );
}
