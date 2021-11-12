import React, {useEffect, useState} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Clipboard,
    ActivityIndicator,
    Share
} from "react-native";
import styles from './Styles';
import {
    CodeField,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from "../../../Components/CreatingAccount/Button";
import BackArrow from "../../../Components/CreatingAccount/BackArrow";
import {connect} from "react-redux";
import bip39 from 'react-native-bip39'
import { ethers } from "ethers";
import ValidationPopup from "../../../Components/ValidationPopup";

const Word = (props) => {
    const { text, n } = props;
    return (
        <View style={styles.wordContainer}>
            <Text style={styles.number}>{n}</Text>
            <Text style={styles.word}>{text}</Text>
        </View>
    )
}

const RecoveryPhaseScreen = (props) => {
    const [ words, setWords ] = useState([]);
    const [ hash, setHash ] = useState();
    const [ walletAddress, setWalletAddress ] = useState('');
    const [ showValidpop, setShowValidpop ] = useState(true);

    const generateMnemonic = async () => {
        try {
            console.log('-----------')
            let mnemonic = await bip39.generateMnemonic(128) // default to 128
            console.log(typeof mnemonic)

            /*walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic)
            console.log('wallet address')
            console.log(walletMnemonic.address)
            setWalletAddress(walletMnemonic.address)*/

            setWords(mnemonic.split(' '))
            let h = bip39.mnemonicToEntropy(mnemonic)
            setHash(h);
            console.log(h)
            //const mnemonic2 = bip39.entropyToMnemonic(h)
            //console.log(mnemonic2)
        } catch(e) {
            console.log(e)
            return false
        }
    }

    useEffect(() => {
        generateMnemonic()
    }, [])

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: words.join(' '),
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {!words[0] ? <ActivityIndicator style={{flex: 1}} size="large" color="#246BFD"/> : <>
                <StatusBar backgroundColor="#181A20" barStyle="light-content" />
                <BackArrow />

                <View>
                    <Image
                        style={styles.img}
                        source={require('../../../Assets/Images/lock.png')}
                    />
                </View>

                <Text style={styles.title}>Write down your Secret Recovery Phase</Text>
                <Text style={styles.text}>Below is your secret back-up phrase. Please, write it down and save it. On the next screen you will be asked to re-enter it in order.</Text>

                <View style={styles.wordsBlock}>
                    {
                        words[0] && words.map((word, i) => <Word text={word} n={i+1}/>)
                    }

                </View>

                <View style={styles.btnContainer}>
                    <View style={styles.insideBtnContainer}>
                        <TouchableOpacity onPress={() => Clipboard.setString(words.join(' '))} style={styles.miniBtn}>
                            <Text style={styles.textMiniBtn}>Copy</Text>
                            <Image
                                style={styles.btnIcon}
                                source={require('../../../Assets/Images/Copy.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onShare()} style={styles.miniBtn}>
                            <Text style={styles.textMiniBtn}>Share</Text>
                            <Image
                                style={styles.btnIcon}
                                source={require('../../../Assets/Images/Upload.png')}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
                <Button handleFunction={()=>props.navigation.navigate('ConfirmBackupPhaseScreen', {words, hash, walletAddress})} btnText={'Next'}/>
            </>}
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = (dispatch) =>  ({
    sendEmail: (data) => {dispatch({type: "SEND_EMAIL", data})},
    eraseEmailError: () => {dispatch({type: "ERASE_EMAIL_ERROR"})},
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecoveryPhaseScreen);
