import { FlatList, View } from "react-native";
import { ListItem } from "../../Components/Design/ListItem/ListItem";
import { useAuth } from "../../Contexts/Auth.context";

export const AccountScreen = () => {
  const auth = useAuth();

  const data = [
    {
      type: "main",
      title: "Mosh Hamedani",
      image: require("../../../../assets/mosh.jpg"),
      subtitle: "programmingwithmosh@gmail.com",
    },
    {
      type: "menu",
      title: "My Listings",
      image: require("../../../../assets/listing.png"),
    },
    {
      type: "menu",
      title: "My Messages",
      image: require("../../../../assets/message.png"),
    },
    {
      type: "side",
      title: "Log Out",
      image: require("../../../../assets/logout.png"),
      onPress: () => auth?.setLoggedIn(false),
    },
  ];

  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => <ListItem {...item} />} />
    </View>
  );
};
