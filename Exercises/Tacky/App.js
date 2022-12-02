import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppContainer from "./src/app/Components/Shared/App/AppContainer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Variables } from "./src/app/style";
import AppNavigator from "./src/app/Navigators/AppNavigator";
import { NetworkCheck } from "./src/app/Components/Shared/Network/NetworkCheck";

const AppTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Variables.colors.primary,
    background: Variables.colors.background,
    text: Variables.colors.headerText,
    card: Variables.colors.primary,
  },
};

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        <NetworkCheck />
        <NavigationContainer theme={AppTheme}>
          <AppNavigator />
          <StatusBar style="dark" />
        </NavigationContainer>
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
