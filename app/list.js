import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebaseConfig";
import { useTodos } from "../query/hooks/queries";
import { useTodoMutations } from "../query/hooks/mutations";

const List = () => {
  const { todos, isLoading, isError } = useTodos();
  const { addMutation } = useTodoMutations();
  console.log(todos);

  const adder = () => {
    addMutation.mutate({ title: "Hello", isDone: true });
  };

  return (
    <View>
      <Button onPress={() => adder()} title={"dsd"}>
        List
      </Button>
      {todos?.map((el) => (
        <Text key={el.id}>{JSON.stringify(el)}</Text>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
