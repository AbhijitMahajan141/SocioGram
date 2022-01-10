import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { users } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13, marginHorizontal: 10, borderRadius: 20 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: "white" }}>
              {story.user.length > 6
                ? story.user.slice(0, 8).toLocaleLowerCase() + "..."
                : story.user.toLocaleLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

let styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop: 5,
    borderWidth: 3,
    borderColor: "#40E0D0",
  },
  container: {},
});

export default Stories;
