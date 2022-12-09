import { FlatList, StyleSheet, View } from "react-native";
import { Card } from "../../Components/Design/Card/Card";
import LoadingIndicator from "../../Components/Design/Loading/LoadingIndicator";
import ErrorMessage from "../../Components/Design/Text/ErrorMessage";
import { useQuery } from "react-query";
import { getListings } from "../../../core/modules/listing/api";
import { Navigation } from "../../../core/navigation";

export const ListingScreen = ({ navigation }) => {
  const { data, isLoading, error, isError } = useQuery("listings", getListings);

  const handlePress = () => {
    navigation.navigate(Navigation.LISTING_CREATE);
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  const { data: listings } = data;

  // return (
  //     <View>
  //       <Text>Projects</Text>
  //       {projects &&
  //           projects.map((project) => <Text key={project.id}>{project.name}</Text>)}
  //       <Button onPress={handlePress}>Klik mij</Button>
  //     </View>
  // );
  // const listings = [
  //   {
  //     title: "Red jacket for sale",
  //     price: "$100",
  //     image: require("../../../../assets/jacket.jpg"),
  //   },
  //   {
  //     title: "Couch in great condition",
  //     price: "$1000",
  //     image: require("../../../../assets/couch.jpg"),
  //   },
  // ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.cards}
        data={listings}
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
