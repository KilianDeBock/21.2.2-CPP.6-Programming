const Colors = {
  primary: "#FF0000",
  secondary: "#00FF00",
  tertiary: "#0000FF",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#808080",
};

export const Variables = {
  colors: {
    ...Colors,
    text: Colors.primary,
    error: Colors.gray,
  },
  textSizes: {
    small: 12,
    medium: 16,
    large: 20,
  },
  sizes: {
    medium: 18,
    small: 16,
    xs: 12,
  },
};
