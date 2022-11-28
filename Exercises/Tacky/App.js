import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppContainer from "./src/app/Components/Shared/App/AppContainer";
import { Variables } from "./src/app/style";
import { LoginScreen } from "./src/app/Screens/Auth/LoginScreen";
import { NetworkCheck } from "./src/app/Components/Shared/Network/NetworkCheck";

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        <NetworkCheck />
        <LoginScreen />
        {/*<ListingScreen />*/}
        {/*<AccountScreen />*/}
        {/*<AddListingScreen />*/}
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
