import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const users = [
  {
    name: "Barkoum",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Farid",
    img: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    name: "Mélissa",
    img: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Houssem",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Julie",
    img: "https://randomuser.me/api/portraits/women/99.jpg",
  },
  {
    name: "Julie",
    img: "https://randomuser.me/api/portraits/women/99.jpg",
  },
  {
    name: "Julie",
    img: "https://randomuser.me/api/portraits/women/99.jpg",
  },
  {
    name: "Julie",
    img: "https://randomuser.me/api/portraits/women/99.jpg",
  },
  {
    name: "Julie",
    img: "https://randomuser.me/api/portraits/women/99.jpg",
  },
  {
    name: "Julie",
    img: "https://randomuser.me/api/portraits/women/99.jpg",
  },
];

export default function Stories() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={true}
      //   horizontal={true}
    >
      {users &&
        users.map((user, index) => (
          <>
            <TouchableOpacity key={index} style={styles.storiesContainer}>
              <Image
                style={styles.storieImg}
                source={{
                  uri: user.img,
                }}
              />
              <Text style={styles.storieText}>{user.name}</Text>
            </TouchableOpacity>
          </>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: "row",
    overflow: "hidden",
  },

  storiesContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    // backgroundColor:"white"
  },
  storieImg: {
    width: 55,
    height: 55,
    borderRadius: 30,
    resizeMode: "contain",
    borderColor: "orange",
    borderWidth: 2,
  },
  storieText: {
    color: "white",
    fontSize: 12,
  },
});
