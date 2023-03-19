import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryProvider = (props) => {
  const qc = new QueryClient();

  return (
    <QueryClientProvider client={qc}>{props.children}</QueryClientProvider>
  );
};

export default QueryProvider;

const styles = StyleSheet.create({});
