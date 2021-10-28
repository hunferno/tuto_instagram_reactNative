import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function AddNewPost() {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderNewPost />
    </View>
  );
}

const HeaderNewPost = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <TouchableOpacity>
      <Image
        style={{ width: 30, height: 30 }}
        source={{ uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png" }}
      />
    </TouchableOpacity>
    <View style={{ marginRight: 30 }}>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
        New Post
      </Text>
    </View>
    <Text></Text>
  </View>
);
