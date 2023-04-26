import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableHighlight,
} from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

const AcceptTerms = ({ visible, onClose, allow }) => {
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
              padding: 20,
            },
          ]}
          overlayColor={"rgba(0, 0, 255, .6)"}
        >
          <View style={[styles.modal]}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                gap: 20,
              }}
            >
              <Ionicons name="location" size={38} color="#FDBD28" />
              <Text
                style={{ color: "#FFFFFF", fontSize: 16 , fontWeight:"bold" }}
              >
                Vodcast wants to know your location
              </Text>
            </View>
            <View
              style={{
                gap: 12,
                flexDirection: "row",
                width: "100%",
                marginTop: 12,
              }}
            >
              <TouchableHighlight onPress={allow} style={styles.allow}>
                <Text style={styles.buttonText}>Allow</Text>
              </TouchableHighlight>
              <TouchableHighlight  style={styles.cancel}>
                <Text style={styles.buttonText}>Don’t allow</Text>
              </TouchableHighlight>
            </View>
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
    height: 150,
    padding: 20,
    margin: 35,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  allow: {
    backgroundColor: "#5680F6",
    padding: 8,
    borderRadius: 4,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  cancel: {
    backgroundColor: "#FDBD28",
    padding: 8,
    borderRadius: 4,
    width: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AcceptTerms;
