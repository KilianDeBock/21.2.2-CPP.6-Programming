import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppContainer from "./src/app/Components/Shared/App/AppContainer";
import { Variables } from "./src/app/style";
import { NetworkCheck } from "./src/app/Components/Shared/Network/NetworkCheck";
import { AddListingScreen } from "./src/app/Screens/Listing/AddListingScreen";

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        <NetworkCheck />
        {/*<LoginScreen />*/}
        {/*<ListingScreen />*/}
        {/*<AccountScreen />*/}
        <AddListingScreen />
        <StatusBar style="dark" />
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Variables.sizes.xl,
    flex: 1,
    backgroundColor: Variables.colors.grayLight,
  },
});
