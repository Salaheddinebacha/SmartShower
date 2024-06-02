import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function PAGE7() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
          <Image
            source={require("./../IMAGES/menu.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={[styles.Title]}>
          <Image
            source={require("./../IMAGES/history.png")}
            style={styles.historyIcon}
          />
          <Text> </Text>History
        </Text>
      </View>

      <View style={[styles.container_message]}>
        <Text style={[styles.msg]}>NO DATA YET</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>COPYRIGHT © 2023-2024</Text>
      </View>
    </View>
  );
}
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C3048",
    height: windowHeight + 30,
  },

  historyIcon: {
    height: 21,
    width: 21,
  },
  menuButton: {
    position: "absolute",
    left: 10,
    top: 45,
    zIndex: 1,
  },
  menuIcon: {
    width: 28,
    height: 28,
    tintColor: "white",
  },
  Title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    marginTop: 40,
  },
  container_message: {
    alignItems: "center",
    width: 220,
    height: 70,
    marginTop: 240,
    marginLeft: 70,
    borderRadius: 60,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
  },
  msg: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 23,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  footerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    top: 300,
  },
});
