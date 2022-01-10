import React from "react";
import { View, Text } from "react-native";
import AddNewPost from "../componenets/NewPosts/AddNewPost";

const NewPost = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#17202A", flex: 1 }}>
      <AddNewPost navigation={navigation} />
    </View>
  );
};

export default NewPost;
