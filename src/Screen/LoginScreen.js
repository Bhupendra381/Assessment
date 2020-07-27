import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const LoginScreen = props => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');



  const checkLogin = async () => {
    try {
      const uemail = await AsyncStorage.getItem('UserEmail')
      const upassword = await AsyncStorage.getItem('UserPassword')
      if (userEmail == uemail && userPassword == upassword) {
        props.navigation.navigate('DrawerNavigationRoutes')
      }
      else {
        alert('Incorrect username or password!')
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.mainBody}>
      <ImageBackground source={require('../Assest/background2.png')} 
            style={{height:'100%', width:'100%'}} >
      <View style={{ marginTop: 100 }}>
        <View style={{ alignItems: 'center' }}>
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={userEmail => setUserEmail(userEmail)}
            placeholder="Enter Email" 
            placeholderTextColor="#0c0c0e"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={userPassword => setUserPassword(userPassword)}
            placeholder="Enter Password"
            placeholderTextColor="#0c0c0e"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={checkLogin}>
          <Text style={styles.buttonTextStyle}>LOGIN</Text>
        </TouchableOpacity>
        <Text
          style={styles.registerTextStyle}
          onPress={() => props.navigation.navigate('RegisterScreen')}>
          New Here ? Register
            </Text>
      </View>
      </ImageBackground>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#6495ed',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#0d0d0d',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#0d0d0d',
  },
  registerTextStyle: {
    color: '#0d0d0d',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});