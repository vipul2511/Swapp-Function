import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../Components/Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import style from './Styles';
import Emails from './emails';
import Phone from './phonenumber';
const Tab = createMaterialTopTabNavigator();
const Settings=({navigation})=>{
    return(
        <SafeAreaView style={style.container}>
          <Header setting hide navigation={navigation} onSave={()=>{}} save={true} />
            <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
          indicatorStyle: {backgroundColor: '#246BFD',height: '100%',borderRadius:20},
          indicatorContainerStyle: style.indicatorstyle,
          labelStyle: style.label,
          style:style.tabNavigator
          
        }}>
        <Tab.Screen name="Emails" component={Emails} />
        <Tab.Screen name="Phone Numbers" component={Phone} />
      </Tab.Navigator>
        </SafeAreaView>
    )
}
export default Settings;