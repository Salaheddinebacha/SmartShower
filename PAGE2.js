import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";

const PAGE2 = ({ onPressMenu }) => {
  const [transitionInProgress, setTransitionInProgress] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMenuPress = () => {
    if (!transitionInProgress) {
      setTransitionInProgress(true);
      onPressMenu();
    }
  };

  const handleConnectDevice = () => {
    setIsLoading(true);

    // Appeler la méthode "copier" avant d'effectuer la connexion
    copier();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // Définition de la méthode "copier"
  const copier = () => {
    // Logique pour copier quelque chose
    console.log("Méthode copier appelée !");
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
        <View style={[styles.connectButton]}>
          <Text style={styles.connectText}>
            Please Connect to the Wifi network X
          </Text>
        </View>
        <Image
          source={require("./../IMAGES/wifi.png")}
          style={styles.bluetooth_connectivity}
        />
      </View>
      {/* Section Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>COPYRIGHT © 2023-2024</Text>
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: windowHeight + 25,
    backgroundColor: "#F0F0F0",
    justifyContent: "space-between",
  },
  content: {
    marginTop: 40,
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
  connectButton: {
    width: 260,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#1C3048",
    justifyContent: "center",
    alignItems: "center",
    margin: 100,
    borderColor: "#73B5E5",
    borderWidth: 6,
    left: -45,
  },
  connectText: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
  },
  bluetooth_connectivity: {
    width: 80,
    height: 80,
    marginLeft: 145,
    marginTop: -40,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 10,
  },
  footerText: {
    color: "#1C3048",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default PAGE2;
