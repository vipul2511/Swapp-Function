import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Backbtn,
  Close,
  MoreIcon,
  placeholderBanner,
  Tick,
} from '../../assets/Images';

const Header = ({navigation, hide}) => {
  return (
    <View style={{marginTop: hp('3%'),marginBottom:hp('2%')}}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <TouchableOpacity style={{marginLeft: wp('5%')}} onPress={() => {}}>
          <Image source={require('../../Assets/Swaap/Story/BellIcon.png')} style={{width: hp('5%'), height: hp('5%')}} />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Poppins-SemiBold',
              fontSize: wp('5%'),
            }}>
            Home
          </Text>
        </View>
        <TouchableOpacity style={{marginRight: wp('5%')}} onPress={() => {}}>
          <Image source={require('../../Assets/Swaap/Story/Mask.png')} style={{width: hp('5%'), height: hp('5%')}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
