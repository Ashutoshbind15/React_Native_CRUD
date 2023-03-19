import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDoc, collection } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";

export const useTodoMutations = () => {
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: async (body) => {
      const doc = await addDoc(collection(FIRESTORE_DB, "todos"), {
        title: body.title,
        isDone: body.isDone,
      });
      console.log(doc);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    addMutation,
  };
};
