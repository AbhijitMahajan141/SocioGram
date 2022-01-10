import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FormicPostUploader from "./FormicPostUploader";

const AddNewPost = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <View style={styles.conatiner}>
        <FormicPostUploader navigation={navigation} />
      </View>
    </View>
  );
};

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
        }}
        style={{ width: 38, height: 38 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  conatiner: {
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: "#2C3E50",
    borderRadius: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 25,
  },
});

export default AddNewPost;
