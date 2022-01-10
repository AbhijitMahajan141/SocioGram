import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { firebase } from "../../firebase";

const handleSignout = async () => {
  try {
    await firebase.auth().signOut();
    console.log("Signedout successfully");
  } catch (error) {
    console.log(error);
  }
};

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Image style={styles.logo} source={require("../../assets/logo.jpeg")} />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image
            style={styles.icon}
            source={require("../../assets/addicon.png")}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/heart.png")}
          />
        </TouchableOpacity> */}
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={require("../../assets/chat2.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "red",
    position: "absolute",
    left: 35,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontSize: 11,
    fontWeight: "600",
  },
});

export default Header;
