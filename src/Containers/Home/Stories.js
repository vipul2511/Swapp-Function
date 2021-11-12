/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
const StoryData = [
  {
    Img: require('../../Assets/Swaap/Story/Story1.png'),
    Content: 'The Rise of “DeFi”',
  },
  {
    Img: require('../../Assets/Swaap/Story/Story2.png'),
    Content: 'DeFi Hits Record $13.6B',
  },
  {
    Img: require('../../Assets/Swaap/Story/Story3.png'),
    Content: 'Updated privacy policy',
  },
  {
    Img: require('../../Assets/Swaap/Story/Story4.png'),
    Content: '$1B Ether Staked on ETH 2.0',
  },
];

const StoryRender = ({item}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        padding:9,
        marginVertical: heightPercentageToDP('2%'),
      }}>
      <View
        style={{
          height: widthPercentageToDP('18%'),
          width: widthPercentageToDP('18%'),
          backgroundColor: '#181A20',
          borderRadius: 200,
   
          borderWidth: 1.5,
          borderColor: '#246BFD',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,

          elevation: 11,
        }}>
        <View
          style={{
            height: widthPercentageToDP('14.8%'),
            width: widthPercentageToDP('14.8%'),
            borderRadius: 200,
          }}>
          <Image source={item.Img} style={{height: '100%', width: '100%'}} />
        </View>
      </View>
      <View
        style={{
          width: widthPercentageToDP('20'),
          height:'auto',
          marginVertical: heightPercentageToDP('1'),
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            opacity: 0.5,
            textAlign: 'center',
            fontSize: 10,
            fontFamily: 'Inter-Regular',
          }}>
          {item.Content}
        </Text>
      </View>
    </View>
  );
};

const Stories = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      
      }}>
      <FlatList
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={StoryData}
        renderItem={StoryRender}
      />
    </View>
  );
};

export default Stories;
