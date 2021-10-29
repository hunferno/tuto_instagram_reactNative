import React from "react";
// import { View, Text, SafeAreaView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddNewPost from "../components/addNewPost/AddNewPost";
import FormikPostUpload from "../components/addNewPost/FormikPostUpload";

export default function NewPost({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <AddNewPost navigation={navigation} />
      <FormikPostUpload navigation={navigation} />
    </SafeAreaView>
  );
}
