import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const PAGE4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
            <Image
              source={require("./../IMAGES/menu.png")}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>SHOWER MANAGER</Text>
        </View>
        <Image source={require("./../IMAGES/mark.png")} style={styles.mark} />
        <View style={styles.connect}>
          <Text style={styles.connectText}>CONNECTED</Text>
        </View>
        <View style={[styles.bloc]}>
          <Text style={[styles.utilisation]}>LAST TIME USED </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>COPYRIGHT © 2023-2024</Text>
      </View>
    </View>
  );
};
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: windowHeight + 30,
    backgroundColor: "#F0F0F0",
    justifyContent: "space-between",
  },
  content: {
    marginTop: 30,
  },
  header: {
    backgroundColor: "#1C3048",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 60,
  },
  menuIcon: {
    position: "absolute",
    left: -165,
    top: 2,
    width: 32,
    height: 32,
    tintColor: "white",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginLeft: 76,
    paddingBottom: 6,
  },
  connect: {
    marginTop: 80,
    width: 250,
    height: 100,
    borderRadius: 60,
    backgroundColor: "#1C3048",
    justifyContent: "center",
    alignItems: "center",
    margin: 55,
    borderColor: "#73B5E5",
    borderWidth: 6,
  },
  mark: {
    width: 40,
    height: 40,
    marginLeft: 280,
    top: 100,
    borderColor: "#73B5E5",
    borderWidth: 3,
    borderRadius: 20,
  },
  connectText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  bloc: {
    backgroundColor: "#1C3048",
    borderColor: "#73B5E5",
    borderWidth: 5,
    height: 300,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
  },
  utilisation: {
    marginTop: 5,
    textAlign: "center",
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    padding: 5,
    paddingBottom: 10,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  footerText: {
    color: "#1C3048",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default PAGE4;
