import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./style.js";
import CarItems from "../CarItems/CarItems.js";
import { carData } from "../../data.js";
export default function CarList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={carData}
        renderItem={({ item }) => (
          <CarItems name={item.name} tagline={item.tagline} img={item.img} />
        )}
        snapToAlignment="start"
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("screen").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
