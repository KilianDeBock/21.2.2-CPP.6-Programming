import "react-native-url-polyfill/auto";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppContainer from "./src/app/Components/Shared/App/AppContainer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Variables } from "./src/app/style";
import { NetworkCheck } from "./src/app/Components/Shared/Network/NetworkCheck";
import { AppContent } from "./src/app/Navigators/AppContent";
import { AuthProvider } from "./src/app/Components/Shared/Auth/AuthProvider";

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
      <AuthProvider>
        <View style={styles.container}>
          <NetworkCheck />
          <NavigationContainer theme={AppTheme}>
            <AppContent />
            <StatusBar style="dark" />
          </NavigationContainer>
        </View>
      </AuthProvider>
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
