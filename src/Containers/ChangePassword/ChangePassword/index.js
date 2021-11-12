import {continueStatement} from '@babel/types';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView,ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Button from '../../../Components/CreatingAccount/Button';
import CustomInput from '../../../Components/CustomInput';
import Header from '../../../Components/Header';
// import Header from '../../../components/Swapp-com/Header';
import TransparentButton from '../../../Components/TransparentButton';
import Condition from './Condition';

const ChangePassword = ({navigation}) => {
  const [oldpassword, setoldpassword] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [checkcondition, setcheckcondition] = useState(false);
  const [uppercase, setuppercase] = useState(false);
  const [lowercase, setlowercase] = useState(false);
  const [onesymbol, setonesymbol] = useState(false);
  const [onenum, setonenum] = useState(false);
  const [confirmvalid, setconfirmvalid] = useState(false);
  const [isValid, setisValid] = useState(null);
  const [disable, setdisable] = useState(false);
  const [error,setError]=useState('');

  React.useEffect(() => {
    //   console.log(confirmpassword.length)
    // let pattern = new RegExp('^(?=.*[a-z])');
    var pattern1 = new RegExp('^(?=.*[a-z])');
    if (pattern1.test(newpassword)) {
      setlowercase(true);
      //   console.log('d' + pattern1);
    } else {
      setlowercase(false);
    }

    var pattern2 = new RegExp('^(?=.*[A-Z])');
    if (pattern2.test(newpassword)) {
      setuppercase(true);
      //   console.log('d' + pattern1);
    } else {
      setuppercase(false);
    }

    var pattern4 = new RegExp('^(?=.*\\d)');
    if (pattern4.test(newpassword)) {
      setonenum(true);
      //   console.log('d' + pattern1);
    } else {
      setonenum(false);
    }
  }, [newpassword]);

  const Btnhandler = () => {


    if (newpassword.length >= 8&&confirmpassword.length >= 8) {
      if(newpassword==confirmpassword){
        setdisable(true);
        navigation.navigate('ChangePassCode')
      }else{
      setError('Password should match')
      setdisable(false);
      }

    } else {
      console.log('FAIL');
      setError('Must be a least 8 characters')
      setdisable(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#181A20'}}>
<Header changePassword hide navigation={navigation}  />
<ScrollView  >
      <View style={{marginHorizontal: wp('6'),marginTop:hp('6%')}}>
        <View>
          <CustomInput
            header={'ENTER YOUR OLD PASSWORD'}
            placeholder={''}
            eye
            eyeStyle={{
              height: 20,
              width: 20,
              overflow: 'hidden',
              position: 'absolute',
              right: wp('1%'),
              top: hp('4%'),
              zIndex: 100,
            }}
            securetext
            onchange={e => setoldpassword(e)}
            value={oldpassword}
            // warning={warning}
            noBorder
            // style={{
            //   color: warning ? '#FF0B80' : '#fff',
            //   fontFamily: 'Inter-Bold',
            // }}
          />
        </View>

        <View style={{marginTop: hp('2')}}>
          <CustomInput
            header={'NEW PASSWORD (MIN 8 CHARS)'}
            placeholder={''}
            eye
            eyeStyle={{
              height: 20,
              width: 20,
              overflow: 'hidden',
              position: 'absolute',
              right: wp('1%'),
              top: hp('4%'),
              zIndex: 100,
            }}
            securetext
            onchange={text => {
              setnewpassword(text);
            }}
            value={newpassword}
            // warning={warning}
            noBorder
            // style={{
            //   color: warning ? '#FF0B80' : '#fff',
            //   fontFamily: 'Inter-Bold',
            // }}
          />
        </View>

        <Condition pattern={uppercase} Title={'one uppercase character'} />
        <Condition pattern={lowercase} Title={'one lowercase character'} />
        <Condition pattern={onenum} Title={'one number'} />

        <View style={{marginTop: hp('2'),marginBottom:hp('3')}}>
          <CustomInput
            header={'CONFIRM PASSWORD'}
            placeholder={''}
            eye
            eyeStyle={{
              height: 20,
              width: 20,
              overflow: 'hidden',
              position: 'absolute',
              right: wp('1%'),
              top: hp('4%'),
              zIndex: 100,
            }}
            securetext
            onchange={e => setconfirmpassword(e)}
            value={confirmpassword}
            // warning={warning}
            noBorder
            // style={{
            //   color: warning ? '#FF0B80' : '#fff',
            //   fontFamily: 'Inter-Bold',
            // }}
          />
          {!disable ? (
            <Text style={{marginTop: hp('1'), color: '#5E6272'}}>
              {error}
            </Text>
          ) : null}
        </View>
        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {!disable ? (
            <TransparentButton
              Btnsize={{width: '95%'}}
              title={'Next changes'}
              style={{
                borderColor: 'trasparent',
                borderWidth: 0,
                //   width:44,
                height: hp('7'),
                marginTop: hp('25'),
                backgroundColor: 'gray',
                // padding:44,
                elevation: 4,
              }}
              //   disabled={disable}
              onPress={Btnhandler}
              // selected={false}
            />
          ) : (
            <TransparentButton
              Btnsize={{width: '95%'}}
              title={'Next changes'}
              style={{
                borderColor: 'trasparent',
                borderWidth: 0,
                //   width:44,
                height: hp('7'),
                marginTop: hp('25'),
                backgroundColor: '#246BFD',
                // padding:44,
                elevation: 4,
              }}
              //   disabled={disable}
              onPress={Btnhandler}
              // selected={false}
            />
          )}
        </View> */} 
      </View>
      </ScrollView  >
      <Button inActive={!confirmpassword} handleFunction={Btnhandler} btnText={'Next changes'}/>
    </SafeAreaView>
  );
};

export default ChangePassword;
