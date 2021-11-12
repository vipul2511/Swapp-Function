import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    View
} from "react-native";
import styles from './Styles';
import BackArrow from "../../../Components/CreatingAccount/BackArrow";
import Title from "../../../Components/CreatingAccount/Title";
import Button from "../../../Components/CreatingAccount/Button";

import {connect} from "react-redux";
import bip39 from 'react-native-bip39'
import {useIsFocused, useRoute} from '@react-navigation/native';
import CustomInput from '../../../Components/CustomInput';
import ValidationPopup from '../../../Components/ValidationPopup';
const EnterEmailPhoneScreen = (props) => {
    const [ value, setValue ] = useState('');
    const [showText, setShowText] = useState('');
    const [showValidation,setshowValidation]=useState('');
    const isFocused = useIsFocused();

    const handleSendEmail = () => {
        if(value!=''){
            console.log('no null')
            if(props.route.params.isPhone) {
                console.log(value.length);
                props.sendEmailPhone({ phone: value.trim()})
            }else{
                props.sendEmailPhone({ email: value.trim() })
            }
        }else{
            if(props.route.params.isPhone){
                setshowValidation(true);
                setShowText('Please enter your phone number');
            }else{
                setshowValidation(true);
                setShowText('Please enter your email id') ;
            }

        }


    }

    function handleTextChange(text){
        setValue(text);
    }
    const updateshow = () => {
        props.eraseEmailError();
        setshowValidation(false)
    }



    useEffect(() => {
        console.log('erase data')


        return () => {
            props.eraseEmailError()
        }
    }, [])

    useEffect(() => {
        if(!isFocused) return
        if(props.auth.email) {
            props.navigation.navigate('Verification',{isPhone:props.route.params.isPhone})
        }
        if(props.auth.phone){
            props.navigation.navigate('Verification',{isPhone:props.route.params.isPhone})
        }
        if(props.auth.emailError){
            setShowText(props.auth.emailError);
            setshowValidation(true)
        }
        if(props.auth.phone){
            props.navigation.navigate('Verification')
        }
    },[props.auth, isFocused])


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView keyboardVerticalOffset={StatusBar.currentHeight} behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
                <StatusBar backgroundColor="#181A20" barStyle="light-content" />
                <BackArrow />
                <Title title={props.route?.params?.addNew?props.route.params.addNew:'Create your Swapp'} text={props.route.params.isPhone ? 'We will send verification code on your Phone number' : 'We will send verification code on your email ID.'}/>

                <View style={styles.inputBlock}>
                    <CustomInput
                        onchange={handleTextChange}
                        value={value}
                        keyBoard={props.route.params.isPhone}
                        header={props.route.params.isPhone ? 'ENTER YOUR PHONE NUMBER' : 'ENTER YOUR EMAIL'}
                    />
                </View>

                <Button inActive={!value}  disabled={props.auth.emailLoader || !value} loading={props.auth.emailLoader} handleFunction={handleSendEmail} btnText={'Send Verification Code'}/>
            </KeyboardAvoidingView>
            {showValidation == true && (
                <ValidationPopup title={showText} Show={true} showback={updateshow} />
            )}
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = (dispatch) =>  ({
    sendEmailPhone: (data) => {dispatch({type: "SEND_EMAIL", data})},
    eraseEmailError: () => {dispatch({type: "ERASE_EMAIL_ERROR"})},
    eraseEmailData: () => {dispatch({type: "ERASE_EMAIL_DATA"})},
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EnterEmailPhoneScreen);
