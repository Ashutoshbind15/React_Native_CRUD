import { Link, Stack, useRouter } from "expo-router";
import { View, Text } from "react-native";

const Details = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Details page</Text>
      <Text onPress={() => router.back()}>Go back!</Text>
    </View>
  );
};

export default Details;
