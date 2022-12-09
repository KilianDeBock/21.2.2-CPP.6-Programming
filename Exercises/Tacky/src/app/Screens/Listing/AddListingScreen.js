import { Button, StyleSheet, View } from "react-native";
import TextField from "../../Components/Design/Form/TextField";
import React from "react";
import { ImagePicker } from "../../Components/Shared/ImagePicker/ImagePicker";
import { useMutation, useQueryClient } from "react-query";
import { createListing } from "../../../core/modules/listing/api";
import isVoid from "../../../core/utils/isVoid";

export const AddListingScreen = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation(createListing, {
    onSuccess: () => {
      queryClient.invalidateQueries(["listings"]);
      navigation.goBack();
    },
  });

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

  const handlePress = async () => {
    if (!isVoid(formData.title)) {
      const res = { title: formData.title, price: parseInt(formData.price) };
      console.log(res);
      mutate(res);
    }
  };

  return (
    <View style={styles.container}>
      <ImagePicker
        storeTo="images1"
        onChange={(i) => updateData("images", i)}
        value={formData.images}
        disabled={isLoading}
      />
      <TextField
        style={styles.input}
        name="Title"
        placeholder="Title"
        onChangeText={(t) => updateData("title", t)}
        value={formData.title}
        disabled={isLoading}
      />
      <TextField
        style={styles.input}
        name="Price"
        placeholder="Price"
        onChangeText={(p) => updateData("price", p)}
        value={formData.price}
        disabled={isLoading}
        keyboardType="number-pad"
      />
      <TextField
        style={[styles.input, styles.category]}
        name="Category"
        placeholder="Category"
        onChangeText={(c) => updateData("category", c)}
        value={formData.category}
        disabled={isLoading}
      />
      <TextField
        style={styles.input}
        name="Description"
        placeholder="Description"
        onChangeText={(d) => updateData("description", d)}
        value={formData.description}
        disabled={isLoading}
      />
      <Button
        title="Create Listing"
        onPress={handlePress}
        disabled={isLoading}
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
