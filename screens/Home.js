import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POSTS } from "../datas/Posts";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post) => (
          <Post post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
