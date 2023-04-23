import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";
const Safe1 = () => {
  return (
    <View style={styles.safe}>
      <View style={styles.textContainer} className="w-[350px]">
        <Text style={styles.text}>Collaborate and Network without limits!</Text>
        <Text className="text-sm font-bold my-2 text-white">
          Find your partner on Vodcast
        </Text>
      </View>
    </View>
  );
};
const Safe2 = () => {
  return (
    <View style={styles.safe}>
      <View style={styles.textContainer} className="w-[350px]">
        <Text style={styles.text}>
          Easy-to-use platform for the smoothest collaboration
        </Text>
      </View>
      <Text className="text-sm font-bold my-2 text-white">
        Chat easily on Vodcast
      </Text>
    </View>
  );
};
const Safe3 = () => {
  return (
    <View style={styles.safe}>
      <View style={styles.textContainer} className="w-[350px]">
        <Text style={styles.text}>
          Link your Social Media & make your collabs unforgettable
        </Text>
        <Text className="text-sm font-bold my-2 text-white">
          Chat easily on Vodcast
        </Text>
      </View>
    </View>
  );
};
const Step1 = ({ handleNext }) => {
  return (
    <View style={styles.slide}>
      <View style={styles.imagecontainer}>
        <Image
          resizeMode="contain"
          style={{ width: 150, height: 150 }}
          source={require("../assets/images/step1-icon.png")}
        />
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../assets/images/step1.png")}
        />
      </View>
      <Safe1 />
      <Pressable
        onPress={handleNext}
        className="px-4 w-full max-w-[100px] absolute bottom-6 right-6 items-center justify-center rounded bg-[#4366CB]"
      >
        <Text className=" text-white font-bold py-2 px-4 ">Skip</Text>
      </Pressable>
    </View>
  );
};
const Step2 = () => {
  return (
    <View style={styles.slide}>
      <View style={styles.imagecontainer}>
        <Image
          resizeMode="cover"
          className="w-screen"
          source={require("../assets/images/step2.png")}
        />
      </View>
      <Safe2 />
    </View>
  );
};
const Step3 = () => {
  return (
    <View style={styles.slide}>
      <View style={styles.imagecontainer}>
        <Image source={require("../assets/images/step3-bubble.png")} />
        <Image
          resizeMode="cover"
          source={require("../assets/images/step3.png")}
          className="-mb-20"
        />
      </View>
      <Safe3 />
    </View>
  );
};
const HomeScreen = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("PopupScreen");
  };
  const handleIndexChange = (index) => {
    if (index === 2) {
      navigation.navigate("PopupScreen");
    }
  };

  return (
    <Swiper
      showsButtons={false}
      onIndexChanged={handleIndexChange}
      loop={false}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    >
      <Step1 handleNext={handleNext} />
      <Step2 />
      <Step3 />
    </Swiper>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  imagecontainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 200,
    zIndex: 1,
  },
  step2: {
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdbd28",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffff",
    lineHeight: 34,
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#007bff",
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  dot: {
    backgroundColor: "#FDBD28",
    width: 4,
    height: 4,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 3,
    marginBottom: 60,
  },
  activeDot: {
    backgroundColor: "#ffff",
    width: 6,
    height: 6,
    borderRadius: 6,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 3,
    marginBottom: 60,
  },
  safe: {
    width: "100%",
    height: "40%",
    backgroundColor: "#FDBD28",
    position: "absolute",
    bottom: 0,
    borderBottomWidth: 100,
    borderBottomColor: "transparent",
    borderLeftWidth: 350,
    borderLeftColor: "#2C4AA0",
    borderRightWidth: 190,
    borderRightColor: "#2C4AA0",
    transform: [{ rotate: "180deg" }],
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    transform: [{ rotate: "180deg" }],
    position: "absolute",
  },
  image: {
    width: 400,
    height: 350,
  },
  icon: {
    width: 100,
    height: 100,
  },
});
