import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Containers/Splash';
import OnBoarding from '../Containers/OnBoarding';
import InitialScreen from '../Containers/CreatingAccount/InitialScreen';
import EnterEmailPhoneScreen from '../Containers/CreatingAccount/EnterEmailPhoneScreen';
import Verification from '../Containers/CreatingAccount/Verification';
import ThreeThingsScreen from '../Containers/CreatingAccount/ThreeThingsScreen';
import RecoveryPhaseScreen from '../Containers/CreatingAccount/RecoveryPhaseScreen';
import ConfirmBackupPhaseScreen from '../Containers/CreatingAccount/ConfirmBackupPhaseScreen';
import PinCodeScreen from '../Containers/PinScreen';
import NameScreen from '../Containers/NameScreen';
import AcceptTerm from '../Containers/AcceptTerm';
import CreateNewPasscode from '../Containers/CreateNewPassCode';
import CreateNewPassword from '../Containers/CreateNewPassword';
import EnterPassword from '../Containers/EnterPassword';
import ConfirmPassCode from '../Containers/ConfirmPasscode';
import TypeWordPhrase from "../Containers/ImportAccount/TypeWordPhrase";
import CreatePasscode from "../Containers/ImportAccount/CreatePasscode";
import AddUsername from "../Containers/AddUsername";
import WalletScreen from "../Containers/Wallet/WalletScreen";

import SendScreen from "../Containers/Wallet/SendScreen";
import TabNav from "./TabNav";
import Home from "../Containers/Home";
import Settings from '../Containers/Settings';
import ChangePassword from '../Containers/ChangePassword/ChangePassword'
import ChangePassCode from '../Containers/ChangePassword/ChangePasscode';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <NavigationContainer theme={{colors: {background: '#181A20'}}}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterEmailPhoneScreen"
          component={EnterEmailPhoneScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ThreeThingsScreen"
          component={ThreeThingsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecoveryPhaseScreen"
          component={RecoveryPhaseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmBackupPhaseScreen"
          component={ConfirmBackupPhaseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PinScreen"
          component={PinCodeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NameScreen"
          component={NameScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="AddUsername"
          component={AddUsername}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AcceptTerm"
          component={AcceptTerm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateNewPasscode"
          component={CreateNewPasscode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateNewPassword"
          component={CreateNewPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterPassword"
          component={EnterPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
            name="WalletScreen"
            component={WalletScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmPassCode"
          component={ConfirmPassCode}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="CreatePasscode"
          component={CreatePasscode}
          options={{headerShown: false}}
        />
        <Stack.Screen
            name="SendScreen"
            component={SendScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="TabNav"
            component={TabNav}
            options={{headerShown: false}}
        />
         <Stack.Screen
            name="Setting"
            component={Settings}
            options={{headerShown: false}}
        />
         <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{headerShown: false}}
        />
         <Stack.Screen
            name="ChangePassCode"
            component={ChangePassCode}
            options={{headerShown: false}}
        />
        <Stack.Screen name="TypeWordPhrase" component={TypeWordPhrase} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
