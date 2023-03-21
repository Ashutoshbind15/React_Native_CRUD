import { Link, Stack } from "expo-router";
import { View, Text, Button } from "react-native";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { useUser } from "../hooks/utils";

const Home = () => {
  const user = useUser();

  const handler = async () => {
    try {
      await signOut(FIREBASE_AUTH);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Home!</Text>
      <Text>{user?.email}</Text>
      <Stack.Screen options={{ title: "Overview" }} />
      <Link href="/details">Go to Details</Link>
      <Link href="/list">Go to List</Link>
      <Link href="/signin">SignIn</Link>
      <Link href="/protected">Admin Screen</Link>

      {user ? <Button onPress={handler} title={"Signout"} /> : null}
    </View>
  );
};

export default Home;
