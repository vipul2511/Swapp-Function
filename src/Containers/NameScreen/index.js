import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomInput from '../../Components/CustomInput';
import TransparentButton from '../../Components/TransparentButton';
// import {ArrowLeft} from '../../Assets/Images/ArrowLeft.svg';
import ValidationPopup from '../../Components/ValidationPopup';
import Button from '../../Components/CreatingAccount/Button';
import BackArrow from '../../Components/CreatingAccount/BackArrow';

const NameScreen = ({ navigation }) => {
  const [showText, setShowText] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [showValidation, setShowValidation] = useState(false);
  const InputValueHandler = e => {
    setFirstName(e);
  };
  const sendName = () => {
    if (firstName != '') {
      if (secondName != '') {
        navigation.navigate('AcceptTerm')
      } else {
        setShowValidation(true)
        setShowText('Please enter your last name');
      }
    } else {
      setShowValidation(true)
      setShowText('Please enter your first name');
    }

  }
  const updateshow = () => {
    setShowValidation(false)
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#181A20' }}>
      <BackArrow />
      <ScrollView>
        <View style={{ marginLeft: wp('5%') }}>
          <View
            style={{
              marginTop: hp('2%'),
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: wp('7%'),
                fontFamily: 'Poppins-SemiBold',
              }}>
              Add your full name
            </Text>
          </View>
          <View style={{ marginTop: hp('2%') }}>
            <Text
              style={{
                fontSize: wp('4%'),
                color: '#5E6272',
                fontFamily: 'Inter-Regular',
                letterSpacing: 0.4,
              }}>
              Enter your full name
            </Text>
          </View>
          <View style={{ width: wp('90%') }}>
            <CustomInput
              onchange={InputValueHandler}
              headertextstyle={{ marginTop: hp('4%') }}
              value={firstName}
              header={'FIRST NAME'}
            />
            <CustomInput
              headertextstyle={{ marginTop: hp('4%') }}
              onchange={text => {
                setSecondName(text);
              }}
              value={secondName}
              header={'LAST NAME'}
            />
          </View>
          <View style={{ marginTop: wp('10%') }} />
        </View>
      </ScrollView>
      <Button
        handleFunction={sendName}
        btnText={'Next'}
      />
      {showValidation == true && (
        <ValidationPopup title={showText} Show={true} showback={updateshow} />
      )}
    </SafeAreaView>
  );
};

export default NameScreen;
