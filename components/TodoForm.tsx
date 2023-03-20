import { Button, View, TextInput } from "react-native";
import { Formik } from "formik";
import { useTodoMutations } from "../hooks/mutations";

export const TodoForm = () => {
  const { addMutation } = useTodoMutations();

  type handler = () => void;

  return (
    <View>
      <Formik
        initialValues={{ title: "", isDone: "" }}
        onSubmit={(values) => {
          console.log(values);
          addMutation.mutate({ title: values.title, isDone: values.isDone });
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <TextInput
              value={values.title}
              onChangeText={handleChange("title")}
            />
            <TextInput
              value={values.isDone}
              onChangeText={handleChange("isDone")}
            />
            {/* <Field type="text" name="isDone" /> */}
            <Button onPress={handleSubmit as handler} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};
