import { Button, View, TextInput } from "react-native";
import { Formik } from "formik";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { useState } from "react";

type handler = () => void;
export const SigninForm = () => {
  const [signup, setSignup] = useState<boolean>(true);

  return (
    <View>
      {signup ? (
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            console.log(values);
            try {
              const ut = await createUserWithEmailAndPassword(
                FIREBASE_AUTH,
                values.email,
                values.password
              );

              console.log(ut.user);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View>
              <TextInput
                value={values.email}
                onChangeText={handleChange("email")}
              />
              <TextInput
                value={values.password}
                onChangeText={handleChange("password")}
                secureTextEntry={true}
              />
              {/* <Field type="text" name="isDone" /> */}
              <Button onPress={handleSubmit as handler} title="SignUp" />
            </View>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            console.log(values);
            try {
              const ut = await signInWithEmailAndPassword(
                FIREBASE_AUTH,
                values.email,
                values.password
              );

              console.log(ut.user);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View>
              <TextInput
                value={values.email}
                onChangeText={handleChange("email")}
              />
              <TextInput
                value={values.password}
                onChangeText={handleChange("password")}
                secureTextEntry={true}
              />
              {/* <Field type="text" name="isDone" /> */}
              <Button onPress={handleSubmit as handler} title="SignIn" />
            </View>
          )}
        </Formik>
      )}
      <Button
        onPress={() => setSignup((prev) => !prev)}
        title={`${
          signup ? `Already have an account? Log in` : `Create a new Account`
        }`}
      ></Button>
    </View>
  );
};
