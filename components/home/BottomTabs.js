import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png",
  },
  {
    name: "Profile",
    active:
      "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
    inactive:
      "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
  },
];

export default function BottomTabs() {
  const [activeTab, setActivetab] = useState("Home");

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "black",
        zIndex: 999,
      }}
    >
      <Divider width={1} orientation="vertical" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 10,
          height: 50,
          alignItems: "center",
        }}
      >
        {bottomTabIcons.map((icon, index) => (
          <TouchableOpacity key={index} onPress={() => setActivetab(icon.name)}>
            <Image
              source={
                activeTab === icon.name
                  ? { uri: icon.active }
                  : { uri: icon.inactive }
              }
              style={[
                styles.communStyle,
                icon.name === "Profile" ? styles.profilePic : null,
                icon.name === "Profile" && activeTab === "Profile"
                  ? styles.selectedprofilePic
                  : null,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  communStyle: {
    width: 30,
    height: 30,
  },
  profilePic: {
    borderRadius: 15,
  },
  selectedprofilePic: {
    borderWidth: 3,
    borderColor: "white",
  },
});
