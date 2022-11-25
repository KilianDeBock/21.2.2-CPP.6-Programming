import { FlatList, Text, TextInput, View } from "react-native";
import { useState } from "react";

const list = ["Jef", "Kilian", "Brent", "Stef", "Dion", "Gilles"];

export const Exercise01 = () => {
  const [search, setSearch] = useState("");

  const filterList = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // <View style={styles.container}>
    <View>
      <TextInput placeholder="Search" value={search} onChangeText={setSearch} />
      <FlatList
        data={filterList}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
