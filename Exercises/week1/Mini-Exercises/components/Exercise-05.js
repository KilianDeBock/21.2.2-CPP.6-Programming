import { FlatList, Text, TextInput, View } from "react-native";
import { useState } from "react";

export const Exercise05 = () => {
  const [text, setText] = useState("");

  const list = text.split(";");

  return (
    <View>
      <TextInput placeholder="Type here" onChangeText={setText} />
      <FlatList
        data={list}
        renderItem={({ item }) => <Text>{item}</Text>}
      ></FlatList>
    </View>
  );
};
