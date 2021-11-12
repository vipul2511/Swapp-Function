import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
  BackHandler
} from 'react-native';
import styles from './Styles';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
import Title from '../../Components/CreatingAccount/Title';
import Button from '../../Components/CreatingAccount/Button';
import {connect} from 'react-redux';
import bip39 from 'react-native-bip39';
import CustomInput from '../../Components/CustomInput';
import EncryptedStorage from 'react-native-encrypted-storage';
import ValidationPopup from '../../Components/ValidationPopup';
import {useIsFocused} from '@react-navigation/native';
const AddUsername = (props) => {
  const isFocused = useIsFocused();
  const [cont, setCont] = useState('');
  const [email, setEmail] = useState('');
  const [id,setId]=useState('');
  const [showText,setShowText]=useState('');
  const [showValidation, setShowValidation] = useState(false);
  const [callAPI,setcallAPI]=useState(false);
  // const  handleFunction=()=> {
  //   if(cont!=''){
  //     console.log('id',id);
     
  //   }else{
  //     setShowText('Please enter a username');
  //     setShowValidation(true);
  //   }

  // }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backButtonHandler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
    };
  }, [backButtonHandler]);
  function backButtonHandler() {
      if(isFocused){
        props.eraseUserNameError();
        props.eraseCodeData();
        props.navigation.goBack()
          return true;
      }
    
  }
 const backButton=()=>{
  props.eraseUserNameError();
  props.eraseCodeData();

  }
  const sendUsername=()=>{
    if(cont!=''){
      // setcallAPI(true)
    props.addusername({
      id:id,
      user_name:cont
    });
  }else{
        setShowText('Please enter a username');
        setShowValidation(true);
      }
  }
  useEffect(()=>{
    EncryptedStorage.getItem('@user_id').then(id=>{
     if(id){
      setId(JSON.parse(id));
     }
   })
 },[]);

  useEffect(() => {
    // console.log('props username',props.auth);

      if(props.wording.username) {
        // setcallAPI(false)
        EncryptedStorage.setItem('@user_id',JSON.stringify(props.wording.username.id));
        props.navigation.navigate('CreateNewPassword', {isRegistration: true})
      }
      if(props.wording.usernameError) {
        setShowText(props.wording.usernameError);
        setShowValidation(true);
      }
    
}, [props.wording])
 useEffect(()=>{
  props.eraseUserNameError();
 },[])
  const updateshow = () => {
    props.eraseUserNameError();
    setShowValidation(false)
  }
  const handleTextChange=(text) =>{
    setCont(text);
  }

  // const generateMnemonic = async () => {
  //   try {
  //     console.log('-----------');
  //     let mnemonic = await bip39.generateMnemonic(256); // default to 128
  //     console.log(mnemonic);
  //     let h = bip39.mnemonicToEntropy(mnemonic);
  //     console.log(h);
  //     // props.getToken({ secret: h });
  //     const mnemonic2 = bip39.entropyToMnemonic(h);
  //     console.log(mnemonic2);
  //   } catch (e) {
  //     console.log(e);
  //     return false;
  //   }
  // };




  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={StatusBar.currentHeight}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <StatusBar backgroundColor="#181A20" barStyle="light-content" />
        <BackArrow func={() => backButton()} />

        <Title
          title={'Create your Username'}
          text={'Your username will be used to generate the Swap ID and screen name'}
        />

        <View style={styles.inputBlock}>
          <CustomInput
            onchange={handleTextChange}
            value={cont}
            header={'USERNAME'}
          />
        </View>


      </KeyboardAvoidingView>
      <Button
              disabled={props.wording.usernameLoader} loading={props.wording.usernameLoader}  handleFunction={sendUsername}  btnText={'Create'}    />
      {showValidation == true && (
        <ValidationPopup title={showText} Show={true} showback={updateshow} />
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  wording:state.wording,
});

const mapDispatchToProps = (dispatch) =>  ({
  getToken: (data) => {dispatch({type: "GET_TOKEN", data})},
  addusername: (data) => {dispatch({type: "ADD_USERNAME", data})},
  eraseUserNameError: () => {dispatch({type: "ERASE_USERNAME_ERROR"})},
  eraseCodeData: () => {dispatch({type: "ERASE_CODE_DATA"})},

  
          // ERASE_CODE_DATA
});

export default connect(mapStateToProps,mapDispatchToProps)(AddUsername);
