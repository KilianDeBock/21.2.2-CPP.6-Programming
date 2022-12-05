import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import HeaderButton from "../Components/Design/Button/HeaderButton";
import { DefaultNavigatorOptions } from "../style";
import { AddListingScreen } from "../Screens/Listing/AddListingScreen";
import { ListingScreen } from "../Screens/Listing/ListingScreen";

const Stack = createNativeStackNavigator();
const ListingNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator {...DefaultNavigatorOptions}>
      <Stack.Screen
        name={Navigation.LISTING}
        component={ListingScreen}
        options={{
          title: "Listing",
          headerRight: () => (
            <HeaderButton
              onPress={() => {
                navigation.navigate(Navigation.LISTINGS, {
                  screen: Navigation.LISTING_CREATE,
                });
              }}
              icon="plus"
              title="Add Listing"
            />
          ),
        }}
      />
      <Stack.Screen
        name={Navigation.LISTING_CREATE}
        component={AddListingScreen}
        options={{
          title: "Add Listing",
        }}
      />
    </Stack.Navigator>
  );
};

export default ListingNavigator;
