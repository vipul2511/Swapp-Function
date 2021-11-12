import React from 'react';
import {Image, SafeAreaView, StatusBar, StyleSheet, Text,TouchableOpacity, View} from "react-native";
import styles from './Styles';
import BackArrow from "../../../Components/CreatingAccount/BackArrow";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const OptionBlock = (props) => {
    const { img, title, text,onPress } = props;

    return (
        <TouchableOpacity style={styles.optionBlock} onPress={onPress}>
            <Image
                style={styles.optionIcon}
                source={img}
            />
            <View>
                <Text style={styles.optionTitle}>{title}</Text>
                <Text style={styles.optionText}>{text}</Text>
            </View>
            <Image
                style={styles.nextIcon}
                source={require('../../../Assets/Images/arrowRight.png')}
            />
        </TouchableOpacity>
    )
}

const InitialScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#181A20" barStyle="light-content" />
          
            <BackArrow  />
     
            <View style={styles.body}>
                <Text style={styles.title}>Create your Swapp</Text>
                <Image
                    style={styles.bodyImage}
                    source={require('../../../Assets/Images/createAccountInitial.png')}
                />
            </View>

            <View style={styles.footer}>
                <Text style={styles.text}>Please select option to send link</Text>
                <OptionBlock
                    onPress={()=>navigation.navigate('EnterEmailPhoneScreen', {isPhone: false})}
                    img= {require('../../../Assets/Images/message.png')}
                    title={'Register via email'}
                    text={'If you have email linked to account'}
                />

                <OptionBlock
                 onPress={()=>navigation.navigate('EnterEmailPhoneScreen', {isPhone: true})}
                    img={require('../../../Assets/Images/phone.png')}
                    title={'Register via SMS'}
                    text={'If you have email linked to account'}
                />
            </View>
        </SafeAreaView>
    )
}

export default InitialScreen;
