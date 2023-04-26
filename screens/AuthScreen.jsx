import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { Pressable } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
const AuthScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="h-screen bg-[#5984FF]">
        <View className="h-2/3 justify-center items-center">
          <ImageBackground
            className="flex-1 items-center justify-center w-full"
            source={require("../assets/images/authstars.png")}
          >
            <View className="gap-2 items-center z-10">
              <Text className="text-[44px] font-bold text-white ">Swipe..</Text>
              <Text className="text-[44px] font-bold text-white ">
                Network..
              </Text>
              <Text className="text-[44px] font-bold text-white ">
                Collaborate..
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View className="h-full rounded-[54px] bg-[#2D4BA1] p-10 items-center">
          <Text className="text-3xl font-bold text-white my-2 leading-10">
            Welcome to <Text className="text-[#FDBD28]">Vodcast</Text>
          </Text>
          <View className="gap-4 my-10 w-full px-10 items-center justify-center">
            <Pressable
              onPress={() => navigation.navigate("SignUp")}
              className="w-full py-3 items-center justify-center rounded-xl bg-[#4366CB]"
            >
              <Text className=" text-white font-bold py-2 px-2 ">
                <AntDesign name="adduser" size={18} color="white" /> Sign up now
              </Text>
            </Pressable>
            <Pressable className="w-full py-3 items-center justify-center rounded-xl bg-[#4366CB]">
              <Text className=" text-white font-bold py-2 px-2 ">
                <Feather name="user-check" size={18} color="white" /> Existing
                user? Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;