import { Button, StyleSheet, Text, View } from "react-native";
import { useTodos } from "../hooks/queries";
import { useTodoMutations } from "../hooks/mutations";
import { TodoForm } from "../components/TodoForm";

const List = () => {
  const { todos, isLoading, isError } = useTodos();
  const { addMutation } = useTodoMutations();
  console.log(todos);
  type handler = () => void;

  const adder: handler = () => {
    addMutation.mutate({ title: "Hello", isDone: "true" });
  };

  return (
    <View>
      <TodoForm />
      <Button onPress={() => adder()} title={"dsd"} />
      {todos?.map((el) => (
        <Text key={el.id}>{JSON.stringify(el)}</Text>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
