import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import TransparentButton from '../../Components/TransparentButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const App = ({onPress, Show, showback,title}) => {
  // console.log(Show + )
  const [modalVisible, setModalVisible] = useState(Show);
  const updateModalstate = () => {
    setModalVisible(!modalVisible);
    showback(!modalVisible);
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            backgroundColor: '#262A34',
            borderTopEndRadius: 25,
            borderTopLeftRadius: 25,
            marginTop: hp('80%'),
            
            paddingBottom: hp('8%'),
          }}>
          <View style={{marginTop: hp('2%')}}>
            <Text
              style={{
                color: '#5E6272',
                fontSize: wp('4%'),
                textAlign: 'center',
                // marginTop: hp('3%'),
                // backgroundColor:'yellowzfs'
                fontFamily:'Inter-Regular'
              }}>
              {title}
            </Text>
          </View>
          <View
            style={{
              marginTop: hp('3%'),
              alignItems: 'center',
            }}>
            <TransparentButton
              title="Got it"
              onPress={updateModalstate}
              style={{
                width: wp('85%'),
                height: hp('7.3%'),
                backgroundColor: '#246BFD',
                borderColor: '#246BFD',
                
                // marginTop:20padding
                // paddingBottom:5
                // marginLeft:wp('5%')
              }}
              textStyle={{fontFamily:'Inter-Bold', fontSize: wp('4.5%')}}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;
