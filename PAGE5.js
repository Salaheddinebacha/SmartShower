import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const PAGE5 = ({
  onPressAccueil,
  onPressHistory,
  onPressAbout,
  resetTransition,
}) => {
  const [isaccueilOpen, setIsaccueilOpen] = useState(false);
  const [ishistoryOpen, setIshistoryOpen] = useState(false);
  const [isleakOpen, setIsleakOpen] = useState(false);
  const [isaboutOpen, setIsaboutOpen] = useState(false);

  const toggleaccueil = () => {
    setIsaccueilOpen(!isaccueilOpen);
    onPressAccueil();
  };

  const togglehistory = () => {
    setIshistoryOpen(!ishistoryOpen);
    onPressHistory();
  };

  const toggleleak = () => {
    setIsleakOpen(!isleakOpen);
  };

  const toggleabout = () => {
    setIsaboutOpen(!isaboutOpen);
    onPressAbout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.partiegauche}>
        <Image source={require("./../IMAGES/x.jpg")} style={styles.logo} />
        <View style={styles.menuItem}>
          <TouchableOpacity
            style={styles.accueilButton}
            onPress={() => {
              toggleaccueil();
              onPressAccueil();
            }}
          >
            <Image
              source={require("./../IMAGES/HOMEE.png")}
              style={styles.accueilIcon}
            />
            <Text style={styles.accueilText}>ACCUEIL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.x}>
          <TouchableOpacity
            style={styles.historyButton}
            onPress={togglehistory}
          >
            <Image
              source={require("./../IMAGES/history.png")}
              style={styles.historyIcon}
            />
            <Text style={styles.historytext}>HISTORY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.y}>
          <TouchableOpacity style={styles.leakButton} onPress={toggleleak}>
            <Image
              source={require("./../IMAGES/leak-detector.png")}
              style={styles.leakIcon}
            />
          </TouchableOpacity>
          <Text style={styles.leak}>LEAK</Text>
        </View>

        <View style={styles.aboutus1}>
          <TouchableOpacity style={styles.aboutButton} onPress={toggleabout}>
            <Image
              source={require("./../IMAGES/ABOUT.png")}
              style={styles.info}
            />
            <Text style={styles.aboutus}>ABOUT US</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>COPYRIGHT ©2023-2024</Text>
        </View>
      </View>

      <View style={[styles.partiedroite]}>
        <Text style={styles.title}>SHOWER</Text>
        <Text style={styles.title1}>MANAGER</Text>
      </View>
    </View>
  );
};
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    height: windowHeight + 30,
    flexDirection: "row",
  },
  partiedroite: {
    flex: 2,
    backgroundColor: "#D9D9D9",
  },
  partiegauche: {
    backgroundColor: "#1C3048",
    width: 170,
    flex: 2.5,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 30,
    marginLeft: 16,
  },
  title: {
    color: "#1C3048",
    fontSize: 25,
    marginTop: 30,
    fontWeight: "bold",
    marginLeft: 30,
  },
  title1: {
    color: "#1C3048",
    fontSize: 25,
    marginTop: 2,
    fontWeight: "bold",
    marginLeft: 21,
  },
  accueilIcon: {
    height: 28,
    width: 28,
    marginTop: 30,
    marginLeft: 10,
  },
  accueilText: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 58,
    fontSize: 20,
    bottom: 26,
  },
  historyIcon: {
    height: 30,
    width: 30,
    marginTop: 5,
    marginLeft: 8,
  },
  historytext: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 59,
    fontSize: 20,
    bottom: 32,
    marginTop: 2,
  },
  leakIcon: {
    height: 37,
    width: 35,
    marginTop: 8,
    marginLeft: 8,
  },
  leak: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: 60,
    bottom: 39,
  },
  info: {
    height: 30,
    width: 30,
    marginTop: 7,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
  },
  aboutus: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 58,
    fontSize: 20,
    bottom: 33,
    marginTop: 2,
  },
  aboutus1: {
    bottom: 4,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 14,
    paddingLeft: 5,
  },
  footerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default PAGE5;
