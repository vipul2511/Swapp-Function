import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
import Pinkeyboard from '../../Components/Pinkeyboard';
import PopupModal from '../../Components/PopupModal';
import { useRoute } from '@react-navigation/native';
import Button from '../../Components/CreatingAccount/Button';
import EncryptedStorage from 'react-native-encrypted-storage';
import ValidationPopup from '../../Components/ValidationPopup';
import _ from 'lodash';
import Icon from "react-native-vector-icons/FontAwesome";
const ConfirmPassCode = ({ navigation }) => {
  const route = useRoute();
  const [isModal, setIsModal] = useState(false);
  const [showModal, setshowModal] = React.useState(false);
  const [FirstPasscode, setFirstPasscode] = React.useState('');
  const [ConfirmPasscode, setConfirmPasscode] = useState(['', '', '', '', '', '']);
  const [showValidation, setShowValidation] = useState(false);
  const [showText, setShowText] = useState('');
  const onPress = () => {
    navigation.navigate('OnBoarding');
  };
  const onSucess = (password) => {
    if (route.params && route.params.InitalScreen) {
      setshowModal(true);
    } else {
      let tempCode = password;
      setConfirmPasscode([...tempCode]);
    }
  };
  const handleNext = () => {
    if (ConfirmPasscode[5] != '') {
      console.log(FirstPasscode, ConfirmPasscode);
      if (_.isEqual(FirstPasscode, ConfirmPasscode)) {
        EncryptedStorage.setItem('@confirmPasscode', 'confirm');
        EncryptedStorage.setItem('@PasscodeValue', JSON.stringify(ConfirmPasscode));
        if (route.params.isRegistration) {
          navigation.navigate('RecoveryPhaseScreen')
        } else {
          setIsModal(true)
        }

      } else {
        setShowText('Confirm Passcode does not match');
        setShowValidation(true);
      }
    } else {
      setShowText('Please enter a 5 digit confirm passcode');
      setShowValidation(true);
    }
  }
  const updateshow = () => {
    setShowValidation(false)
  }
  useEffect(() => {
    EncryptedStorage.getItem('@NewPasscode').then(suc => {
      if (suc) {
        setFirstPasscode(JSON.parse(suc))
      }
    })
  }, [])
  return (
    <View style={{ backgroundColor: '#181A20', flex: 1 }}>
      <View style={{ marginTop: hp('2%') }}>
        <BackArrow />

        {isModal && (
          <PopupModal
            btncon={{ marginVertical: hp('3%') }}
            visible={true}
            btntext={'Get start!'}
            children={
              'You have successfully exported your Swapp account. Have a good use of the app.'
            }
            height={'57%'}
            onPress={() => {
              setIsModal(false)
              //navigation.navigate('Home')
              navigation.navigate('TabNav')
            }
            }
            img={
              <View
                style={{
                  height: hp('23%'),
                  width: wp('100%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  resizeMode="contain"
                  source={require('../../Assets/Images/ModalImage.png')}
                  style={{
                    height: hp('20%'),
                    width: wp('55%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                </ImageBackground>
              </View>
            }
          />
        )}

      </View>
      <View style={{ marginHorizontal: wp('5%'), marginBottom: hp('5%') }}>
        <Text
          style={{
            color: 'white',
            fontSize: wp('6.8%'),
            fontWeight: '600',
            // marginTop: hp('4%'),
            fontFamily: 'Poppins-SemiBold',
            textAlign: 'center',
          }}>
          Confirm new passcode
        </Text>
      </View>
      <Pinkeyboard navigation={navigation} confirm={true} onSucess={onSucess} />
      {showModal && (
        <PopupModal
          visible={true}
          children={
            'You have successfully exported your Swap account. Have a good use of the app.'
          }
          height={'57%'}
          onPress={onPress}
        />
      )}
      <View>
        <Button
          handleFunction={() => {
            handleNext()
          }}
          btnText={'Next'}
        // style={{marginTop:20}}
        />
      </View>
      {showValidation == true && (
        <ValidationPopup title={showText} Show={true} showback={updateshow} />
      )}
    </View>
  );
};

export default ConfirmPassCode;
