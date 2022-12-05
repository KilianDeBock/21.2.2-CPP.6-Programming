import { useState } from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { login } from "../../../core/modules/auth/api";
import isVoid from "../../../core/utils/isVoid";
import Button from "../../Components/Design/Button/Button";
import TextField from "../../Components/Design/Form/TextField";
import Logo from "../../Components/Design/Logo/Logo";
import Title from "../../Components/Design/Text/Title";
import { Variables } from "../../style";
import { Navigation } from "../../../core/navigation";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlePress = async () => {
    if (!isVoid(data.email) && !isVoid(data.password)) {
      // try login
      try {
        const response = await login({ ...data });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.heading}>
          <Pressable onPress={() => navigation.navigate(Navigation.AUTH)}>
            <Logo style={styles.icon} />
          </Pressable>
          <Title style={styles.title}>Sell what you dont need</Title>
        </View>
        <View style={styles.backgroundLogin}>
          <TextField
            label="Email"
            name="email"
            value={data.email}
            placeholder="john@doe.com"
            autoComplete="email"
            keyboardType="email-address"
            onChangeText={(text) => handleChange("email", text)}
          />
          <TextField
            label="Password"
            name="password"
            value={data.password}
            secureTextEntry={true}
            onChangeText={(text) => handleChange("password", text)}
          />
          <Button
            style={[styles.button, styles.buttonLogin]}
            color={styles.buttonLogin.backgroundColor}
            onPress={handlePress}
          >
            Login
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: Variables.sizes.xxxxl,
    height: Variables.sizes.xxxxl,
  },
  container: {
    flex: 1,
  },
  background: {
    width: null,
    height: null,
    flex: 1,
  },
  heading: {
    flex: 1,
    alignItems: "center",
    marginTop: Variables.sizes.xxxxl,
  },
  title: {
    marginTop: Variables.sizes.medium,
    marginBottom: Variables.sizes.xl,
    fontSize: Variables.textSizes.medium,
  },
  button: {
    height: Variables.sizes.xxxxl,
    width: "100%",
    justifyContent: "center",
    fontSize: Variables.textSizes.xxxl,
  },
  buttonLogin: {
    backgroundColor: Variables.colors.red,
  },
  backgroundLogin: {
    paddingTop: Variables.sizes.medium,
    backgroundColor: Variables.colors.blue,
  },
});
