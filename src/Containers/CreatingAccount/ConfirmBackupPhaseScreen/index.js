import React, {useEffect, useState} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    Text, TouchableOpacity, View,
} from "react-native";
import styles from './Styles';
import Button from "../../../Components/CreatingAccount/Button";
import BackArrow from "../../../Components/CreatingAccount/BackArrow";
import PopupModal from '../../../Components/PopupModal';
import {connect} from "react-redux";
import EncryptedStorage from 'react-native-encrypted-storage';

const WordButton = (props) => {
    const { wordItem, handleAddWord } = props;
    const { word, isSelected, id } = wordItem;
    return (
        <TouchableOpacity onPress={() => handleAddWord(id)} style={[styles.wordBtnContainer, {borderColor: isSelected ? '#303136' : '#5E6272'}]}>
            <Text style={[styles.wordBtnText, {color: isSelected ? '#303136' : '#FFFFFF'}]}>{word}</Text>
        </TouchableOpacity>
    )
}

const AttachedWord = (props) => {
    const { wordItem, handleDeleteWord } = props;
    const { word, id } = wordItem;
    return (
        <TouchableOpacity onPress={() => handleDeleteWord(id)} style={styles.attachedWordContainer}>
            <Text style={styles.attachedWordText}>{word}</Text>
            <View>
                <Image
                    style={styles.closeIcon}
                    source={require('../../../Assets/Images/CloseSquare.png')}
                />
            </View>
        </TouchableOpacity>
    )
}

const ConfirmBackupPhaseScreen = (props) => {
    const getWords = () => {
        let wordsArray = props.route.params.words.map((el, i) => ({id:i+1, word:el, isSelected: false}));
        return wordsArray.sort(() => Math.random() - 0.5);
    }

    const [ words, setWords ] = useState(getWords());
    const [ popModal, setPopModal ] = useState(false);
    const [ checkedWords, setCheckedWords ] = useState([]);
    const [ isWrongPhrase, setIsWrongPhrase ] = useState('pending');
    const [id,setId]=useState('');
    const handleAddWord = (id) => {
        setWords(words.map(el => el.id === id ? { ...el, isSelected: true} : el));
        let checkedWord = words.find(el => el.id == id)
        checkedWord.isSelected == false && setCheckedWords([...checkedWords, checkedWord])
        setIsWrongPhrase('pending')
    }
    useEffect(()=>{
        EncryptedStorage.getItem('@user_id').then(id=>{
            if(id){
                setId(JSON.parse(id));
            }
        })
    },[]);

    const handleDeleteWord = (id) => {
        setWords(words.map(el => el.id === id ? { ...el, isSelected: false} : el));
        setCheckedWords(checkedWords.filter(el => el.id !== id))
        setIsWrongPhrase('pending')
    }

    useEffect(() => {
        if(isWrongPhrase === 'correct') {
            props.eraseUserNameError();
            props.sendSecretHash({
                id: id,
                secret: props.route.params.hash
            });
            setPopModal(true);
            // AsyncStorage.setItem('@token',JSON.stringify())
            // props.navigation.navigate('ThreeThingsScreen')
        }
        if(isWrongPhrase === 'wrong') {
            console.log(isWrongPhrase)
        }
    }, [isWrongPhrase])

    const handleConfirm = () => {

        if(checkedWords.length !== 12) {
            setIsWrongPhrase('wrong')
        } else {
            let flag = false;
            checkedWords.forEach((el, i) => {
                if(el.id != i+1) {
                    console.log(el.id + ' ' + i+1)
                    flag = true;
                    setIsWrongPhrase('wrong')
                }
            })
            if(!flag) {
                setIsWrongPhrase('correct')
            }
        }
        // props.navigation.navigate('NameScreen')
    }
    const setTokenToAsyncStorage = async () => {
        const value = await EncryptedStorage.getItem('token');
        console.log('async')
        console.log(value)
        await EncryptedStorage.setItem(
            'token',
            props.auth.isAuth.token
        );
    }

    useEffect(()=>{
        EncryptedStorage.getItem('@user_id').then(id=>{
            if(id){
                setId(JSON.parse(id));
            }
        })
    },[])
    useEffect(() => {
        if(props.auth.isAuth) {
            console.log('success. Must to navigate to next screens')
            //props.sendWalletAddress({wallet: props.route.params.walletAddress})
        }
    }, [props.auth])

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
                <StatusBar backgroundColor="#181A20" barStyle="light-content" />
                <BackArrow navigate={props.navigate}/>



                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Confirm your Secret Backup Phase</Text>
                    <Text style={styles.text}>Pleace select each phase in order to make sure it is correct.</Text>
                </View>

                <View style={[styles.wordBoard, {borderColor: isWrongPhrase === 'wrong' ? '#FF0B80' : isWrongPhrase === 'correct' ? '#A5F59C' : '#5E6272'}]}>
                    { checkedWords.map(wordItem => <AttachedWord handleDeleteWord={handleDeleteWord} wordItem={wordItem}/>) }
                </View>

                <View style={styles.wordBtnBlock}>
                    {
                        words.map(wordItem => (
                            <WordButton wordItem={wordItem} handleAddWord={handleAddWord}/>
                        ))
                    }
                </View>

                <Button inActive={checkedWords.length !== 12} disabled={props.auth.loader || checkedWords.length !== 12} loading={props.auth.loader} handleFunction={handleConfirm} btnText={'Confirm'}/>
            </KeyboardAvoidingView>
            {
                popModal && <PopupModal
                    visible={popModal}
                    children={"You have registered your Swap account. Have a good use of the app."}
                    height={'55%'}
                    onPress={() => {
                        setPopModal(false)
                        props.navigation.navigate('ThreeThingsScreen')
                    } }
                />
            }
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    wording:state.wording
});

const mapDispatchToProps = (dispatch) =>  ({
    sendWalletAddress: (data) => {dispatch({type: "SEND_WALLET_ADDRESS", data})},
    eraseEmailError: () => {dispatch({type: "ERASE_EMAIL_ERROR"})},
    sendSecretHash: (data) => {dispatch({type: "SEND_SECRET", data})},
    eraseUserNameError: () => {dispatch({type: "ERASE_USERNAME_ERROR"})},
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmBackupPhaseScreen);
