import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    BackHandler
} from "react-native";
import styles from './Styles';
import {
    CodeField,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from "../../../Components/CreatingAccount/Button";
import BackArrow from "../../../Components/CreatingAccount/BackArrow";
import Title from "../../../Components/CreatingAccount/Title";
import { connect } from "react-redux";
import ValidationPopup from '../../../Components/ValidationPopup';
import { useIsFocused, useRoute } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
const CELL_COUNT = 4;

const Verification = (props) => {
    const isFocused = useIsFocused();
    const [value, setValue] = useState('');
    const [showText, setShowText] = useState('');
    const [showValidation, setshowValidation] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [propsCode, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });



    const [isWrong, setIsWrong] = useState(false);
    const string = (str) => {

        var split = str.split("@");
        var letter1 = split[0].substring(0, 3);
        var letter2 = split[0].substring(split[0].length - 2, split[0].length);
        var newFirst = letter1;
        for (let i = 0; i < split[0].length - 5; i++) {
            newFirst += "*";
        }
        newFirst += letter2;
        var result;
        if (props.route?.params?.isPhone == false || props.route?.params?.phoneTrue == false) {
            var letter3 = split[1];
            result = newFirst + "@" + letter3;
        } else {
            result = newFirst[0] == '+' ? newFirst : '+' + newFirst;
        }

        return result;
    }
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backButtonHandler);

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
        };
    }, [backButtonHandler]);
    function backButtonHandler() {
        if (isFocused && props.route?.params?.fromLogin) {
            BackHandler.exitApp();
            return true;
        } else {
            if (isFocused) {
                props.eraseEmailData()
                props.navigation.goBack();
                return true;
            }
        }

    }
    const sendCode = () => {
        // props.navigation.navigate('CreateNewPassword')
        //return

        if (props.route.params.isPhone) {
            props.sendCode({
                phone: props.auth.email,
                code: value
            })
        } else {
            props.sendCode({
                email: props.auth.email,
                code: value
            })
        }
    }
    const checkAuth = () => {
        console.log('login')
        if (props.route?.params?.fromLogin) {
            if (props.route.params.phoneTrue) {
                props.sendAuthEmailPhone({ phone: props.route.params.emailphonenumber, code: value })
            } else {

                props.sendAuthEmailPhone({ email: props.route.params.emailphonenumber, code: value })
            }
        }
    }
    useEffect(() => {
        if (!props.auth.authLoader && props.auth.authVerificationData) {
            EncryptedStorage.setItem('@loginToken', JSON.stringify(props.auth.authVerificationData.token));
            //props.navigation.navigate('Home');
            props.navigation.navigate('TabNav');
        }
        if (props.auth.authVerificationError) {
            setShowText(props.auth.authVerificationError);
            setshowValidation(true)
            setIsWrong(true)
        }

    }, [props.auth])
    useEffect(() => {
        if (props.route?.params?.fromLogin) {
            if (props.route.params.phoneTrue) {
                props.LoginEmail({ phone: props.route.params.emailphonenumber })
            } else {
                props.LoginEmail({ email: props.route.params.emailphonenumber })
            }
        }
        //    props.eraseEmailError();

    }, [])

    useEffect(() => {
        return () => {
            // props.eraseEmailData()

            props.eraseCodeError()
        }
    }, [])

    useEffect(() => {
        setIsWrong(false)
    }, [value])

    useEffect(() => {
        console.log('isFocused')
        console.log(isFocused)
        console.log('useEffect')
        console.log(props.auth.isAuth)
        if (props.auth.isAuth && isFocused) {
            let obj = {
                phone: props.route.params.isPhone,
                emailPhone: props.auth.email
            }
            if (props.route?.params?.fromLogin) {
                props.navigation.navigate('TabNav');
            } else {
                EncryptedStorage.setItem('@emailPhone', JSON.stringify(obj))
                EncryptedStorage.setItem('@user_id', JSON.stringify(props.auth.isAuth.user_id));
                console.log('navigation to AddUsername from  Verification')
                props.navigation.navigate('AddUsername');
            }
        }
        if (props.auth.codeError) {
            setShowText(props.auth.codeError);
            setshowValidation(true)
            setIsWrong(true)
        }
        if (props.auth.emailError) {
            setShowText(props.auth.emailError);
            setshowValidation(true)
            setIsWrong(true)
        }

    }, [props.auth, isFocused])
    const updateshow = () => {
        // props.eraseEmailData()
        props.eraseEmailError();
        props.eraseCodeError();
        setshowValidation(false)
    }
    const resendCode = () => {
        if (props.route?.params?.fromLogin) {
            if (props.route.params.phoneTrue) {
                props.LoginEmail({ phone: props.route.params.emailphonenumber })
            } else {
                props.LoginEmail({ email: props.route.params.emailphonenumber })
            }
        } else {
            if (props.route.params.isPhone) {
                props.sendEmailPhone({ phone: props.auth.email })
            } else {
                props.sendEmailPhone({ email: props.auth.email })
            }
        }


    }
    const backButton = () => {
        if (isFocused && props.route?.params?.fromLogin) {
            BackHandler.exitApp();
            return true;
        } else {
            props.eraseEmailData()

        }
    }

    const getBorderColor = () => {
        if (isWrong) {
            return '#FF0B80'
        } else if (props.auth.isAuth && isFocused) {
            return '#A5F59C'
        } else {
            return '#5E6272'
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <KeyboardAvoidingView keyboardVerticalOffset={StatusBar.currentHeight}
                behavior={Platform.OS === "ios" ? "padding" : "padding"} style={{ flex: 1 }}>
                <StatusBar backgroundColor="#181A20" barStyle="light-content" />
                <BackArrow navigation={props.navigation} func={() => backButton()} />

                {props.route?.params?.fromLogin ? <Title title={props.route.params.phoneTrue ? 'Confirm your Phone' : 'Confirm your email'} text={props.route.params.phoneTrue ? 'We have sent a code to your phone Number:' : 'We have sent a code to your email:'} /> : <Title title={props.route.params.isPhone ? 'Phone Verification' : 'Email Verification'} text={props.route.params.isPhone ? 'We have sent a code to your phone Number:' : 'We have sent a code to your email:'} />}
                {props.route?.params?.fromLogin ?
                    <Text style={styles.email}>{props.route?.params?.emailphonenumber ? string(props.route.params.emailphonenumber && props.route.params.emailphonenumber) : ''}</Text>
                    : <Text style={styles.email}>{props?.auth?.email ? string(props.auth.email && props.auth.email) : ''}</Text>}

                <View style={styles.inputBlock}>

                    <CodeField
                        ref={ref}
                        {...propsCode}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <View
                                key={index}
                                style={[styles.cell, { borderColor: getBorderColor() }, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                <Text style={styles.digit}>
                                    {symbol || null}
                                </Text>
                                {
                                    isFocused &&
                                    <View style={{
                                        width: '70%',
                                        alignSelf: 'center',
                                        height: 2,
                                        backgroundColor: '#246BFD',
                                        position: 'absolute',
                                        bottom: 10
                                    }}></View>
                                }
                            </View>
                        )}
                    />

                    <View style={styles.additionalPostscript}>
                        <Text style={styles.additionalPostscriptTitle}>Didn’t receive code?</Text>
                        <TouchableOpacity onPress={resendCode}>
                            <Text style={styles.additionalPostscriptBtnText}> Resend</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
            {props.route?.params?.fromLogin ? <Button disabled={props.auth.authLoader} loading={props.auth.authLoader} handleFunction={sendCode} btnText={'Verify account'} /> : <Button disabled={props.auth.loader} loading={props.auth.loader} handleFunction={sendCode} btnText={'Verify account'} />}
            {showValidation == true && (
                <ValidationPopup title={showText} Show={true} showback={updateshow} />
            )}
        </SafeAreaView>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    sendEmailPhone: (data) => { dispatch({ type: "SEND_EMAIL", data }) },
    sendCode: (data) => { dispatch({ type: "SEND_CODE", data }) },
    LoginEmail: (data) => { dispatch({ type: "SEND_LOGIN", data }) },
    eraseCodeError: () => { dispatch({ type: "ERASE_CODE_ERROR" }) },
    sendAuthEmailPhone: (data) => { dispatch({ type: "SET_AUTH_VERIFICATION", data }) },
    eraseEmailData: () => { dispatch({ type: "ERASE_EMAIL_DATA" }) },
    eraseEmailError: () => { dispatch({ type: "ERASE_EMAIL_ERROR" }) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Verification);
