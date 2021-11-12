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
import bip39 from 'react-native-bip39'
import { ethers } from "ethers";


const NFT = (props) => {
    const {id, name, img, version, number, total} = props.el;

    return (
        <View style={styles.nftContainer}>
            <Image
                style={styles.nftImg}
                source={img}
            />
            <Text style={styles.nftName}>{name}</Text>

            <View style={styles.nftInfoContainer}>
                <Text style={styles.nftText}>{number} of {total}</Text>
                <Text style={styles.nftText}>{version}</Text>
            </View>
        </View>
    )
}

const Token = (props) => {
    const { icon, name, percent, value, convertValue } = props.token;

    return (
        <View style={styles.tokenContainer}>
            <View style={styles.tokensInfoContainer}>
                <Image
                    style={styles.tokenIcon}
                    source={icon}
                />
                <View style={styles.tokenInfo}>
                    <Text style={styles.tokenName}>{name}</Text>
                    <Text style={styles.tokenPercent}>{percent}</Text>
                </View>
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.price}>{value} <Text style={{ fontFamily:'Inter-Medium' }}>{name}</Text></Text>
                <Text style={styles.convertedPrice}>{convertValue}</Text>
            </View>
        </View>
    )
}

const HeaderButton = (props) => {
    const { img, text } = props;

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('SendScreen')} style={styles.btnContainer}>
            <Image
                style={styles.btnIcon}
                source={img}
            />
            <Text style={styles.btnName}>{text}</Text>
        </TouchableOpacity>
    )
}

const WalletScreen = (props) => {
    const [ isTokens, setIsTokens ] = useState(true);
    const [ tokens, setTokens ] = useState([
        {id:1, icon: require('../../../Assets/Images/ETH.png'), value:'256', name:'ETH', convertValue:'$ 240 004,44', percent:'-0.85%'},
        {id:2, icon: require('../../../Assets/Images/BNB.png'), value:'256', name:'BNB', convertValue:'$ 240 004,44', percent:'-0.85%'},
        {id:3, icon: require('../../../Assets/Images/USDT.png'), value:'256', name:'USDT', convertValue:'$ 240 004,44', percent:'-0.85%'},
        {id:4, icon: require('../../../Assets/Images/ZEK.png'), value:'256', name:'ZEK', convertValue:'$ 240 004,44', percent:'-0.85%'},
        {id:5, icon: require('../../../Assets/Images/BTX.png'), value:'256', name:'BTX', convertValue:'$ 240 004,44', percent:'-0.85%'}
    ]);
    const [ nft, setNft ] = useState([
        {id:1, name:'Amazing digital art', img:require('../../../Assets/Images/NFT1.png'), version:3, number:2, total:10},
        {id:1, name:'Amazing digital art', img:require('../../../Assets/Images/NFT1.png'), version:3, number:2, total:10},
        {id:1, name:'Amazing digital art', img:require('../../../Assets/Images/NFT1.png'), version:3, number:2, total:10},
        {id:1, name:'Amazing digital art', img:require('../../../Assets/Images/NFT1.png'), version:3, number:2, total:10},
        {id:1, name:'Amazing digital art', img:require('../../../Assets/Images/NFT1.png'), version:3, number:2, total:10},
    ]);

    /*const generateMnemonic = async () => {
        try {
            console.log('------------------------------')
            console.log('Generate mnemonic phrase')
            let mnemonic = await bip39.generateMnemonic(128) // default to 128
            console.log(mnemonic)

            let walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic)
            console.log('wallet address')
            console.log(walletMnemonic.address)

            let network = ethers.providers.getNetwork("homestead")
            console.log('network')
            console.log(network)

            let defProvider = ethers.getDefaultProvider( network )
            console.log('defProvider')
            console.log(defProvider)

            let wallet = walletMnemonic.connect(defProvider)

            console.log('balace')
            let b = await wallet.getBalance();
            console.log(b.toString())

            console.log('!!!!!!!!!!!!!!!!!!!!!!!')

            let signer = new ethers.VoidSigner('0x8ba1f109551bD432803012645Ac136ddd64DBA72', defProvider)

            let abi = [
                "function balanceOf(address) view returns (uint)",
                "function transfer(address, uint) returns (bool)"
            ]
            let contract = new ethers.Contract("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984", abi, defProvider)
            console.log('contract')
            console.log(contract.address)

            let tokens = await contract.balanceOf(signer.getAddress())
            console.log('tokens')
            console.log(ethers.utils.formatEther(tokens))

            const balance2 = await contract.balanceOf('0xAd8924167B16d57E0dAE50856D57Dc7E727adc5f');
            console.log(balance2)
            console.log(ethers.utils.formatEther(balance2))


        } catch(e) {
            console.log(e)
            return false
        }
    }*/

    useEffect(() => {
        //generateMnemonic()
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView keyboardVerticalOffset={StatusBar.currentHeight} behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
                <StatusBar backgroundColor="#181A20" barStyle="light-content" />
                <BackArrow isText={'Wallet'} navigation={props.navigation}/>

                <View style={styles.headerContainer}>
                    <View style={styles.profileContainer}>
                        <Image
                            style={styles.icon}
                            source={require('../../../Assets/Images/defaultAvatar.png')}
                        />
                        <View style={styles.infoContainer}>
                            <Text style={styles.walletName}>My Swapp wallet</Text>
                            <View style={styles.balance}>
                                <Text style={styles.balanceText}>Total balance:</Text>
                                <Text style={styles.balanceValue}>$ 514.25</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.walletAddressContainer}>
                        <Text style={styles.walletAddress}>Bella_Adams.swapp.eth</Text>
                            <Image
                                style={styles.copyImg}
                                source={require('../../../Assets/Images/Copy.png')}
                            />
                    </TouchableOpacity>

                    <View style={styles.buttonsContainer}>
                        <HeaderButton
                            navigation={props.navigation}
                            img={require('../../../Assets/Images/sendBtn.png')}
                            text={'Send'}
                        />
                        <HeaderButton
                            img={require('../../../Assets/Images/shareBtn.png')}
                            text={'Share'}
                        />
                        <HeaderButton
                            img={require('../../../Assets/Images/soonBtn.png')}
                            text={'Soon'}
                        />
                        <HeaderButton
                            img={require('../../../Assets/Images/historyBtn.png')}
                            text={'History'}
                        />
                    </View>
                </View>

                <View style={styles.switchButtonsContainer}>
                    <TouchableOpacity
                        onPress={() => setIsTokens(!isTokens)}
                        style={[styles.switchBtn, {backgroundColor: isTokens ? '#246BFD' : '#131313'}]}
                    >
                        <Image
                            style={styles.switchBtnImg}
                            source={require('../../../Assets/Images/Work.png')}
                        />
                        <Text style={styles.switchBtnText}>Tokens</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setIsTokens(!isTokens)}
                        style={[styles.switchBtn, {backgroundColor: !isTokens ? '#246BFD' : '#131313'}]}
                    >
                        <Image
                            style={styles.switchBtnImg}
                            source={require('../../../Assets/Images/NFT.png')}
                        />
                        <Text style={styles.switchBtnText}>NFT</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{width:'90%', flex:1, alignSelf:'center', marginTop:'4%'}}>
                    {
                        isTokens ? tokens.map(token => (
                            <Token token={token}/>
                        )) :
                            <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                                {
                                    nft.map(el => (
                                        <NFT el={el}/>
                                    ))
                                }
                            </View>

                    }
                </ScrollView>

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
)(WalletScreen);
