import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SignupForm from "../componenets/signupscreen/SignupForm";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.jpeg")}
          style={{ width: 200, height: 100 }}
        />
      </View>
      <SignupForm navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17202A",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});
export default SignupScreen;
