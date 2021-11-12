import React, {useEffect} from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from '../../Components/app-intro-slider';
import styles from './Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Button from '../../Components/Button';
import TransparentButton from '../../Components/TransparentButton';
import {useIsFocused} from '@react-navigation/native';
const slides = [
  {
    key: 1,
    title: 'Your personal data',
    text1: 'Get it.',
    text2: 'Use it.',
    text3: 'Monetize it!',
    image: require('../../Assets/Images/group5.png'),
    backgroundColor: '#2e2d39',
  },
  {
    key: 2,
    title: '',
    text1: 'Lets you to',
    text2: 'share digital',
    text3: 'business',
    image: require('../../Assets/Images/group6.png'),
    backgroundColor: '#2e2d39',
  },
  {
    key: 3,
    title: '',
    text1: 'Control',
    text2: 'your personal',
    text3: 'data',
    image: require('../../Assets/Images/group7.png'),
    backgroundColor: '#2e2d39',
  },
  {
    key: 4,
    text1: 'Make money',
    text2: 'on personal',
    text3: 'data',
    image: require('../../Assets/Images/group8.png'),
    backgroundColor: '#2e2d39',
  },
];
const OnBoarding = ({navigation}) => {
  const isFocused = useIsFocused();
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
  const _renderItem = ({item, index}) => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.mainImageView}>
          <Image
            source={item.image}
            style={{width: wp('69%'), height: hp('35%')}}
          />
        </View>
        <View style={styles.personaldataView}>
          <Text style={styles.personaldata}>{item.title}</Text>
        </View>
        <View style={styles.getitView}>
          <Text style={styles.getitText}>{item.text1}</Text>
          <Text style={styles.getitText}>{item.text2}</Text>
          <ImageBackground
            source={require('../../Assets/Images/Ellipse.png')}
            style={{width: wp('38%')}}>
            <View style={{width: wp('60%')}}>
              <Text style={styles.getitText}>{item.text3}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  };
  const _onDone = () => {
    // navigation.navigate('Auth');
    // navigation.navigate('AddDevice');
  };
  return (
    <>
      <View
        style={{
          width: wp('100%'),
          height: hp('68%'),
          backgroundColor: '#181A20',
        }}>
        <AppIntroSlider
          dotGradientColors={['#65646D', '#65646D']}
          activeDotGradientColors={['#246BFD', '#246BFD', '#246BFD', '#246BFD']}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          bottomButton={false}
          renderItem={_renderItem}
          data={slides}
          onDone={_onDone}
        />
      </View>
      <View
        style={{
          width: wp('100%'),
          height: hp('50%'),
          backgroundColor: '#181A20',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: wp('2%'),
          }}>
          <Button
            title="Create your Swapp"
            style={styles.createSwapp}
            onPress={() => 
              {
                navigation.navigate('InitialScreen')
                //navigation.navigate('TabNav')
                //props.navigation.navigate('TabNav');
              }
              
            }
          />
          <View style={{marginTop: hp('3%')}}>
            <TransparentButton
              title="Import account"
              style={styles.createSwapp}
              onPress={() =>
                navigation.navigate('TypeWordPhrase', {
                  InitalScreen: 'Import Account',
                })
              }
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp('3%'),
          }}>
          <Text
            style={{
              color: '#5E6272',
              fontSize: wp('3.8%'),
              fontFamily: 'Inter-Regular',
            }}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text
              style={{
                color: '#246BFD',
                fontSize: wp('3.8%'),
                fontFamily: 'Inter-Bold',
                textShadowColor: '#246BFD',
                textShadowOffset: {width: -1, height: 0},
                textShadowRadius: 30,
              }}>
              {' '}
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default OnBoarding;
