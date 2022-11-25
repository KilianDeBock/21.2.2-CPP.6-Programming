import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";

export const Exercise02 = () => {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(1000);

  const array = [
    "So you are a developer, huh?",
    "Kinda weird people, not?",
    "I mean, you are not like the rest of us, right?",
  ];

  const add = () => setIndex(index + 1 > array.length - 1 ? 0 : index + 1);

  useEffect(() => {
    const timeout = setTimeout(add, time);
    return () => clearTimeout(timeout);
  }, [index, time]);

  return (
    <View>
      <Button
        title="-"
        disabled={time === 0}
        onPress={() => setTime(Math.max(0, time - 1000))}
      />
      <Text>{array[index]}</Text>
      <Button title="+" onPress={() => setTime(time + 1000)} />
    </View>
  );
};
