import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png",
    likedImageUrl: "https://img.icons8.com/ios-glyphs/90/fa314a/like.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/material-outlined/60/ffffff/speech-bubble--v1.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/paper-plane.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon--v1.png",
  },
];

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
      <View style={{ marginTop: 10, marginHorizontal: 15 }}>
        <PostFooter />
        <Likes likes={post.likes} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
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

const PostFooter = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        width: "32%",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity>
        <Image
          style={styles.postFooterImg}
          source={{ uri: postFooterIcons[0].imageUrl }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.postFooterImg}
          source={{ uri: postFooterIcons[1].imageUrl }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.postFooterImg}
          source={{ uri: postFooterIcons[2].imageUrl }}
        />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Image
          style={styles.postFooterImg}
          source={{ uri: postFooterIcons[3].imageUrl }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const Likes = ({ likes }) => (
  <Text style={{ color: "white", fontWeight: 600, fontStyle: "italic" }}>
    {likes.toLocaleString()} likes
  </Text>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: 600, fontStyle: "italic" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray", fontStyle: "italic" }}>
        View{post.comments.length > 1 ? " all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment) => (
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: 600, fontStyle: "italic" }}>
          {comment.user}
        </Text>
        <Text> {comment.comment}</Text>
      </Text>
    ))}
  </>
);

const styles = StyleSheet.create({
  //POST HEAD STYLE
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
  //POST IMAGE STYLE
  postImageContainer: {
    height: 400,
  },
  postImage: {
    height: "100%",
    resizeMode: "cover",
  },

  //POST FOOTER STYLE
  postFooterImg: {
    width: 30,
    height: 30,
  },
});
