import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';

export default function StartScreen({ navigation }) {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.Text}>Say hello to your new app</Text>
      <View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}  onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}  onPress={() => navigation.navigate('Register')}>
          <Text style={styles.RegisterText}>SignUp</Text>
        </TouchableHighlight>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  Text: {
    fontSize: 15,
    padding: 12,
    color: "#00b5ec"
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  RegisterText: {
    color: 'white',
  }
});
