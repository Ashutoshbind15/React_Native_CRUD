import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useState } from "react";
import { FIREBASE_AUTH } from "../firebaseConfig";

type utype = {
  email: string;
  uid: string;
};

interface propTypes {
  children: React.ReactNode;
}

export const UserCtx = createContext<utype | null>({
  email: "",
  uid: "",
});

const UserProvider = (props: propTypes) => {
  const [user, setUser] = useState<utype | null>(null);

  onAuthStateChanged(FIREBASE_AUTH, (currentUser) => {
    if (currentUser) {
      setUser({ email: currentUser.email as string, uid: currentUser.uid });
    } else {
      setUser(null);
    }
  });

  return <UserCtx.Provider value={user}>{props.children}</UserCtx.Provider>;
};

export default UserProvider;

// const styles = StyleSheet.create({});
