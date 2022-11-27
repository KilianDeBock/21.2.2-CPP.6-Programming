import { Image, Pressable, StyleSheet, View } from "react-native";
import Text from "../Text/Text";
import { Variables } from "../../../style";

export const Card = ({
  title = "unknown",
  price = "0",
  image,
  onPress = () => {},
}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Variables.colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontFamily: Variables.fonts.bold,
    fontSize: Variables.textSizes.large,
  },
  price: {
    color: Variables.colors.blue,
  },
});
