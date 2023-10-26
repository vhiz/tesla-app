import { View, Text, Pressable } from "react-native";
import styledButton from "./styledButton.style";

export default function StyleButton({ type, text }) {
  return (
    <View style={styledButton.container}>
      <Pressable
        style={[
          styledButton.button,
          { backgroundColor: type === "primary" ? "#171a20cc" : "#ffffffa6" },
        ]}
        onPress={() => console.warn(`${text}`)}
      >
        <Text
          style={[
            styledButton.text,
            {
              color: type === "primary" ? "white" : "black",
            },
          ]}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
}
