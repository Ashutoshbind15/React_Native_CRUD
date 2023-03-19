import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";

export const useTodos = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const todoRef = collection(FIRESTORE_DB, "todos");

      let t = [];
      //   const sub = onSnapshot(todoRef, {
      //     next: (snapshot) => {
      //       snapshot.docs.forEach((doc) => {
      //         t.push({
      //           id: doc.id,
      //           ...doc.data(),
      //         });
      //       });
      //     },
      //   });

      const qs = await getDocs(collection(FIRESTORE_DB, "todos"));
      //   console.log(qs);
      qs.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        t.push({ ...doc.data(), id: doc.id });
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
