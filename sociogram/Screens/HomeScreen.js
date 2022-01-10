import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import BottomTabs, { bottomTabIcons } from "../componenets/Home/BottomTabs";
import Header from "../componenets/Home/Header";
import Post from "../componenets/Home/Post";
import Stories from "../componenets/Home/Stories";
import { posts } from "../data/posts";
import { db } from "../firebase";
const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collectionGroup("posts")
      //.orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
        );
      });
  }, []);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#17202A",
    flex: 1,
  },
});

export default HomeScreen;
