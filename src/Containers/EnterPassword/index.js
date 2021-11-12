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
import CustomInput from '../../Components/CustomInput';
import TransparentButton from '../../Components/TransparentButton';
import Button from '../../Components/CreatingAccount/Button';
import Styles from './Styles';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
import { connect } from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';
const EnterPassword = (props) => {
  const [isshow, setIsShow] = useState(false);
  const [warning, Setwarning] = useState(false);
  const [Password, setPassword] = useState('');
  const [perviousPass,setperviousPass]=useState('');
  const [focus, setFocus] = useState(false);
  const [obj,setobj]=useState('');
  const Inputhandler = e => {

    setPassword(e);
    if(Password.length > 8){
      Setwarning(false);
    }
    console.log(Password.length)
  };
  const updatefocus = () => {
    setFocus(false);
    setFocus(!focus);
  };
 
  const Setdata = () => {
    if (Password.length < 8) {
      setFocus(false);
      Setwarning(true);
    } else {
      if(perviousPass!=''){
        if(Password===perviousPass){
          props.eraseEmailData();
          props.eraseCodeData();
          // props.navigation.navigate('Verification',{isPhone:obj?.phone,phoneTrue:obj?.phone,emailphonenumber:obj?.emailPhone,fromLogin:true});
          props.navigation.navigate('TabNav');
        }else{
          setFocus(true);
          Setwarning(true);
        }
      }else{
        
      }
     
    }
  };
  useEffect(()=>{
    EncryptedStorage.getItem('@Password').then(succ=>{
     if(succ){
      setperviousPass(JSON.parse(succ));
     }
   });
   EncryptedStorage.getItem('@emailPhone').then(succ=>{
     if(succ){
       console.log(JSON.parse(succ),'suucID')
       setobj(JSON.parse(succ));
     }
   })
  },[])


  return (
    <SafeAreaView style={{backgroundColor: '#181A20', flex: 1}}>
      <KeyboardAvoidingView
        style={{backgroundColor: '#181A20', flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          {/* <BackArrow /> */}
        <View style={{marginHorizontal: wp('8%')}}>
          <View style={{marginVertical: hp('3%')}}>
            <Text
              style={{
                fontSize: wp('5.5%'),
                fontWeight: '600',
                fontFamily: 'Poppins-SemiBold',
                color: 'white',
              }}>
              Enter your password
            </Text>
          </View>

          <CustomInput
            header={'PASSWORD (MIN 8 CHARS)'}
            placeholder={''}
            eye
            eyeStyle={{
              height: 20,
              width: 20,
              overflow: 'hidden',
              position: 'absolute',
              right: wp('1%'),
              top: hp('5%'),
              zIndex: 100,
            }}
            securetext
            onchange={Inputhandler}
            value={Password}
            warning={warning}
            noBorder
            style={{
              color: warning ? '#FF0B80' : '#fff',
              fontFamily: 'Inter-Bold',
            }}
          />
          {/* <View style={focus?Styles.focusborder:warning?Styles.activeborder:Styles.disableborder} /> */}
          {warning ? (
            <Text
              style={[
                Styles.active,
                {
                  fontSize: 15,
                  fontFamily: 'Inter-Regular',
                  marginTop: hp('1.5%'),
                },
              ]}>
              Wrong password
            </Text>
          ) : null}

          {/* <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={{
                borderColor: '#5E6272',
                borderWidth: 1.5,
                // fontFamily:'Inter-Regular',

                borderRadius: 20,
                padding: 5,
                marginTop: hp('2%'),
                paddingHorizontal: wp('3%'),
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#5E6272',
                  letterSpacing: 0.5,
                  fontSize: 16,
                  fontFamily: 'Inter-Regular',
                }}>
                Forgot your password?
              </Text>
            </TouchableOpacity> */}
          {/* </View> */}

          {/* <TextInput placeholder={'dffd'}/> */}
        </View>
        {!warning ? (
          <Button handleFunction={text => Setdata(text)} btnText={'Log in'} />
        ) : (
          // <TransparentButton
          //   title="log in"
          //   onPress={() => {
          //     //   setShowModal(true);
          //   }}
          //   style={{
          //     width: wp('85%'),
          //     height: hp('7.3%'),
          //     backgroundColor: '#262A34',
          //     borderColor: '#262A34',
          //     marginTop: 'auto',
          //   }}
          //   textStyle={{color: '#3A3D46'}}
          // />
          <Button
            style={true}
            handleFunction={text => Setdata(text)}
            btnText={'Log in'}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) =>  ({
  eraseEmailData: () => {dispatch({type: "ERASE_EMAIL_DATA"})},
  eraseCodeData: () => {dispatch({type: "ERASE_CODE_DATA"})},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnterPassword);
