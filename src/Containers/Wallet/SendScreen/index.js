import React, {useEffect, useRef, useState} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, ScrollView
} from "react-native";
import styles from './Styles';
import Button from "../../../Components/CreatingAccount/Button";
import BackArrow from "../../../Components/CreatingAccount/BackArrow";
import uuid from 'react-native-uuid';
import {useRoute} from '@react-navigation/native';
import {connect} from "react-redux";

const SendScreen = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView keyboardVerticalOffset={StatusBar.currentHeight} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.contentContainer}>
                <StatusBar backgroundColor="#181A20" barStyle="light-content" />
                <BackArrow isText={'Send by wallet'} navigation={props.navigation}/>

                <View style={styles.senderContainer}>
                    <View style={styles.senderHeader}>
                        <Text style={styles.senderHeaderText}>From</Text>
                        <Text style={styles.senderHeaderText}>15 coins</Text>
                    </View>

                    <View style={styles.senderInfoContainer}>
                        <View style={styles.senderCurrencyContainer}>
                            <Image
                                style={styles.currencyImg}
                                source={require('../../../Assets/Images/ETH.png')}
                            />
                            <View style={styles.currencyValueContainer}>
                                <Text style={styles.senderValue}>51.05 ETC</Text>
                                <Text style={styles.senderConvertedValue}>$155.500,00</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Image
                                style={styles.btnIcon}
                                source={require('../../../Assets/Images/arrowDown.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.senderContainer}>
                    <View style={styles.senderHeader}>
                        <Text style={styles.senderHeaderText}>To</Text>
                    </View>

                    <View style={styles.senderInfoContainer}>
                        <View style={styles.senderCurrencyContainer}>
                            <Text style={styles.senderConvertedValue}>Wallet address</Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                style={styles.btnIcon}
                                source={require('../../../Assets/Images/QrIcon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.senderContainer, {height: '24%'}]}>
                    <View style={styles.resultHeader}>
                        <Text style={styles.senderHeaderText}>To</Text>
                    </View>

                    <View style={styles.senderInfoContainer}>
                        <TouchableOpacity>
                            <Image
                                style={styles.btnIcon}
                                source={require('../../../Assets/Images/QrIcon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>


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
)(SendScreen);
