import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LoginForm from "../componenets/loginscreen/LoginForm";

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/logo.jpeg")}
        style={{ width: 200, height: 100 }}
      />
    </View>
    <LoginForm navigation={navigation} />
  </View>
);

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

export default LoginScreen;
