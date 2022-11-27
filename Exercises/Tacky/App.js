import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppContainer from "./src/app/Components/Shared/App/AppContainer";
import { Variables } from "./src/app/style";
import { AccountScreen } from "./src/app/Screens/Account/AccountScreen";

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        {/*<LoginScreen />*/}
        {/*<ListingScreen />*/}
        <AccountScreen />
        <StatusBar style="dark" />
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Variables.sizes.xxxl,
    flex: 1,
    backgroundColor: Variables.colors.grayLight,
  },
});
