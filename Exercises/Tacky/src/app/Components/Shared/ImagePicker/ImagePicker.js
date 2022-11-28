import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { launchCameraAsync } from "expo-image-picker";

export const ImagePicker = ({ onChange = (images) => {}, value = [] }) => {
  const [images, setImages] = useState(value);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    onChange(images);
  }, [images]);

  const data = [...images, require("../../../../../assets/camera.jpeg")];

  const addImage = async () => {
    // Check permissions
    await requestPermission();
    if (!permission.granted) return;

    // Open camera
    let result = await launchCameraAsync();
    if (result.canceled) return;

    // Add image to state
    const file = result.assets[0];
    setImages([...images, file]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const renderItem = ({ item, index }) => {
    return (
      <Pressable
        style={styles.image}
        onPress={
          item === data[data.length - 1] ? addImage : () => removeImage(index)
        }
      >
        <Image style={styles.image} source={item} />
      </Pressable>
    );
  };
  return (
    <View>
      <FlatList
        style={styles.images}
        data={data}
        renderItem={renderItem}
        numColumns={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    marginBottom: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginRight: 10,
  },
});
