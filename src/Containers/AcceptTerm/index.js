import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
} from 'react-native';
import Header from '../../Components/Header';
import SelectionBtn from '../../Components/SelectionBtn';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TransparentButton from '../../Components/TransparentButton';
import ValidationPopup from '../../Components/ValidationPopup';
import PopupModal from '../../Components/PopupModal';
import Styles from './styles';
import Button from '../../Components/CreatingAccount/Button';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
import EncryptedStorage from 'react-native-encrypted-storage';
const AcceptTerm = (props) => {
    const [showValidpop, setshowValidpop] = React.useState(false);
    const [Selectedvalue, setselectedvalue] = React.useState('');
    // const [showModal,setshowModal]= React.useState(false);
    const [PopModal, setPopModal] = useState(false);
    const selection = ['Privacy', 'Monetize', 'Both'];
    const GetSelected = value => {
        setselectedvalue(value);
    };
    const updateshow = async() => {
        if (Selectedvalue === '') {
            setshowValidpop(!showValidpop);
        } else {
            let obj;
            if(Selectedvalue=="Privacy") obj={Privacy:true}
            if(Selectedvalue=="Monetize") obj={Monetize:true}
            if(Selectedvalue=="Both") obj={Both:true}
            props.sendwording({data:obj,token:props.wording.secretSuccess.token});
            setPopModal(true)
            await EncryptedStorage.setItem('@processCompleted',JSON.stringify(true));

        }
    };

    return (
        <View style={{flex: 1, backgroundColor: '#181A20'}}>
            <BackArrow isText={'Registration'} />
            <View
                style={{
                    height: hp('22%'),
                    width: wp('22%'),
                    overflow: 'hidden',
                    marginLeft: wp('5%'),
                }}>
                <Image
                    source={require('../../Assets/Images/groupd4.png')}
                    style={{resizeMode: 'contain', height: '100%', width: '100%'}}
                />
            </View>
            <View style={Styles.FontHeadCon}>
                <Text style={Styles.headfont}>Choose the type of use of </Text>
                <Text style={Styles.headfont}>your personal data</Text>
            </View>
            <SelectionBtn selection={selection} GetSelected={GetSelected} />

            {!showValidpop ? (
                // <TransparentButton
                //   onPress={updateshow}
                //   title="Got it"
                //   style={{
                //     width: wp('85%'),
                //     height: hp('7.3%'),
                //     backgroundColor: '#246BFD',
                //     borderColor: '#246BFD',
                //     // marginLeft: ,
                //     marginLeft: wp('7%'),
                //     marginTop: hp('5%'),
                //   }}
                //   textStyle={{fontWeight: 'bold', fontSize: 14}}
                // />
                <Button disabled={props.wording.loader} loading={props.wording.loader} handleFunction={updateshow} btnText={'Got it'} />
            ) : null}

            {/* {PopModal && (
        <PopupModal
          visible={true}
          children={
            'You have registered your Swap account. Have a good use of the app.'
          }
          height={'55%'}
          onPress={() => navigation.navigate('OnBoarding')}
        />
      )} */}

            {PopModal && (
                <PopupModal
                    btncon={{marginVertical: hp('3%')}}
                    visible={true}
                    btntext={'Get started!'}
                    children={
                        'You have successfully protected your Swapp! Please keep you back-up phrase safe and sound.'
                    }
                    height={'57%'}
                    onPress={() => {
                        setPopModal(false)
                        props.navigation.navigate('TabNav')}}
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
                                source={require('../../Assets/Images/checkcircle.png')}
                                style={{
                                    height: hp('20%'),
                                    width: wp('35%'),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Icon
                                    name="check"
                                    // backgroundColor="white"
                                    color="white"
                                    size={50}

                                    // onPress={this.loginWithFacebook}
                                />
                            </ImageBackground>
                        </View>
                    }
                />
            )}

            {showValidpop == true && (
                <ValidationPopup title={"You can choose 1 option"} Show={true} showback={updateshow} />
            )}
        </View>
    );
};
const mapStateToProps = (state) => ({
    wording: state.wording,
    auth: state.auth
});

const mapDispatchToProps = (dispatch) =>  ({
    sendwording: (data) => {dispatch({type: "SET_WORDING", data})},
    earseEmailData: () => {dispatch({type: "ERASE_EMAIL_DATA"})},
});

export default connect(mapStateToProps,mapDispatchToProps)(AcceptTerm);
