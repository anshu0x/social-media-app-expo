import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, useWindowDimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const HomeScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const handleNext = () => {
    navigation.navigate('NextScreen');
  };

  return (
    <Swiper style={styles.wrapper(height)} showsButtons={false} loop={false} dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
      <View style={styles.slide}>
        <Text style={styles.text}>Step 1</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Step 2</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Step 3</Text>
        <Text style={styles.button} onPress={handleNext}>Get Started</Text>
      </View>
    </Swiper>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: (height) => ({
    height: "100%", // Set height to 70% of screen height
    justifyContent: 'center',
    alignItems: 'flex-start', // Align dots to the left
  }),
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdbd28',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#007bff',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 3,
    marginBottom: 3,
  },
});