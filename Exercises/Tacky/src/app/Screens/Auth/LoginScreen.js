import { ImageBackground, StyleSheet, View } from "react-native";
import { Variables } from "../../style";
import Logo from "../../Components/Design/Logo/Logo";
import Title from "../../Components/Design/Text/Title";
import Button from "../../Components/Design/Button/Button";
import { useAuth } from "../../Contexts/Auth.context";
import TextField from "../../Components/Design/Form/TextField";
import { useState } from "react";

export const LoginScreen = () => {
  const auth = useAuth();

  const [username, setUsername] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.heading}>
          <Logo style={styles.icon} />
          <Title style={styles.title}>Sell what you dont need</Title>
        </View>
        <View>
          <TextField onChangeText={setUsername} value={username} />
          <Button
            style={[styles.button, styles.buttonLogin]}
            color={styles.buttonLogin.backgroundColor}
            onPress={() => auth?.login(username)}
          >
            Login
          </Button>
          <Button
            style={[styles.button, styles.buttonRegister]}
            color={styles.buttonRegister.backgroundColor}
            onPress={() => auth?.login(username)}
          >
            Register
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
  buttonRegister: {
    backgroundColor: Variables.colors.blue,
  },
});
