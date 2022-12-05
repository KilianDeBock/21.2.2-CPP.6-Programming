import { StyleSheet, View } from "react-native";
import TextField from "../../Components/Design/Form/TextField";
import React from "react";
import { ImagePicker } from "../../Components/Shared/ImagePicker/ImagePicker";

export const AddListingScreen = () => {
  const [formData, setFormData] = React.useState({
    images: [],
    title: "",
    price: "",
    category: "",
    description: "",
  });

  const updateData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <View style={styles.container}>
      <ImagePicker
        storeTo="images1"
        onChange={(i) => updateData("images", i)}
        value={formData.images}
      />
      <TextField
        style={styles.input}
        name="Title"
        placeholder="Title"
        onChange={(t) => updateData("title", t)}
        value={formData.title}
      />
      <TextField
        style={styles.input}
        name="Price"
        placeholder="Price"
        onChange={(p) => updateData("price", p)}
        value={formData.price}
      />
      <TextField
        style={[styles.input, styles.category]}
        name="Category"
        placeholder="Category"
        onChange={(c) => updateData("category", c)}
        value={formData.category}
      />
      <TextField
        style={styles.input}
        name="Description"
        placeholder="Description"
        onChange={(d) => updateData("description", d)}
        value={formData.description}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 20,
    borderRadius: 50,
    overflow: "hidden",
  },
});
