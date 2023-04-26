import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          marginTop: 100,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 29 }}>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
