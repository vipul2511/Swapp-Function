import React, {useEffect, useRef, useState} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View,Clipboard
} from "react-native";
import styles from './Styles';
import Button from "../../../Components/CreatingAccount/Button";
import BackArrow from "../../../Components/CreatingAccount/BackArrow";
import uuid from 'react-native-uuid';
import {useRoute} from '@react-navigation/native';
import {connect} from "react-redux";
import bip39 from 'react-native-bip39'
import EncryptedStorage from 'react-native-encrypted-storage';

const AttachedWord = (props) => {
    const { wordItem, handleDeleteWord } = props;
    const { word, id } = wordItem;

    return (
        <View style={styles.attachedWordContainer}>
            <Text style={styles.attachedWordText}>{word}</Text>
            <TouchableOpacity onPress={() => handleDeleteWord(id)}>
                <Image
                    style={styles.closeIcon}
                    source={require('../../../Assets/Images/closeIcon.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const TypeWordPhrase = (props) => {
    const [ word, setWord ] = useState('');
    const [ isError, setIsError ] = useState(false);
    const route = useRoute();
    const [ words, setWords ] = useState([]);
    const [ buffer, setBuffer ] = useState('');
    const refInput = useRef();

    const getStringFromBuffer = async () => {
        const copiedContent = await Clipboard.getString();
        setBuffer(copiedContent)
    }

    useEffect(() => {
        getStringFromBuffer();
    }, [])

    const handleAddWord = () => {
        if(!word) return
        setWords([...words, {id: uuid.v4(), word: word}]);
        setWord('')
    }

    const setTokenToAsyncStorage = async () => {
        const value = await EncryptedStorage.getItem('token');
                await EncryptedStorage.setItem(
                    'token',
                    props.auth.isAuth.token
                  );
    }

    const handleChange = async (e) => {
        if(buffer === e && buffer != '') {
            setWords([...words, ...e.split(' ').map(word => ({id: uuid.v4(), word}))]);
        } else {
            setWord(e)
        }
    }

    useEffect(() => {
        if(props.auth.tokenError) {
            setIsError(true)
        }
        if(props.auth.isAuth) {
            setTokenToAsyncStorage();
            console.log('success, must to navigate')
            //success. here navigation to the next screen
            props.navigation.navigate('CreateNewPassword', {isRegistration: false})
        }
    }, [props.auth])

    const handleDeleteWord = (id) => {
        setWords(words.filter(el => el.id !== id));
    }

    const sendWords = () => {
        let phrase = '';
        words.forEach((el, i) => {
            if(i == 11) {
                phrase = phrase + el.word
            } else {
                phrase = phrase + el.word + ' '
            }
        })
       //phrase = 'abuse kick symbol tornado lend neither decorate hero first describe gown bless';
        try {
            let h = bip39.mnemonicToEntropy(phrase)
            props.getToken({ secret: h })
        } catch(error) {
            setIsError(true)
        }
    }

    const touchWordBlock = () => {
        refInput.current.focus();
        setIsError(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView keyboardVerticalOffset={StatusBar.currentHeight} behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
                <StatusBar backgroundColor="#181A20" barStyle="light-content" />
                <BackArrow isText={'Import account'} navigation={props.navigation}/>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Type your 12-Word Phase</Text>
                    <Text style={styles.text}>Enter the words below to make sure you’ve stored your recovery phrase correctly</Text>
                </View>

                <TouchableWithoutFeedback onPress={touchWordBlock}>
                    <View style={[styles.wordBoard, {borderColor: isError ? '#FF0B80' : '#5E6272'}]}>
                        { words.map(wordItem => <AttachedWord handleDeleteWord={handleDeleteWord} wordItem={wordItem}/>) }
                        <TextInput
                            ref={refInput}
                            value={word}
                            onSubmitEditing={handleAddWord}
                            onChangeText={(e) => {
                                handleChange(e)
                            }}
                            style={styles.inputWord}
                        ></TextInput>
                    </View>
                </TouchableWithoutFeedback>
                {
                    isError && <Text style={styles.errorMessage}>Invaid Secret Recovery Phase</Text>
                }

                <Button disabled={isError} handleFunction={sendWords} btnText={'Confirm'}/>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = (dispatch) =>  ({
    getToken: (data) => {dispatch({type: "GET_TOKEN", data})},
    eraseEmailError: () => {dispatch({type: "ERASE_EMAIL_ERROR"})},
    sendSecretHash: (data) => {dispatch({type: "SEND_SECRET", data})},
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TypeWordPhrase);
