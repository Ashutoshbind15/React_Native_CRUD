import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Home!</Text>
      <Stack.Screen options={{ title: "Overview" }} />
      <Link href="/details">Go to Details</Link>
      <Link href="/list">Go to List</Link>
    </View>
  );
};

export default Home;
