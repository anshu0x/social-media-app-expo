import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign, Feather } from "@expo/vector-icons";
const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="h-full bg-[#2D4BA1]">
        <View className="h-1/2 justify-center items-center">
          <ImageBackground
            className="flex-1 items-center justify-center w-full"
            source={require("../assets/images/authstars.png")}
          >
            <Image source={require("../assets/images/startup-bee.png")} />
          </ImageBackground>
        </View>
        <View className="h-1/2 rounded-[54px] px-10 bg-[#2D4BA1] items-start justify-end">
          <Text className="text-3xl font-bold text-white leading-10">
            Let’s Get Started{" "}
            <Ionicons
              onPress={() => navigation.navigate("SignUp")}
              name="arrow-forward-circle"
              size={34}
              color="#FDBD28"
            />
          </Text>
          <View className="gap-2 my-10 w-full items-center justify-center">
            <Pressable
              onPress={() => navigation.navigate("SignUp")}
              className="w-full py-3 flex-row items-center justify-evenly px-10 rounded-xl bg-[#4366CB]"
            >
              <AntDesign name="google" size={16} color="white" />
              <Text className=" text-white font-bold py-2">
                Continue with Google
              </Text>
            </Pressable>
            <Pressable className="w-full py-3 flex-row items-center justify-evenly px-10 rounded-xl bg-[#4366CB]">
              <Feather name="facebook" size={16} color="white" />
              <Text className=" text-white font-bold py-2">
                Continue with Facebook
              </Text>
            </Pressable>
            <Pressable className="w-full py-3 flex-row items-center justify-evenly px-10 rounded-xl bg-[#4366CB]">
            <Text>
            <Feather name="instagram" size={16} color="white" />
            </Text>
              <Text className=" text-white font-bold py-2 ">
                Continue with Instagram
              </Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("PhoneVerification")}
              className="w-full py-3 flex-row items-center justify-evenly px-10 rounded-xl bg-[#4366CB]"
            >
              <Feather name="phone" size={16} color="white" />
              <Text className=" text-white font-bold py-2 ">
                Continue with Phone number
              </Text>
            </Pressable>
            <Pressable className="w-full py-3 flex-row items-center justify-evenly px-10 rounded-xl bg-[#4366CB]">
              <Feather name="user-check" size={16} color="white" />
              <Text className="text-white font-bold py-2">
                Existing user? Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
