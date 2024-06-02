import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const PAGE3 = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <Image
              source={require("./../IMAGES/menu.png")}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>SHOWER MANAGER</Text>
        </View>
        <View style={styles.connect}>
          <Text style={styles.connectText}>NOT FOUND</Text>
        </View>
        <Text style={[styles.messageerror]}>
          Pairing unsuccessful. Ensure the device is ready to pair.
        </Text>
        <View style={styles.reconnexion}>
          <TouchableOpacity
            style={[
              styles.reconnectButton,
              isPressed && styles.connectButtonPressed,
            ]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Text
              style={[
                styles.connectText1,
                isPressed && styles.connectTextPressed,
              ]}
            >
              RECONNECT YOUR DEVICE
            </Text>
          </TouchableOpacity>
          <Image
            source={require("./../IMAGES/bluetooth.png")}
            style={styles.bluetooth_connectivity}
          />
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
    marginTop: 120,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#1C3048",
    justifyContent: "center",
    alignItems: "center",
    margin: 100,
    borderColor: "red",
    borderWidth: 6,
  },
  connectText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  connectText1: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    top: 19,
  },
  messageerror: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -40,
  },
  reconnexion: {
    backgroundColor: "#1C3048",
    width: "70%",
    margin: 50,
    borderRadius: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bluetooth_connectivity: {
    width: 40,
    height: 40,
    bottom: -50,
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

export default PAGE3;
