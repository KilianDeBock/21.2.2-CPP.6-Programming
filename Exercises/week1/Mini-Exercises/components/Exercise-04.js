import { Text, TextInput, View } from "react-native";
import { useState } from "react";

export const Exercise04 = () => {
  const [text, setText] = useState("");

  const maxTextLength = 160;

  const checkTextLength = (t) => {
    if (t.length <= maxTextLength) setText(t);
  };

  return (
    <View>
      <TextInput
        placeholder="Hello, type here!"
        onChangeText={checkTextLength}
        value={text}
        multiline={true}
        maxTextLength={maxTextLength}
      />
      <Text>
        {text.length}/{maxTextLength}
      </Text>
    </View>
  );
};
