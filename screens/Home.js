import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";
import Stories from "../components/Stories";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <Post />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
