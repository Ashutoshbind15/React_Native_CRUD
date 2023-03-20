import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebaseConfig";
import { Todo } from "../models/Todo";

export const useTodos = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const todoRef = collection(FIRESTORE_DB, "todos");

      let t: Todo[] = [];

      const qs = await getDocs(collection(FIRESTORE_DB, "todos"));
      qs.forEach((doc) => {
        t.push({
          ...(doc.data() as { title: string; isDone: string }),
          id: doc.id,
        });
      });

      return t;
    },
  });

  return {
    todos: data,
    isError,
    isLoading,
    error,
  };
};
