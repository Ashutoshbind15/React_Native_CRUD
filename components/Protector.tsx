import React from "react";
import { useUser } from "../hooks/utils";
import { Redirect } from "expo-router";

interface protectorProps {
  children: React.ReactNode;
}

const Protector = (props: protectorProps) => {
  const user = useUser();

  if (user) {
    return <>{props.children}</>;
  } else return <Redirect href={"/signin"} />;
};

export default Protector;
