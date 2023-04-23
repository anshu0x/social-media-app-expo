import { View, Text, SafeAreaView, KeyboardAvoidingView } from "react-native";
import React, { useRef, useState } from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { TextInput } from "react-native";
const PhoneVerification = ({ navigation }) => {
  const otpRef = useRef(null);
  const handleOtpChange = (otp) => {
    if (otp.length === 6) {
      Keyboard.dismiss();
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
          <View className="h-full rounded-[54px] bg-[#2D4BA1] p-10 items-start">
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
              ref={otpRef}
              style={styles.otpInput}
              pinCount={4}
              autoFocusOnLoad
              onCodeChanged={handleOtpChange}
              codeInputFieldStyle={styles.otpInputField}
              codeInputHighlightStyle={styles.otpInputHighlight}
            />

            <Text className="text-sm font-bold text-white leading-10">
              Resend OTP
            </Text>
            <Pressable className="w-full py-3 items-center justify-center rounded-xl bg-[#4366CB]">
              <Text className=" text-[#F9F9F9] font-bold  py-2 px-4 ">
                Submit OTP
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
  },
  otpInputField: {
    height: 60,
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
