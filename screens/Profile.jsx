import { View, Text, SafeAreaView } from "react-native";
import React from "react";
const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginTop: 110,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text >Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
