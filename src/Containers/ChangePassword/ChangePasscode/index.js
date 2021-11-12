import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackArrow from '../../../Components/CreatingAccount/BackArrow';
import Pinkeyboard from '../../../Components/ChangePasscodeKeyboard';
import Button from '../../../Components/CreatingAccount/Button';
import {useRoute} from '@react-navigation/native';
import ValidationPopup from '../../../Components/ValidationPopup';
import EncryptedStorage from 'react-native-encrypted-storage';
import Header from '../../../Components/Header';
const ChangePassCode = ({navigation}) => {
    const [ isModal, setIsModal ] = useState(false);
  const [NewPasscode,setNewPasscode]=useState(['', '', '', '', '', '']);
  const [showValidation, setShowValidation] = useState(false);
  const [message,setmessage]=useState("Enter your old PIN code");
  const [save,setSave]=useState(false);
  const route = useRoute();
  function onSucess(password) {
    let tempCode = password;
    console.log('temp code',tempCode);
    setNewPasscode([...tempCode]);
    if(message=='Enter your old PIN code') setmessage('Create new PIN code')
    if(message=='Create new PIN code') setmessage('Repeat the new PIN code');
    if(message=='Repeat the new PIN code'){
      setmessage('Your parrot has been updated!') 
      setSave(true)
    } 
  }
  const HandleNext=()=>{
    if(NewPasscode[5]!=''){
      EncryptedStorage.setItem('@NewPasscode',JSON.stringify(NewPasscode)).then(suc=>{   
        navigation.navigate('ConfirmPassCode', {
          InitalScreen: route?.params?.InitalScreen,
            isRegistration: route.params.isRegistration
        });
      });
    }else{
    
      setShowValidation(true)
    }

  }
  const updateshow = () => {
    setShowValidation(false)
  }
  return (
    <View style={{backgroundColor: '#181A20', flex: 1}}>
        <Header navigation={navigation} hide onSave={()=>{navigation.navigate('Home')}} setting save={save}/>

      <View style={{marginHorizontal: wp('5%'), marginBottom: hp('5%'),marginTop: hp('3%')}}>
        <Text
          style={{
            color: 'white',
            fontSize: wp('6%'),
            fontWeight: '600',
            // marginTop: hp('4%'),
            fontFamily: 'Poppins-SemiBold',
          }}>
          Change passcode
        </Text>
        {message=="Enter your old PIN code"?<View style={{height:hp('8%')}}>
          <Text style={{color:'#fff',fontFamily:'Inter-Regular',lineHeight:25}}>For the changes to take effect, you need to update the passcode</Text>
        </View>:<View style={{height:hp('8%')}}></View>}
      </View>
      <View style={{marginTop:hp('5%')}}>
      <Pinkeyboard
        navigation={navigation}
        textPin={message}
        confirm={false}
        onSucess={onSucess}
      />
      </View>
      {/* <View>
        <Button
          handleFunction={HandleNext}
          btnText={'Next'}
          // style={{marginTop:20}}
        />
      </View>
      <TouchableOpacity
      onPress={() => {
         
      }}>
     <Text style={{color: '#5E6272', textAlign: 'center'}}>Skip</Text>
     </TouchableOpacity> */}
     {showValidation == true && (
        <ValidationPopup title={"Please enter a 5 digit passcode"} Show={true} showback={updateshow} />
      )}
    </View>
  );
};

export default ChangePassCode;
