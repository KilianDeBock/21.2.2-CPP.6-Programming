import { Image, Pressable, StyleSheet, View } from "react-native";
import Text from "../Text/Text";
import { Variables } from "../../../style";

export const ListItem = ({
  type,
  title,
  image,
  subtitle,
  onPress = () => {},
}) => {
  return (
    <Pressable style={[styles.container, styles[type]]} onPress={onPress}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    backgroundColor: Variables.colors.white,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  main: {
    marginBottom: 35,
  },
  menu: {
    marginBottom: 2,
  },
  side: {
    marginTop: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontFamily: Variables.fonts.bold,
  },
  subtitle: {
    color: Variables.colors.lightText,
    fontSize: Variables.textSizes.small,
  },
});
