import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

export default function Post({ post }) {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider
        style={{ backgroundColor: "white" }}
        width={1}
        orientation="vertical"
      />
      <PostHead post={post} />
      <PostImage post={post} />
    </View>
  );
}

function PostHead({ post }) {
  return (
    <View style={styles.postHeadcontainer}>
      <View style={styles.postHeadleft}>
        <Image style={styles.postHeadImg} source={{ uri: post.imageUrl }} />
        <Text style={{ color: "white" }}>{post.user}</Text>
      </View>
      <View>
        <Text style={{ color: "white", fontWeight: "700" }}>...</Text>
      </View>
    </View>
  );
}

const PostImage = ({ post }) => {
  return (
    <View style={styles.postImageContainer}>
      <Image style={styles.postImage} source={{ uri: post.profile_picture }} />
    </View>
  );
};

const styles = StyleSheet.create({
  postHeadcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
  },
  postHeadleft: {
    flexDirection: "row",
    alignItems: "center",
  },
  postHeadImg: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    borderColor: "orange",
    borderRadius: 15,
    borderWidth: 1.6,
    marginHorizontal: 5,
  },

  postImageContainer: {
    height: 400,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
});
