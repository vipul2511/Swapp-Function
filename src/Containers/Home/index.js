import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  BackHandler,
  FlatList,
  ScrollView,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DataPoint from './DataPoints';
import Stories from './Stories';
import { useIsFocused } from '@react-navigation/native';
import styles from './Styles';
import Header from './Header';
import ReferEarn from './ReferEarn';
import Token from './Token';
import NewData from './NewData';
import resp from 'rn-responsive-font';
import {resolvePlugin} from '@babel/core';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Home = ({navigation}) => {
  const isFocused=useIsFocused()
  const [currentIndex, setcurrentIndex] = useState(0);
  const [cardData, setcardData] = useState([
    {
      id: 1,
      backgroundColor: '#8CC676',
      totalBalance: 514.25,
      changeToday: 15.5,
      walletId: 'Bella_Adams.swapp.ID',
    },
    {
      id: 2,
      backgroundColor: '#E87B48',
      totalBalance: 514.25,
      changeToday: 13.5,
      walletId: 'Bella_Adams.swapp.ID',
    },
    {
      id: 3,
      backgroundColor: '#246BFD',
      totalBalance: 514.9,
      changeToday: 13.5,
      walletId: 'Bella_Adams.swapp.ID',
    },
  ]);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backButtonHandler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
    };
  }, [backButtonHandler]);
  function backButtonHandler() {
    if (isFocused) {
      BackHandler.exitApp();
      return true;
    }
  }

  const renderFoods = () => {
    const position = new Animated.ValueXY();
    let PanRes = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        position.setValue({x: gestureState.dx, y: gestureState.dy});
      },
      onPanResponderRelease: (evt, gestureState) => {},
    });
    return cardData.map((item, i) => {
      if (i < currentIndex) {
        return null;
      } else {
        return (
          <Animated.View
            key={i}
            //  {...PanRes.panHandlers}
            style={[
              {transform: position.getTranslateTransform()},
              {
                height: hp('26%'),
                width: wp('88%'),
                padding: hp('2'),
                backgroundColor: item.backgroundColor,
                margin:5,
                // marginTop:hp('-5'),
                // zIndex:100,
                borderRadius: wp('3%'),
              },
            ]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View >
                <Text
                  style={{
                    color: 'white',
                    fontSize: resp(13),
                    opacity: 0.5,
                    fontFamily: 'Inter-Regular',
                  }}>
                  Total balance
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      height: wp('3.5'),
                      width: wp('3.5'),
                      overflow: 'hidden',
                      marginTop: hp('0.8'),
                      marginRight: 5,
                    }}>
                    <Image
                      source={require('../../Assets/Swaap/Story/Union.png')}
                      style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: resp(24),
                      // fontWeight: 'bold',
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    {item.totalBalance}
                  </Text>
                </View>
              </View>

              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: resp(13),
                    opacity: 0.5,
                    textAlign:'right',
                    fontFamily: 'Inter-Regular',
                  }}>
                  Change today
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: resp(24),
                    // fontWeight: 'bold',
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  {item.totalBalance}%
                </Text>
              </View>
            </View>
            <View style={{position:'absolute',bottom:hp('1%'),marginLeft:wp('3%')}}>
              <Text
                style={{
                  fontSize: resp(13),
                  color: 'white',
                  opacity: 0.5,
                  letterSpacing: 0.5,
                  fontFamily: 'Inter-Regular',
                  // lineHeight:30
                }}>
                WalletID
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: resp(16),
                    fontWeight: 'bold',
                    fontFamily: 'Inter-Regular',
                  }}>
                  {item.walletId}
                </Text>
                <View
                  style={{
                    height: wp('12'),
                    width: wp('75%'),
                    overflow: 'hidden',
                    marginTop: hp('0.8'),
                    // marginRight: wp('1%'),
                    marginTop: hp('-2'),
                  }}>
                  <Image
                    source={require('../../Assets/Swaap/Story/Fox_image.png')}
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'contain',
                      position:'absolute',
                      right:wp('6%'),
                      bottom:wp('1%')
                    }}
                  />
                </View>
              </View>
            </View>
          </Animated.View>
        );
      }
    });
  };
  return (
    <SafeAreaView style={{flex:1}}>
              <Header />
              <ScrollView>
      <View
        style={{flex: 1, backgroundColor: '#181A20', paddingBottom: 44}}>


  
          <View style={{flexDirection: 'row',margin:5}}>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} horizontal={true}>{renderFoods()}</ScrollView>
          </View>

        <Stories />
        <DataPoint />
        <ReferEarn />
        <Token />
        <NewData />
       
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
