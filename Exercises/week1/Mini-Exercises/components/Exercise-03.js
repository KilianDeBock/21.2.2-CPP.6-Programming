import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";

export const Exercise03 = () => {
  const [amount, setAmount] = useState(5);
  const [errors, setErrors] = useState("None");

  const [min, max] = [0, 10];

  useEffect(() => {
    if (amount <= 0) {
      setErrors("You cannot go below 0.");
    } else if (amount >= 10) {
      setErrors("Too much! But go on...");
    } else {
      setErrors("None");
    }
  }, [amount]);

  return (
    <View>
      <Button title="Add" onPress={() => setAmount(amount + 1)} />
      <Text>Current: {amount}</Text>
      <Text>Errors: {errors}</Text>
      <Button
        title="Remove"
        onPress={() => setAmount(Math.max(0, amount - 1))}
      />
    </View>
  );
};
