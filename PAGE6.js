import React, { useState, useEffect } from "react";
import { DataTable } from "react-native-paper";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";

const PAGE6 = ({ onPressMenu }) => {
  const [showersData, setShowersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.1.99:3000/douches");
        setShowersData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        setError(
          "Erreur lors de la récupération des données. Veuillez vérifier la console pour plus de détails."
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMenuPress = () => {
    onPressMenu(5);
  };

  return (
    <ScrollView style={styles.container}>
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
      <DataTable>
        <DataTable.Header style={[styles.header]}>
          <DataTable.Title style={[styles.premiereligne, { flex: 1 }]}>
            <Text style={[styles.textpremiereligne]}>DATE & TIME</Text>
          </DataTable.Title>
          <DataTable.Title style={[styles.premiereligne, { flex: 1 }]}>
            <Text style={[styles.textpremiereligne]}>DURATION</Text>
          </DataTable.Title>
        </DataTable.Header>

        {loading ? (
          <DataTable.Row style={styles.row}>
            <DataTable.Cell style={styles.cell}>
              <Text style={[styles.textautresligne]}>Loading...</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.cell}>
              <Text style={[styles.textautreslignemin]}>Loading...</Text>
            </DataTable.Cell>
          </DataTable.Row>
        ) : error ? (
          <DataTable.Row style={styles.row}>
            <DataTable.Cell style={styles.cell} colSpan={2}>
              <Text style={[styles.errorText]}>{error}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        ) : (
          showersData.map((shower, index) => (
            <DataTable.Row key={index} style={styles.row}>
              <DataTable.Cell style={styles.cell}>
                <Text style={[styles.textautresligne]}>{shower.date}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                <Text style={[styles.textautreslignemin]}>
                  {shower.duration} MIN
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))
        )}
      </DataTable>
      <View style={styles.footer}>
        <Text style={styles.footerText}>COPYRIGHT © 2023-2024</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C3048",
  },
  historyIcon: {
    height: 21,
    width: 21,
  },
  header: {
    borderColor: "#1C3048",
  },
  menuButton: {
    position: "absolute",
    left: 10,
    top: 45,
    zIndex: 1,
  },
  firsttitle: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 20,
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
  premiereligne: {
    height: 50,
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#72A0C1",
    borderWidth: 1,
    borderBottomColor: "black",
  },
  row: {
    flex: 1,
    justifyContent: "center",
    borderColor: "#1C3048",
  },
  cell: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "#D9D9D9",
  },
  textpremiereligne: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  textautresligne: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  textautreslignemin: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
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
    top: 550,
  },
  errorText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default PAGE6;
