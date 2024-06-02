import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";
import { NavigationContainer } from "@react-navigation/native";
import PAGE1 from "./PAGES/PAGE1";
import PAGE2 from "./PAGES/PAGE2";
import PAGE5 from "./PAGES/PAGE5";
import PAGE6 from "./PAGES/PAGE6";
import PAGE8 from "./PAGES/PAGE8";

export default function App() {
  const [currentPage, setCurrentPage] = useState(null);
  const [transitionInProgress, setTransitionInProgress] = useState(false);
  const [animateIn, setAnimateIn] = useState(true); // Activer l'animation slideInRight
  const [animationType, setAnimationType] = useState("slideInRight"); // Définir le type d'animation

  useEffect(() => {
    setTimeout(() => {
      setCurrentPage(
        <PAGE2
          onPressMenu={handleMenuPress}
          resetTransition={resetTransition}
        />
      );
      setAnimateIn(false); // Désactiver l'animation slideInRight après le démarrage initial
    }, 1000);
  }, []);

  const handleMenuPress = () => {
    if (!transitionInProgress) {
      setTransitionInProgress(true);
      setAnimateIn(false); // Désactiver l'animation
      setCurrentPage(
        <PAGE5
          onPressAccueil={handleAccueilPress}
          onPressHistory={handleHistoryPress}
          onPressAbout={handleAboutPress}
          resetTransition={resetTransition}
        />
      );
    }
  };

  const handleAccueilPress = () => {
    if (!transitionInProgress) {
      setTransitionInProgress(true);
      setCurrentPage(
        <PAGE2
          onPressMenu={handleMenuPress}
          resetTransition={resetTransition}
        />
      );
    }
  };

  const resetTransition = () => {
    setTransitionInProgress(false);
  };

  const handleHistoryPress = () => {
    if (!transitionInProgress) {
      setTransitionInProgress(true);
      setCurrentPage(
        <PAGE6
          onPressMenu={handleMenuPress}
          resetTransition={resetTransition}
        />
      );
    }
  };

  const handleAboutPress = () => {
    if (!transitionInProgress) {
      setTransitionInProgress(true);
      setAnimateIn(true); // Activer l'animation slideInDown
      setAnimationType("slideInDown"); // Définir le type d'animation
      setCurrentPage(
        <PAGE8
          onPressMenu={handleMenuPress}
          resetTransition={resetTransition}
        />
      );
    }
  };

  return (
    <NavigationContainer>
      <ScrollView>
        <View>
          <Animatable.View
            animation={animateIn ? animationType : null}
            duration={1000}
            onAnimationEnd={resetTransition}
            style={{ flex: 1 }}
          >
            {currentPage || <PAGE1 />}
          </Animatable.View>
        </View>
      </ScrollView>
    </NavigationContainer>
  );
}
