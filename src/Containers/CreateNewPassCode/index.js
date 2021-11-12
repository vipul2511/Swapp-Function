import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
import Pinkeyboard from '../../Components/Pinkeyboard';
import Button from '../../Components/CreatingAccount/Button';
import {useRoute} from '@react-navigation/native';
import ValidationPopup from '../../Components/ValidationPopup';
import EncryptedStorage from 'react-native-encrypted-storage';
import PopupModal from "../../Components/PopupModal";
import Icon from "react-native-vector-icons/FontAwesome";
const CreateNewPasscode = ({navigation}) => {
    const [ isModal, setIsModal ] = useState(false);
  const [NewPasscode,setNewPasscode]=useState(['', '', '', '', '', '']);
  const [showValidation, setShowValidation] = useState(false);
  const route = useRoute();
  function onSucess(password) {
    let tempCode = password;
    console.log('temp code',tempCode);
    setNewPasscode([...tempCode]);
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
        <BackArrow />

        {isModal && (
            <PopupModal
                btncon={{marginVertical: hp('3%')}}
                visible={true}
                btntext={'Get start!'}
                children={
                    'You have successfully exported your Swapp account. Have a good use of the app.'
                }
                height={'57%'}
                onPress={() => {
                    setIsModal(false)
                    navigation.navigate('Home')
                    // navigation.navigate('TabNav')
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

      <View style={{marginHorizontal: wp('5%'), marginBottom: hp('5%'),marginTop: hp('2.4%')}}>
        <Text
          style={{
            color: 'white',
            fontSize: wp('6.8%'),
            fontWeight: '600',
            // marginTop: hp('4%'),
            fontFamily: 'Poppins-SemiBold',
            textAlign: 'center',
          }}>
          Create new passcode
        </Text>
      </View>
      <Pinkeyboard
        navigation={navigation}
        confirm={false}
        onSucess={onSucess}
      />
      <View>
        <Button
          handleFunction={HandleNext}
          btnText={'Next'}
          // style={{marginTop:20}}
        />
      </View>
      <TouchableOpacity
      onPress={() => {
          route.params.isRegistration ? navigation.navigate('RecoveryPhaseScreen') : setIsModal(true)
      }}>
     <Text style={{color: '#5E6272', textAlign: 'center'}}>Skip</Text>
     </TouchableOpacity>
     {showValidation == true && (
        <ValidationPopup title={"Please enter a 5 digit passcode"} Show={true} showback={updateshow} />
      )}
    </View>
  );
};

export default CreateNewPasscode;
