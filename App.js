import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";
import PhoneVerification from "./screens/PhoneVerification";
import PopupScreen from "./screens/PopupScreen";
import SignUp from "./screens/SignUp";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";
const Stack = createStackNavigator();
// const fetchFonts = async () => {
//   await Font.loadAsync({
//     "PlusJakartaSans-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
//     "PlusJakartaSans-BoldItalic": require("./assets/fonts/PlusJakartaSans-BoldItalic.ttf"),
//     "PlusJakartaSans-ExtraBold": require("./assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
//     "PlusJakartaSans-ExtraBoldItalic": require("./assets/fonts/PlusJakartaSans-ExtraBoldItalic.ttf"),
//     "PlusJakartaSans-ExtraLight": require("./assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
//     "PlusJakartaSans-ExtraLightItalic": require("./assets/fonts/PlusJakartaSans-ExtraLightItalic.ttf"),
//     "PlusJakartaSans-Italic-VariableFont_wght": require("./assets/fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf"),
//     "PlusJakartaSans-Italic": require("./assets/fonts/PlusJakartaSans-Italic.ttf"),
//     "PlusJakartaSans-Light": require("./assets/fonts/PlusJakartaSans-Light.ttf"),
//     "PlusJakartaSans-LightItalic": require("./assets/fonts/PlusJakartaSans-LightItalic.ttf"),
//     "PlusJakartaSans-Medium": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
//     "PlusJakartaSans-MediumItalic": require("./assets/fonts/PlusJakartaSans-MediumItalic.ttf"),
//     "PlusJakartaSans-Regular": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
//     "PlusJakartaSans-SemiBold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
//     "PlusJakartaSans-SemiBoldItalic": require("./assets/fonts/PlusJakartaSans-SemiBoldItalic.ttf"),
//     "PlusJakartaSans-VariableFont_wght": require("./assets/fonts/PlusJakartaSans-VariableFont_wght.ttf"),
//   });
// };
const App = () => {
  // useLayoutEffect(() => {
  //   fetchFonts();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PhoneVerification"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PopupScreen" component={PopupScreen} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
