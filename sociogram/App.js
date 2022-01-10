import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import Constants from "expo-constants";
import NewPost from "./Screens/NewPost";
import Navigation from "./Navigation";
import AuthNavigation from "./AuthNavigation";
const statusBarHeight = Constants.statusBarHeight;
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#17202A"
        barStyle="light-content"
        translucent={true}
      />
      <AuthNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: statusBarHeight,
  },
});
