import { FlatList, Image, StyleSheet, View } from "react-native";
import TextField from "../../Components/Design/Form/TextField";

export const AddListingScreen = () => {
  const data = [
    require("../../../../assets/background.jpg"),
    require("../../../../assets/chair.jpg"),
    require("../../../../assets/couch.jpg"),
  ];

  data.push(require("../../../../assets/camera.jpeg"));

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.images}
        data={data}
        renderItem={({ item }) => <Image style={styles.image} source={item} />}
        numColumns={4}
      />
      <TextField style={styles.input} name="Title" placeholder="Title" />
      <TextField style={styles.input} name="Price" placeholder="Price" />
      <TextField
        style={[styles.input, styles.category]}
        name="Category"
        placeholder="Category"
      />
      <TextField
        style={styles.input}
        name="Description"
        placeholder="Description"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  images: {
    marginBottom: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginRight: 10,
  },
  input: {
    marginBottom: 20,
    borderRadius: 50,
    overflow: "hidden",
  },
});
