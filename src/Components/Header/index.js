import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = ({navigation,hide,setting,changePassword,save,onSave}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: hp('2%'),justifyContent:'space-between'}}>
      <View>
        <TouchableOpacity
          style={{marginLeft: wp('5%')}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../Assets/Images/arrow.png')}  style={{width:hp('5%'),height:hp('5%')}} />

          {/* <ArrowLeft  height={15} width={15} /> */}
        </TouchableOpacity>
      </View>
      {!hide?<View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text
          style={{
            marginRight: wp('14%'),
            fontSize: wp('5.5%'),
            fontWeight: '600',
            color: 'white',
            fontFamily:'Poppins-SemiBold'
          }}>
          Registration
        </Text>
      </View>:null}
      {changePassword?<View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text
          style={{
            marginRight: wp('14%'),
            fontSize: wp('5.5%'),
            fontWeight: '600',
            color: 'white',
            fontFamily:'Poppins-SemiBold'
          }}>
          Change Password
        </Text>
      </View>:null}
      {setting?
      <>
      <View style={{alignItems: 'center', justifyContent: 'center',}}>
        <Text
          style={{
            // marginRight: wp('14%'),
            fontSize: wp('5.5%'),
            fontWeight: '600',
            color: 'white',
            fontFamily:'Poppins-SemiBold'
          }}>
          Settings
        </Text>
      </View>

      <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center',marginRight:wp('3%')}} onPress={onSave}>
      {save?<Text
        style={{
          color: '#246BFD',
          fontSize: wp('4.5%'),
          fontFamily: 'Inter-Bold',
          textShadowColor: '#246BFD',
          textShadowOffset: {width: -1, height: 0},
          textShadowRadius: 30,
        }}>
        {' '}
        Save
      </Text>:null}
    </TouchableOpacity>
    </>
      :null}
    </View>
  );
};

export default Header;
