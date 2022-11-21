import { Text, View } from "react-native";
import { useEffect, useState } from "react";

export const Exercise02 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const array = [
    "So you are a developer, huh?",
    "Kinda weird people, not?",
    "I mean, you are not like the rest of us, right?",
  ];

  const add = () => {
    const newIndex = currentIndex + 1 > array.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      add();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <View>
      <Text>{array[currentIndex]}</Text>
    </View>
  );
};
