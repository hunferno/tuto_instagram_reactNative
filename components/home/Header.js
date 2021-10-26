import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../../assets/Instagram-Logo.png")}
            // source={require("../assets/header-logo.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconsBlock}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unredbadge}>
            <Text style={styles.unredbadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },

  iconsBlock: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 8,
    width: 25,
    height: 25,
    resizeMode: "contain",
    // color: "white",
  },
  unredbadge: {
    position: "absolute",
    left: 15,
    top: -5,
    backgroundColor: "red",
    width: 25,
    height: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    zIndex: 999,
  },
  unredbadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
