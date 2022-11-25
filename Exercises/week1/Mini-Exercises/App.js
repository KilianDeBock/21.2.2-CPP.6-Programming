import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Exercise01 } from "./components/Exercise-01";
import { Exercise02 } from "./components/Exercise-02";
import { Exercise03 } from "./components/Exercise-03";
import { Exercise04 } from "./components/Exercise-04";
import { Exercise06 } from "./components/Exercise-06";
import { Exercise05 } from "./components/Exercise-05";
import { Exercise07 } from "./components/Exercise-07";

export default function App() {
  return (
    <View style={styles.container}>
      <Exercise01 />
      <Exercise02 />
      <Exercise03 />
      <Exercise04 />
      <Exercise05 />
      <Exercise06 />
      <Exercise07 />
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
