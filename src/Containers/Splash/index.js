import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import styles from './Styles';
import EncryptedStorage from 'react-native-encrypted-storage';

const SplashScreen = ({ navigation }) => {
  useEffect(
    () => {
      let timer1 = setTimeout(() => {
        EncryptedStorage.getItem('@processCompleted').then(suc => {
          if (suc && JSON.parse(suc) == true) {
            EncryptedStorage.getItem('@confirmPasscode').then(item => {
              console.log(item);
              if (item == 'confirm') {
                navigation.navigate('PinScreen')
              } else if (item == 'CreatePassword') {
                  navigation.navigate('OnBoarding')
                //navigation.navigate('EnterPassword')
                // navigation.navigate('CreateUsername')
              } else {
                navigation.navigate('OnBoarding')
              }
            })
          } else {
            navigation.navigate('OnBoarding')
          }
        });
      }, 2000);

      return () => {
        clearTimeout(timer1);
      };
    },

    []
  );
  return (
    <View style={styles.Container} >
      <StatusBar backgroundColor="#2C303A" barStyle="light-content" />
      <View style={styles.image}>
        <Image source={require('../../Assets/Images/logo-2.png')} style={[styles.logo,{resizeMode:"contain"}]} />
      </View>
    </View>
  )
}
export default SplashScreen;