import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Exercise01 } from "./components/Exercise-01";
import { Exercise02 } from "./components/Exercise-02";
import { Exercise03 } from "./components/Exercise-03";

export default function App() {
  return (
    <View style={styles.container}>
      <Exercise01 />
      <Exercise02 />
      <Exercise03 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
