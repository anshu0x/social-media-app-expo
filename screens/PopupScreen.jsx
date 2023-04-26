import { View, Text, Image, StyleSheet, PanResponder } from "react-native";
import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const PopupScreenText = () => {
  return (
    <View
      style={styles.textContainer}
      className="px-10 justify-center items-start"
    >
      <Text style={styles.text}>Let’s get started with Vodcast</Text>
      <Text className="text-base font-semibold my-2 mr-6 text-white">
        A quick stop to provide you with the ultimate collaboration experience
      </Text>
    </View>
  );
};

const PopupScreen = ({ navigation }) => {
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return gestureState.dx > 10;
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 50) {
          navigation.navigate("AuthScreen");
        }
      },
    })
  ).current;

  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate("AuthScreen");
    // }, 1500);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#2C4AA0" />
      <View
        className="bg-[#2C4AA0] justify-center items-center h-screen"
        {...panResponder.panHandlers}
      >
        <Image
          resizeMode="contain"
          className="w-full"
          source={require("../assets/images/popupscreen.png")}
        />
        <PopupScreenText />
        <View className="w-full justify-center items-end">
          <Image
            resizeMode="contain"
            className="mr-20 mt-10"
            source={require("../assets/images/popupbottom.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PopupScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffff",
    lineHeight: 34,
  },
  image: {
    zIndex: 1,
    marginTop: 100,
    marginLeft: 50,
  },
});
