import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navigation } from "../../core/navigation";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { DefaultNavigatorOptions, Variables } from "../style";
import ListingNavigator from "./ListingNavigator";
import { AccountScreen } from "../Screens/Account/AccountScreen";
import { useAuth } from "../Contexts/Auth.context";

const getTabIcon = (name, focused, username) => {
  let icon = "";
  switch (name) {
    case Navigation.LISTINGS:
      icon = "playlist-music";
      break;
    case Navigation.ACCOUNT:
      icon = "account";
      break;
    case username:
      icon = "account";
      break;
  }

  return focused ? icon : `${icon}-outline`;
};

const AppNavigator = () => {
  const auth = useAuth();
  const Tab = createBottomTabNavigator();
  const username = auth?.username;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <Icons
            name={getTabIcon(route.name, focused, username)}
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
      <Tab.Screen
        name={Navigation.LISTINGS}
        component={ListingNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={username ?? Navigation.ACCOUNT}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
