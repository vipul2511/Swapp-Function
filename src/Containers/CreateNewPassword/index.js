import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import Styles from './styles';
import CustomInput from '../../Components/CustomInput';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../Components/CreatingAccount/Button';
import {useRoute} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
const CreateNewPassword = ({navigation}) => {
  const [notmatched, setnotmatched] = useState(false);
  const [lengtherror, setlengtherror] = useState(false);
  const [Password, setPassword] = useState('');
  const [message,setmessage]=useState('');
  const route = useRoute();
  const [confirmPassword, setConfirmPassword] = useState('');
  const checkAndRedirect = () => {
    if(Password!=''&&confirmPassword!=''){
    if (Password.length>7&&confirmPassword.length>7) {
      if(Password==confirmPassword){
        EncryptedStorage.setItem('@confirmPasscode','CreatePassword');
        EncryptedStorage.setItem('@Password',JSON.stringify(Password));
              navigation.navigate('CreateNewPasscode', {
        InitalScreen: route?.params?.InitalScreen,
                  isRegistration: route.params.isRegistration
      });       
    }else{
      setmessage('Password does not match');
      setlengtherror(true);
    }
    } else {
      setmessage('Must be atleast 8 characters');
      setlengtherror(true);
     
    }
   
  }else{
    setmessage('Please enter both password');
    setlengtherror(true);
  }
  };

  return (
    <SafeAreaView style={Styles.container}>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex:1}}
       > */}
        <BackArrow />
        <ScrollView  >
          <View style={{marginHorizontal: wp('5%'),marginBottom:hp('5%')}}>
            <Text
              style={{
                fontSize: wp('6.5%'),
                fontWeight: '600',
                color: 'white',
                marginTop: hp('3%'),
                marginBottom: hp('2%'),
                fontFamily: 'Poppins-SemiBold',
              }}>
              Create your Password
            </Text>

            <Text
              style={{
                color: '#5E6272',
                fontSize: 15,
                fontFamily: 'Inter-Regular',
                lineHeight: 24,
                fontWeight: '500',
              }}>
              Please create the password that will unlock your Swapp wallet on
              the current device. Please note, that Swapp won’t be able to
              recover the password for you.
            </Text>

            <CustomInput
              header={'NEW PASSWORD (MIN 8 CHARS)'}
              headertextstyle={{marginTop: hp('4%')}}
              placeholder={''}
              eye
              eyeStyle={{
                height: 20,
                width: 20,
                overflow: 'hidden',
                position: 'absolute',
                right: wp('1%'),
                top: hp('8%'),
                zIndex: 100,
              }}
              securetext
              onchange={text => {
                setPassword(text);
              }}
              value={Password}
              fontstyle={{fontSize: wp('7%'), fontFamily: 'Inter-Bold'}}
            />
            <CustomInput
              header={'NEW PASSWORD'}
              headertextstyle={{marginTop: hp('4%')}}
              placeholder={''}
              eye
              eyeStyle={{
                height: 20,
                width: 20,
                overflow: 'hidden',
                position: 'absolute',
                right: wp('1%'),
                // backgroundColor:'red',
                top: hp('8%'),
                // bottom:hp('50%'),
                zIndex: 100,
              }}
              securetext
              onchange={text => {
                setConfirmPassword(text);
              }}
              value={confirmPassword}
              fontstyle={{fontSize: wp('7%'), fontFamily: 'Inter-Bold'}}
            />
            {lengtherror ? (
              <Text
                style={{
                  color: '#5E6272',
                  fontSize: 15,
                  fontFamily: 'Inter-Regular',
                  lineHeight: 24,
                  fontWeight: '400',
                  marginTop: hp('0.5'),
                }}>
                {message}
              </Text>
            ) : null}
            {notmatched ? (
              <Text
                style={{
                  color: 'red',
                  fontSize: 15,
                  fontFamily: 'Inter-Regular',
                  lineHeight: 24,
                  fontWeight: '400',
                }}>
                Password Not Matched
              </Text>
            ) : null}
          </View>
        </ScrollView>
        
      {/* </KeyboardAvoidingView> */}
      <Button
          handleFunction={checkAndRedirect}
          btnText={'Create'}
        />
    </SafeAreaView>
  );
};

export default CreateNewPassword;
