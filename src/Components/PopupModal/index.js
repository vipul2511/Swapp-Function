import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Image,
  Text,
  Pressable,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TransparentButton from '../../Components/TransparentButton';

const PopupModal = ({
  visible,
  onPress,
  children,
  height,
  btntext,
  img,
  btncon,
}) => {
  const [modalVisible, setModalVisible] = useState(visible);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={[styles.centeredView]}>
          <View style={[styles.modalView, {height: hp(height)}]}>
            {img ? (
              img
            ) : (
              <View
                style={{
                  height: hp('23%'),
                  width: wp('100%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../Assets/Images/ModalImage.png')}
                  style={{
                    height: hp('20%'),
                    width: wp('45%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </View>
            )}
            <View style={{marginVertical: hp('1%')}}>
              <Text style={styles.modalText}>Congratulations!</Text>
              <View style={{width: wp('85%')}}>
                <Text style={styles.modalText2}>{children}</Text>
              </View>
              <View style={[{marginVertical: hp('5%')}, btncon]}>
                <TransparentButton
                  title={btntext ? btntext : 'Next'}
                  onPress={onPress}
                  style={{
                    width: wp('85%'),
                    height: hp('7.3%'),
                    backgroundColor: '#246BFD',
                    borderColor: '#246BFD',
                  }}
                  textStyle={{
                    fontWeight: 'bold',
                    fontFamily: 'Poppins-SemiBold',
                  }}
                />

                {/* <TransparentButton title="Get start!" onPress={onPress} style={{width:wp('85%'),height:hp('7.3%'),backgroundColor:'#246BFD',borderColor: null}} textStyle={{fontWeight:'bold'}}/> */}
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[stylesd.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={stylesd.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'rgba( 0, 0, 0, 0.9 )',
  },
  modalText2: {
    color: '#5E6272',
    fontSize: wp('4%'),
    lineHeight: hp('4%'),
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
  },
  modalView: {
    // margin: 10,
    width: wp('90%'),
    backgroundColor: '#262A34',
    borderColor: '#3A3D46',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: hp('3.5%'),
    textAlign: 'center',
    fontSize: wp('6%'),
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default PopupModal;
