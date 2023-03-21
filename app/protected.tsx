import { StyleSheet, Text } from "react-native";
import React from "react";
import Protector from "../components/Protector";

const AdminScreen = () => {
  return (
    <Protector>
      <Text>Protected Route</Text>
    </Protector>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({});
