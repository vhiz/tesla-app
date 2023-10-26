import React from "react";
import { StatusBar } from "expo-status-bar";
import {View} from "react-native";
import styles from "./app.style";
import CarList from "./components/CarList/CarList";

export default function App() {
  return (
    <View style={styles.container}>
      <CarList />
      <StatusBar style="auto" />
    </View>
  );
}
