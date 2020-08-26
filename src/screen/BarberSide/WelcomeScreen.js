import React from 'react';
import {
  ImageBackground,
  Button,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import colors from '../../styles/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require('../../assets/images/image_10.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/icons/barbery-W.png')}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.red}]}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.red}]}
          onPress={() => props.navigation.navigate('Register')}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  button: {
    backgroundColor: colors.red,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  logo: {
    width: 300,
    height: 300,
  },
  logoContainer: {
    position: 'absolute',
    top: 5,
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default WelcomeScreen;
