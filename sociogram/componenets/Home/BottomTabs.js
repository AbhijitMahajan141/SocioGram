import React, { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

export const bottomTabIcons = [
  {
    name: "Home",
    active:
      "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Home-House--512.png",
    inActive:
      "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Home-House--512.png",
  },
  {
    name: "Search",
    active:
      "https://cdn3.iconfinder.com/data/icons/remixicon-system/24/search-fill-512.png",
    inActive:
      "https://cdn4.iconfinder.com/data/icons/feather/24/search-512.png",
  },
  {
    name: "Shop",
    active:
      "https://cdn3.iconfinder.com/data/icons/remixicon-finance/24/shopping-bag-fill-512.png",
    inActive:
      "https://cdn3.iconfinder.com/data/icons/remixicon-finance/24/shopping-bag-line-512.png",
  },
  {
    name: "Profile",
    active:
      "https://image.shutterstock.com/image-vector/flat-cartoon-hipster-character-vector-600w-544679476.jpg",
    inActive:
      "https://image.shutterstock.com/image-vector/flat-cartoon-hipster-character-vector-600w-544679476.jpg",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{
          uri: activeTab === icon.name ? icon.active : icon.inActive,
        }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: ".5%",
    zIndex: 999,
    //backgroundColor: "#17202A",
    backgroundColor: "#fff",
    borderRadius: 30,
    height: 60,
    marginRight: 50,
    marginLeft: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderColor: "white",
    borderWidth: activeTab === "Profile" ? 2 : 0,
  }),
});

export default BottomTabs;
