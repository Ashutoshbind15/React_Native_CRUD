import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebaseConfig";
import { useTodos } from "../query/hooks/queries";
import { useTodoMutations } from "../query/hooks/mutations";

const List = () => {
  const [data, setData] = useState();

  // useEffect(() => {
  //   const todoRef = collection(FIRESTORE_DB, "todos");

  //   const sub = onSnapshot(todoRef, {
  //     next: (snapshot) => {
  //       const t = [];

  //       snapshot.docs.forEach((doc) => {
  //         t.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         });
  //       });

  //       setData(t);
  //     },
  //   });

  //   //data but not realtime
  //   // const fetcher = async () => {
  //   //   const t = [];
  //   //   const qs = await getDocs(collection(FIRESTORE_DB, "todos"));
  //   //   qs.forEach((el) => {
  //   //     t.push({ ...el.data(), id: el.id });
  //   //   });
  //   //   setData(t);
  //   // };

  //   // fetcher();

  //   return () => sub();
  // }, []);

  const { todos, isLoading, isError } = useTodos();
  const { addMutation } = useTodoMutations();
  console.log(todos);

  const adder = () => {
    addMutation.mutate({ title: "Hle", isDone: true });
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
