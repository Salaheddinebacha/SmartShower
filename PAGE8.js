import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const PAGE8 = ({ onPressMenu }) => {
  const handleMenuPress = () => {
    onPressMenu();
  };
  return (
    <View style={styles.container}>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
          <Image
            source={require("./../IMAGES/menu.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.Title}>
          <Image
            source={require("./../IMAGES/ABOUT.png")}
            style={styles.aboutIcon}
          />
          <Text> </Text>
          About Us
        </Text>
        <View style={styles.part}>
          <Image source={require("./../IMAGES/1.jpg")} style={styles.image} />
          <Text style={styles.Text}>
            Welcome to Shower Manager{"\n"}The smart app that turns your shower
            routine into a connected and eco-friendly experience
          </Text>
        </View>
        <View style={styles.part}>
          <Image
            source={require("./../IMAGES/DOUCHE2.jpeg")}
            style={styles.image}
          />
          <Text style={styles.Text}>
            Our mission is to reinvent how you engage with your daily shower by
            providing valuable insights and encouraging a more mindful use of
            water.
          </Text>
        </View>
        <View style={styles.part}>
          <Image source={require("./../IMAGES/2.jpg")} style={styles.image} />
          <Text style={styles.Text}>
            At Shower Manager, we believe in the power of technology to create
            positive change. Our vision is to provide you with a smart solution
            that enhances your shower experience while contributing to the
            preservation of our precious resource {"\n"}WATER
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C3048",
    minHeight: windowHeight + 25,
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 38,
  },
  part: {
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 350,
    borderRadius: 40,
    marginTop: 30,
  },
  Text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
  aboutIcon: {
    height: 21,
    width: 21,
  },
});

export default PAGE8;
