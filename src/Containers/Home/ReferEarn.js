import React from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import resp from 'rn-responsive-font';
import {Piggy} from '../../Assets/Images';

const ReferEarn = () => {
  return (
    <View style={{marginTop: hp('3')}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#1F222A',
          marginHorizontal: wp('5'),
          borderRadius: 12,
        }}>
        <View style={{marginLeft: wp('5'), paddingVertical: hp('3')}}>
          <Text
            style={{
              color: 'white',
              marginBottom: 10,
              fontSize: resp(24),
              fontFamily: 'Poppins-SemiBold',
            }}>
            {'Refer & Earn'}
          </Text>
          <Text
            style={{
              marginRight: wp('36'),
              color: '#5E6272',
              lineHeight: 23,
              fontFamily: 'Inter-Medium',
            }}>
            Invite your friends with a $5 gift and get 50 Swapps on your wallet
            account
          </Text>
        </View>
        <View
          style={{
            height: hp('21'),
            width: wp('58'),
            position: 'absolute',
            right: wp('2'),
          }}>
          <Image source={Piggy} style={{height: '100%', width: '100%',resizeMode:'contain'}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ReferEarn;
