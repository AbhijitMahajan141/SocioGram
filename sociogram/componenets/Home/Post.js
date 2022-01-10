import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { db, firebase } from "../../firebase";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1029/1029234.png",
    //imageUrl: "https://cdn-icons-png.flaticon.com/512/1182/1182772.png",
    likeImageUrl: "https://cdn-icons-png.flaticon.com/512/1029/1029132.png",
    //likeImageUrl: "https://cdn-icons-png.flaticon.com/512/1182/1182721.png",
  },
  {
    name: "Comment",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2190/2190510.png",
  },
  {
    name: "Share",

    imageUrl:
      "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/344/external-share-social-media-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
  },
  {
    name: "Save",
    // imageUrl:
    //   "https://cdn-icons.flaticon.com/png/512/5667/premium/5667029.png?token=exp=1641037378~hmac=185fae0bdbea8a65bf6c2da7bd58ae8a",
    imageUrl:
      "https://img.icons8.com/external-bearicons-flat-bearicons/344/external-Save-social-media-bearicons-flat-bearicons.png",
  },
];

const Post = ({ post }) => {
  const handleLike = (post) => {
    const currentLikeStatus = !post.likes_by_user.includes(
      firebase.auth().currentUser.email
    );
    db.collection("users")
      .doc(post.owner_email)
      .collection("posts")
      .doc(post.id)
      .update({
        likes_by_user: currentLikeStatus
          ? firebase.firestore.FieldValue.arrayUnion(
              firebase.auth().currentUser.email
            )
          : firebase.firestore.FieldValue.arrayRemove(
              firebase.auth().currentUser.email
            ),
      })
      .then(() => {
        console.log("like successfully added");
      })
      .catch((error) => {
        console.error("Error Updating likes" + error);
      });
  };
  return (
    <View
      style={{
        marginBottom: 30,
        marginHorizontal: 10,
        borderRadius: 30,
        backgroundColor: "#2C3E50",
        paddingBottom: 10,
      }}
    >
      {/* <Divider
        width={1}
        orientation="vertical"
        style={{ width: "80%", alignSelf: "center", marginLeft: 40 }}
      /> */}
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} handleLike={handleLike} />
      <Likes post={post} />
      <Caption post={post} />
      <CommentSection post={post} />
      <Comments post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "500" }}>
        {post.user}
      </Text>
    </View>
    {/* <Text style={{ color: "white", fontWeight: "900", fontSize: 20 }}>...</Text> */}
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageurl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ handleLike, post }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={{ flexDirection: "row" }}>
      {/* <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} /> */}
      <TouchableOpacity onPress={() => handleLike(post)}>
        <Image
          style={styles.footerIcon}
          source={{
            uri: post.likes_by_user.includes(firebase.auth().currentUser.email)
              ? postFooterIcons[0].likeImageUrl
              : postFooterIcons[0].imageUrl,
          }}
        />
      </TouchableOpacity>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4, marginLeft: 10 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes_by_user.length.toLocaleString("en")} Likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginVertical: 5, marginHorizontal: 10 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "bold" }}>{post.user} : </Text>
      <Text>{post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({ post }) => (
  <View style={{ marginHorizontal: 20, marginBottom: 5 }}>
    {!!post?.comments?.length && ( //if true will render part after && if false return 0, to convert 0 to false use !! double negation
      <Text style={{ color: "#2E86C1" }}>
        View {post.comments.length > 1 ? "all " : ""} {post.comments.length}
        {post.comments.length > 1 ? " comments" : " comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ marginHorizontal: 10, marginBottom: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "bold" }}>{comment.user} : </Text>
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

let styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 5,
    borderWidth: 1.6,
    borderColor: "#40E0D0",
  },
  footerIcon: {
    width: 33,
    height: 33,
    marginHorizontal: 15,
    marginTop: 8,
  },
});

export default Post;
