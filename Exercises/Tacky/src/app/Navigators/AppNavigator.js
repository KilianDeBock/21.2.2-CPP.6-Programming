import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navigation } from "../../core/navigation";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { DefaultNavigatorOptions, Variables } from "../style";
import ListingNavigator from "./ListingNavigator";
import { AccountScreen } from "../Screens/Account/AccountScreen";
import { LoginScreen } from "../Screens/Auth/LoginScreen";

const getTabIcon = (name, focused) => {
  let icon = "";
  switch (name) {
    case Navigation.AUTH:
      icon = "menu-down";
      break;
    case Navigation.LISTINGS:
      icon = "playlist-music";
      break;
    case Navigation.ACCOUNT:
      icon = "account";
      break;
  }

  return focused ? icon : `${icon}-outline`;
};

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <Icons
            name={getTabIcon(route.name, focused)}
            size={size}
            color={color}
          />
        ),
        tabBarActiveTintColor: Variables.colors.primary,
        tabBarInactiveTintColor: Variables.colors.gray,
        tabBarActiveBackgroundColor: Variables.colors.white,
        tabBarInactiveBackgroundColor: Variables.colors.white,
        ...DefaultNavigatorOptions.screenOptions,
      })}
    >
      <Tab.Screen name={Navigation.AUTH} component={LoginScreen} />
      <Tab.Screen
        name={Navigation.LISTINGS}
        component={ListingNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name={Navigation.ACCOUNT} component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
