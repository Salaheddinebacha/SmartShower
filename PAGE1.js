import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  center,
  Dimensions,
} from "react-native";

const PAGE1 = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./../IMAGES/x.jpg")} style={styles.image} />
      <Text style={styles.logoText}>SHOWER MANAGER</Text>
    </View>
  );
};
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C3048",
    height: windowHeight + 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: center,
    marginBottom: 50,
  },
  image: {
    width: 220,
    height: 220,
    alignItems: center,
    marginLeft: 5,
    marginBottom: 20,
  },
});

export default PAGE1;
