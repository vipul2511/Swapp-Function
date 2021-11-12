import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Modal,
  Alert, SafeAreaView,
} from 'react-native';
import styles from './Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import PopupModal from '../../../Components/PopupModal';
import BackArrow from "../../../Components/CreatingAccount/BackArrow";

const CreatePasscode = ({ navigation }) => {
  const [password, setPassword] = useState(['', '', '', '', '', '']);
  const [match, setMatch] = useState(false);
  const [firstVersionPassword, setFirstVersionPassword] = useState([]);
  const [biometryType, setbiometryType] = useState('');
  const [showModal, setShowModal] = useState(false);
  let Numbers = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 0 },
  ];

  const OnPressNumber = num => {
    let tempCode = password;
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] == '') {
        tempCode[i] = num;
        break;
      }
      else {
        continue;
      }
    }

    if (password[4] != '') {
      if (firstVersionPassword[0]) {
        if (password.join(',') === firstVersionPassword.join(',')) {
          setMatch(true)
          setShowModal(true)
        }
      } else {
        setFirstVersionPassword(password)
        tempCode = ["", "", "", "", ""];
      }
      //navigation.goBack();
    }
    setPassword(prePassword => ([...tempCode]));
  };

  const OnpressCancel = () => {
    setMatch(false)
    let tempCode = password;
    if (password != ['', '', '', '', '', '']) {
      for (var i = tempCode.length - 1; i >= 0; i--) {
        if (tempCode[i] !== '') {
          tempCode[i] = '';
          break;
        } else {
          continue;
        }
      }
      setPassword(prePassword => ([...tempCode]));
    }


  };

  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then(bioType => {
        setbiometryType(bioType);
        if (bioType == "Biometrics") {
          showAuthenticationDialog();
        }
        if (bioType == "TouchID") {
          showAuthenticationDialog();
        }
        if (bioType == "Face ID") {
          showAuthenticationDialog();
        }
      })
      .catch(error => console.log('isSensorAvailable error => ', error));

  }, []);

  const Getmessage = () => {
    // console.log()
    const bioType = biometryType;
    if (bioType === 'Face ID') {
      return 'Scan your Face on the device to continue';
    } else {
      return 'Scan your Fingerprint on the device scanner to continue';
    }
  };

  const showAuthenticationDialog = () => {
    const bioType = biometryType;

    if (bioType !== null && bioType !== undefined) {
      FingerprintScanner.authenticate({
        description: Getmessage(),
      })
        .then(() => {
          setShowModal(true);
        })
        .catch(error => {
          console.log('Authentication error is => ', error);
        });
    } else {
      console.log('biometric authentication is not available');
    }
  };

  return (
    <SafeAreaView style={styles.MainCon}>
      <BackArrow navigation={navigation} />
      <Text style={{ color: '#FFFFFF', fontSize: wp('6%'), fontFamily: 'Inter-Bold', width: wp('90%'), alignSelf: 'center' }}>Create new passcode</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('7%') }}>
        <Text style={{ color: match ? '#A5F59C' : '#FFFFFF', fontFamily: 'Inter-SemiBold' }}>
          {
            firstVersionPassword[0] ? 'Confirm new passcode' :
              'Create passcode'
          }
        </Text>
      </View>
      <View style={styles.CodeCon}>
        {password.map((p, index) => {
          let style = p !== '' ? [styles.Code2, match ? { backgroundColor: '#A5F59C', shadowColor: '#A5F59C' } : { backgroundColor: '#246BFD', shadowColor: '#246BFD' }] : styles.Code1;
          return <View style={style} key={index} />;
        })}
      </View>
      <View style={styles.NumberCon}>
        {/* <Text>{biometryType}</Text> */}
        {Numbers.map(({ id, index }) => {
          return (
            <TouchableOpacity
              style={styles.Number}
              key={index}
              onPress={() => OnPressNumber(id)}>
              <Text style={styles.NumberText}>{id}</Text>
            </TouchableOpacity>
          );
        })}

        <View style={{ position: 'absolute', bottom: hp('3.5%'), left: wp('15%') }}>
          <TouchableOpacity
            onPress={() => showAuthenticationDialog()}>
            <View style={{ height: 50, width: 50, overflow: 'hidden' }}>
              <Image source={require('../../../Assets/Images/TouchId.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />

            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ position: 'absolute', bottom: hp('5%'), right: wp('15%') }}>
          <TouchableOpacity onPress={OnpressCancel}>
            {/* <Image source={require('../../Assets/Images/BackText.png')} /> */}
            <View style={{ height: 35, width: 35, overflow: 'hidden' }}>
              <Image source={require('../../../Assets/Images/BackText.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />

            </View>
          </TouchableOpacity>
        </View>
        {showModal && <PopupModal visible={true} onPress={() => setShowModal(false)} />}
        {/* -------------- */}

        {/* --------------------- */}
      </View>
    </SafeAreaView>
  );
};

export default CreatePasscode;
