import { Image } from "react-native";

const Logo = ({ style }) => {
  return (
    <Image
      style={style}
      source={require("../../../../../assets/logo-red.png")}
    />
  );
};

export default Logo;
