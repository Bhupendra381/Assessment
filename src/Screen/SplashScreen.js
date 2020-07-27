import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
export default class SplashScreen extends Component {
  constructor(props) {
    super(props)
    setTimeout(() => {
      this.props.navigation.navigate("LoginScreen")
    }, 2000);
  }
  render() {
    return (
      <ImageBackground source={require('../Assest/background.png')}
        style={{ height: '100%', width: '100%' }} >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator
            color="#000000"
            size="large"
            style={styles.activity}
          />

        </View>

      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  activity: {
    alignItems: 'center',
    height: 80,
  },
});
