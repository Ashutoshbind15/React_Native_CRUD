import { Stack } from "expo-router";
import QueryProvider from "../utils/queryProvider";

const Layout = () => {
  return (
    <QueryProvider>
      <Stack>
        <Stack.Screen name="details" options={{}} />
      </Stack>
    </QueryProvider>
  );
};

export default Layout;
