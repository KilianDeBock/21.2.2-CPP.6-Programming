import { FlatList, StyleSheet, View } from "react-native";
import { Card } from "../../Components/Design/Card/Card";

export const ListingScreen = () => {
  const data = [
    {
      title: "Red jacket for sale",
      price: "$100",
      image: require("../../../../assets/jacket.jpg"),
    },
    {
      title: "Couch in great condition",
      price: "$1000",
      image: require("../../../../assets/couch.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.cards}
        data={data}
        renderItem={({ item }) => <Card {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cards: {
    padding: 20,
    marginTop: 20,
  },
});
