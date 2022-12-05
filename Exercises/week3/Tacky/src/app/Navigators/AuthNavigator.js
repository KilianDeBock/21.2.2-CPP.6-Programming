import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import { LoginScreen } from "../Screens/Auth/LoginScreen";
import { DefaultNavigatorOptions } from "../style";
import { RegisterScreen } from "../Screens/Auth/RegisterScreen";
import { WelcomeScreen } from "../Screens/Auth/WelcomeScreen";

const Stack = createNativeStackNavigator();
export const AuthNavigator = () => (
  <Stack.Navigator {...DefaultNavigatorOptions}>
    <Stack.Screen
      component={WelcomeScreen}
      name={Navigation.AUTH}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      component={LoginScreen}
      name={Navigation.LOGIN}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      component={RegisterScreen}
      name={Navigation.REGISTER}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
