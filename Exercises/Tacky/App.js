import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppContainer from "./src/app/Components/Shared/App/AppContainer";
import { Variables } from "./src/app/style";
import { ListingScreen } from "./src/app/Screens/Listing/ListingScreen";

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        {/*<LoginScreen />*/}
        <ListingScreen />
        <StatusBar style="dark" />
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Variables.colors.background,
  },
});
