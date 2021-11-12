import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import resp from 'rn-responsive-font';
import * as Progress from 'react-native-progress';
import {Finance, Ticks, Youtube} from '../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
const DataPoints = () => {
  const navigation = useNavigation();
  const DataPoints = [
    {
      Image1: Youtube,
      Image2: Ticks,
      Title: 'Entertaiment',
      Subtitle: 'No sources added',
      progress: 1,
      Point: '24/24',
      progresscolor: '#A5F59C',
    },
    {
      Image1: Finance,
      //   Image2: Ticks,
      Title: 'Financial',
      Subtitle: '150 Points added',
      progress: 0.8,
      Point: '150/200',
      progresscolor: '#246BFD',
    },
  ];
  return (
    <View style={{marginTop: heightPercentageToDP('1')}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: widthPercentageToDP('5.5'),
        }}>
        <Text style={{color: 'white', fontSize: resp(20),fontFamily:'Poppins-SemiBold'}}>Data Points</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Setting')}>
          <View
            style={{
              width: widthPercentageToDP('20'),
              borderColor: '#246BFD',
              borderWidth: 1.5,
              borderRadius: 20,
              paddingVertical: 5,
              marginBottom: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#246BFD',
                fontFamily:'Inter-Medium'
              }}>
              Show all
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: widthPercentageToDP('5'),
          marginTop: heightPercentageToDP('1'),
        }}>
        {DataPoints.map((item, index) => {
          return (
            <View
              style={{
                backgroundColor: '#1F222A',
                height: heightPercentageToDP('23'),
                width: widthPercentageToDP('43'),
                borderRadius: 12,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: heightPercentageToDP('2'),
                }}>
                <View
                  style={{
                    height: heightPercentageToDP('6'),
                    width: widthPercentageToDP('24'),
                    marginLeft:widthPercentageToDP('-1%')
                  }}>
                  <Image
                    source={item.Image1}
                    style={{
                      height: '100%',
                      width: '50%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View
                  style={{
                    height: heightPercentageToDP('5'),
                    width: widthPercentageToDP('6'),
                    // backgroundColor:'red',
                    marginTop: heightPercentageToDP('-1'),
                  }}>
                  <Image
                    source={item.Image2}
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  marginLeft: widthPercentageToDP('4'),
                  marginTop: heightPercentageToDP('2'),
                }}>
                
                <Text style={{color: 'white', fontSize: resp(17),fontFamily:'Inter-Regular'}}>
                  {item.Title}
                </Text>
                <Text style={{color: '#5E6272', lineHeight: 30,fontFamily:'Inter-Regular'}}>
                  {item.Subtitle}
                </Text>
              </View>

              <View
                style={{
                  //   marginLeft: widthPercentageToDP('5'),
                  marginTop: heightPercentageToDP('1'),
                  marginHorizontal: heightPercentageToDP('2.5'),
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <View style={{marginTop: heightPercentageToDP('0.5'),justifyContent:'center',alignItems:'center'}}>
                  <Progress.Bar
                    progress={item.progress}
                    width={widthPercentageToDP('18')}
                    height={heightPercentageToDP('0.6')}
                    borderColor={'transparent'}
                    unfilledColor={'rgba(255,255,255,0.1)'}
                    color={item.progresscolor}
                  />
                </View>
                <Text style={{color: 'white', fontSize: resp(12),fontFamily:'Inter-Regular'}}>
                  {item.Point}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default DataPoints;
