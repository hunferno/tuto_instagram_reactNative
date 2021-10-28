import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import AddNewPost from "../components/addNewPost/AddNewPost";
import FormikPostUpload from "../components/addNewPost/FormikPostUpload";

export default function NewPost() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <AddNewPost />
      <FormikPostUpload />
    </SafeAreaView>
  );
}
