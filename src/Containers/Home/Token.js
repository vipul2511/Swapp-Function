import React, { useEffect,useState } from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import resp from 'rn-responsive-font';
import {mining} from '../../Assets/Images';
import { VibrancyView } from "react-native-blur";
import BlurOverlay,{closeOverlay,openOverlay} from 'react-native-blur-overlay';
import {useNavigation} from '@react-navigation/native';
const Token = () => {
  const navigation = useNavigation();
  const [swappPoint,setSwappPoint]=useState(50)
  useEffect(()=>{
   openOverlay();
  },[])
  return (
    <View style={{marginTop: hp('3')}}>
      
      <View
        style={{
          backgroundColor: '#1F222A',
          marginHorizontal: wp('5'),
          borderRadius: 12,
          //   height: hp(''),er
          overflow: 'hidden',
          // opacity:4
        }}>
        <View style={{marginLeft: wp('5'), paddingVertical: hp('3')}}>
          <Text
            style={{
              color: 'white',
              fontSize: resp(24),
              // fontWeight: 'bold',
              // marginBottom: hp('2'),
              marginRight: wp('40%'),
              // lineHeight: 30,
              zIndex: 100,
              fontFamily:'Poppins-SemiBold'
            }}>
            {'Get a free Swapp token!'}
          </Text>
          <View style={{height: wp('12'), width: wp('21'),position:'absolute'}}>
            <Image
              source={require('../../Assets/Images/swappToken.png')}
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'contain',
                 top:Platform.OS=="ios"?hp('6%'):hp('7%'),
                // backgroundColor:'red',
                marginLeft: wp('-1%'),
              }}
            />
          </View>
          <View
            style={{
              borderColor: '#94F0F0',
              borderWidth: 1,
              width: wp('20'),
              borderRadius: 8,
              // position:'absolute'
              marginTop: hp('2'),
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: 5,
                color: '#94F0F0',
                fontSize: resp(12),
                fontFamily:'Inter-Medium'
              }}>
              {swappPoint} Swapps
            </Text>
          </View>
        </View>
        <View
          style={{
            height: hp('30%'),
            width: wp('65%'),
            position: 'absolute',
            right:wp('-10%'),
            top:Platform.OS=="android"?hp('2%'):hp('0%'),
          }}>
          <Image source={mining} style={{height: '100%', width: '100%'}}/>
        </View>   
        <ImageBackground
        source={require('../../Assets/Images/blurImg.png')}
          style={{
            // backgroundColor: 'rgba(0,0,0,0.3)',
            flexDirection: 'row',
            
          }}>
          <View style={{padding: 4, paddingVertical: 10}}>
            <Text
              style={{fontSize:resp(13),marginRight: wp('30'),marginLeft:wp('5'), lineHeight: 28, color: '#5E6272',fontFamily:'Inter-Medium'}}>
              Store digital assets and euros together. Set your account.now
            </Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate('ChangePassword')}
              style={{
                backgroundColor: 'white',
                // height: hp('5'),
                width: wp('17'),
                position: 'absolute',
                right: 10,
                top: wp('5'),
                borderRadius: 4,
                paddingVertical: 2,
              }}>
              <Text style={{textAlign: 'center',fontSize:wp('3%') ,padding: 5,fontFamily:'Inter-Medium'}}>Open</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      
    
        {/* </VibrancyView> */}
      </View>
    </View>
  );
};

export default Token;
