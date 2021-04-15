import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';

export default function Login({ navigation }) {

  return (
    <>
      <View style={styles.container}>https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/trashcan_delete_remove-512.png
      <View>
        <Image style={styles.user} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/user-23/512/User_Administrator_4.png' }} />
      </View>
      <View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{ uri: "https://img.icons8.com/ios-filled/64/000000/secured-letter--v1.png"}} />
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent' />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{ uri: "https://img.icons8.com/metro/50/000000/lock-2.png" }} />
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent' />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}  onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer}>
          <Text>You don't have an account?
          <Text  onPress={() => navigation.navigate('Register')}> Register</Text>
          </Text>
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
  user: {
    marginBottom: 40,
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 20,
    padding: 8,
    height: 50
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginLeft: 15,
    left: 8,
    justifyContent: 'center'
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
});
