import { UserCtx } from "../context/UserProvider";
import { useContext } from "react";

export const useUser = () => {
  const user = useContext(UserCtx);
  return user;
};
