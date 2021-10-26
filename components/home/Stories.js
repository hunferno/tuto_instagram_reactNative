import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { USERS } from "../../datas/Users";

export default function Stories() {
  return (
    <View>
      <ScrollView
        style={styles.container}
        horizontal
        showsVerticalScrollIndicator={false}
      >
        {USERS &&
          USERS.map((user, index) => (
            <TouchableOpacity key={index} style={styles.storiesContainer}>
              <Image
                style={styles.storieImg}
                source={{
                  uri: user.img,
                }}
              />
              <Text style={styles.storieText}>{user.name}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom:20
  },

  storiesContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  storieImg: {
    width: 60,
    height: 60,
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
