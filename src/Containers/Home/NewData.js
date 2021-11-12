import React from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import resp from 'rn-responsive-font';
import {Piggy, Scan, AddUser, Paperplus} from '../../Assets/Images';

const Data = [
  {
    Img: Scan,
    Content: 'Verify your account',
  },
  {
    Img: Paperplus,
    Content: 'Connect all data points',
  },
  {
    Img: AddUser,
    Content: 'Invite more friends',
  },
];

const NewData = () => {
  return (
    <View style={{marginTop: hp('3')}}>
      <View
        style={{
          backgroundColor: '#1F222A',
          marginHorizontal: wp('5'),
          borderRadius: 12,
        }}>
        <View style={{marginLeft: wp('5'), paddingVertical: hp('3')}}>
          <Text
            style={{
              color: 'white',
              fontSize: resp(20),
              marginBottom: 3,
              fontSize: resp(24),
              // fontWeight: 'bold',
              fontFamily: 'Poppins-SemiBold',
            }}>
            {'Your data earnings'}
          </Text>
          <Text
            style={{color: '#5E6272', fontFamily: 'Inter-Medium', lineHeight: 23}}>
            Fast doesn’t mean expensive.{'\n'}send money internationally at best
            rates
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: wp('3')}}>
          {Data.map((item, index) => {
            return (
              <View
                key={index}
                style={{paddingHorizontal: wp('1.5'), paddingBottom: hp('3')}}>
          
                <TouchableOpacity
                  style={{
                    height: hp('17'),
                    backgroundColor: '#262A34',
                    borderColor: '#3A3D46',
                    borderWidth: 1,
                    width: wp('25'),
                    borderRadius: 7,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: hp('10'),
                      width: wp('12'),
                      // backgroundColor: 'red',
                      overflow: 'hidden',
                      marginTop: hp('-3'),

                    }}>
                    <Image
                      source={item.Img}
                      style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      // fontWeight: '800',
                      fontSize:wp('3.2%'),
                      marginTop: hp('-1'),
                      fontFamily: 'Inter-Medium',
                    }}>
                    {item.Content}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default NewData;
