import React, { useState } from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const AcceptTerms = ({ visible, onClose, showLocation }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <BlurView
          intensity={100}
          tint="dark"
          blurRadius={120}
          style={[
            StyleSheet.absoluteFill,
            {
              justifyContent: "center",
              alignItems: "center",
              padding: 50,
            },
          ]}
          overlayColor={"rgba(0, 0, 255, .6)"}
        >
          <View style={[styles.modal]}>
            <Pressable
              onPress={() => {
                setChecked(true);
                onClose();
                showLocation();
              }}
              style={[styles.section]}
            >
              <MaterialCommunityIcons
                name={
                  isChecked
                    ? "checkbox-multiple-marked"
                    : "checkbox-multiple-blank-outline"
                }
                size={34}
                color="#FDBD28"
                style={{
                  margin: 10,
                }}
              />
              <View>
                <Text style={{ color: "#FFFFFF" }} className="font-semibold">
                  I Agree to the Terms and Conditions of Vodcast
                </Text>
              </View>
            </Pressable>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    borderRadius: 10,
    backgroundColor: "#4366CB",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    padding: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
});

export default AcceptTerms;
