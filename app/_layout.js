import { Stack } from "expo-router";
import UserProvider from "../context/UserProvider";
import QueryProvider from "../utils/queryProvider";

const Layout = () => {
  return (
    <UserProvider>
      <QueryProvider>
        <Stack></Stack>
      </QueryProvider>
    </UserProvider>
  );
};

export default Layout;
