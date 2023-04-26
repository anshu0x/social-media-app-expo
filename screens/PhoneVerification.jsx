import { View, Text, SafeAreaView, KeyboardAvoidingView } from "react-native";
import React, { useRef, useState } from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import { StyleSheet } from "react-native";
import { Platform, Keyboard } from "react-native";
import * as Location from "expo-location";
import AcceptTerms from "../components/AcceptTerms";
import ModalWithButton from "../components/ModalWithButton";

const PhoneVerification = ({ navigation }) => {
  const [termsVisible, setTermsVisible] = useState(false);
  const [locationVisible, setlocationVisible] = useState(false);

  const handleModalClose = () => {
    setTermsVisible(false);
  };
  const handlelocationVisible = () => {
    setlocationVisible(false);
  };
  const showLocationModal = () => {
    setlocationVisible(true);
  };
  const otpRef = useRef(null);
  const handleOtpChange = (otp) => {
    console.log(otp, "otp");
    if (otp.length === 4) {
      Keyboard.dismiss();
    }
  };

  const getLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Location permission not granted");
      } else {
        console.log("Location permission granted");
        const { coords } = await Location.getCurrentPositionAsync({});
        console.log("Location:", coords);
        handlelocationVisible();
        navigation.navigate("Profile");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="h-screen bg-[#5984FF]">
          <View className="mt-10 justify-center items-center">
            <Image
              resizeMode="contain"
              style={{ zIndex: 1 }}
              className="w-screen"
              source={require("../assets/images/phoneverification.png")}
            />
          </View>
          <View className="h-full gap-2 rounded-[54px] bg-[#2D4BA1] p-10 items-start">
            <Ionicons
              onPress={() => navigation.navigate("SignUp")}
              name="arrow-back-circle"
              size={34}
              color="#FDBD28" 
            />
            <Text className="text-3xl font-bold text-white leading-10">
              Verify It’s You
            </Text>
            <Text className="text-sm font-bold text-white leading-10">
              Enter OTP here
            </Text>
            <OTPTextView
              style={styles.otpInput}
              pinCount={4}
              ref={otpRef}
              autoFocusOnLoad
              handleTextChange={handleOtpChange}
              codeInputFieldStyle={styles.otpInputField}
              codeInputHighlightStyle={styles.otpInputHighlight}
            />
            <Text className="text-sm font-bold text-white leading-10">
              Resend OTP
            </Text>
            <Pressable
              onPress={() => setTermsVisible(!termsVisible)}
              className="w-full py-3 items-center justify-center rounded-xl bg-[#4366CB]"
            >
              <Text className=" text-[#F9F9F9] font-bold  py-2 px-4 ">
                Submit OTP
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
      <AcceptTerms
        visible={termsVisible}
        onClose={handleModalClose}
        showLocation={showLocationModal}
      />
      <ModalWithButton
        visible={locationVisible}
        onClose={handlelocationVisible}
        allow={getLocationPermission}
        cancel={getLocationPermission}
      />
    </SafeAreaView>
  );
};

export default PhoneVerification;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  otpInput: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    color: "#000",
    width: 80,
    height: 70,
    fontSize: 24,
    borderRadius: 10,
    marginHorizontal: 5, // Add margin between OTP inputs
    textAlign: "center",
  },
  otpInputField: {
    height: 60,
    flex: 1, // Set flex to 1 for OTP input field
    width: 80,
    borderWidth: 0,
    borderBottomWidth: 1,
    fontSize: 24,
    color: "#000",
    textAlign: "center",
  },
  otpInputHighlight: {
    borderColor: "#000",
  },
});
