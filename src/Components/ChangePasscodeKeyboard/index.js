import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FingerprintScanner from 'react-native-fingerprint-scanner';
const index = ({navigation,onSucess,textPin}) => {
  const [password, setPassword] = useState(['', '', '', '', '', '']);
  const [inital, setinital] = useState(['', '', '', '', '', '']);
  const [confirm,setConfirm]=useState(false)
  const [biometryType, setbiometryType] = useState(null);
  let Numbers = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 0},
  ];

  const OnPressNumber = num => {
    let tempCode = password;
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] == '') {
        tempCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    setPassword([...tempCode]);
    if(tempCode[5]!=''){
        onSucess(password);
        if(textPin!="Repeat the new PIN code")  setPassword([...inital])
        if(textPin=="Repeat the new PIN code")  setConfirm(true)
      }
  };

  const OnpressCancel = () => {
    let tempCode = password;
    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] !== '') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    onSucess(tempCode);
    setPassword([...tempCode]);
  };

  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then(bioType => {
        setbiometryType(bioType);
        // if(bioType=="Biometrics"){
        //   showAuthenticationDialog();
        // }
        // if(bioType=="TouchID"){
        //   showAuthenticationDialog();
        // }
        // if(bioType=="Face ID"){
        //   showAuthenticationDialog();
        // }
      })
      .catch(error => console.log('isSensorAvailable error => ', error));

  }, [navigation]);

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
          onSucess();
        })
        .catch(error => {
          console.log('Authentication error is => ', error);
        });
    } else {
      console.log('biometric authentication is not available');
    }
  };
  // useEffect(() => {
  // FingerprintScanner.isSensorAvailable()

  return (
    <>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
<Text style={{color: 'white',fontFamily:'Inter-Bold',fontSize:wp('4.2%')}}>{textPin}</Text>
      </View>
      <View style={styles.CodeCon}>
        {password.map((p, index) => {
          let style = p !== '' ? [styles.Code2,{backgroundColor:confirm?'#A5F59C':'#246BFD'},{shadowColor:confirm?'#A5F59C':'#246BFD'}]: styles.Code1;
          return <View style={style} key={index} />;
        })}
      </View>
      <View style={styles.NumberCon}>
        {/* <Text>{biometryType}</Text> */}
        {Numbers.map(({id, index}) => {
          return (
            <View key={index}>
              <TouchableOpacity
                style={styles.Number}
                onPress={() => OnPressNumber(id)}>
                <Text style={styles.NumberText}>{id}</Text>
              </TouchableOpacity>
            </View>
          );
        })}

        <View style={{position: 'absolute', bottom: hp('2%'), left: wp('15%')}}>
          <TouchableOpacity
            onPress={() => showAuthenticationDialog()}>
            <View style={{height:50,width:50,overflow:'hidden'}}>
              <Image source={require('../../Assets/Images/TouchId.png')} style={{height:'100%',width:'100%',resizeMode:'contain'}} />

              </View>
          </TouchableOpacity>
        </View>
        <View
          style={{position: 'absolute', bottom: hp('3%'), right: wp('15%')}}>
          <TouchableOpacity onPress={OnpressCancel}>
            {/* <Image source={require('../../Assets/Images/BackText.png')} /> */}
            <View style={{height:35,width:35,overflow:'hidden'}}>
              <Image source={require('../../Assets/Images/BackText.png')} style={{height:'100%',width:'100%',resizeMode:'contain'}} />

              </View>
          </TouchableOpacity>
        </View>
        {/* -------------- */}

        {/* --------------------- */}
      </View>
    </>
  );
};

export default index;
