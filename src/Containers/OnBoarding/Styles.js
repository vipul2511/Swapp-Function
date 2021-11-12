import {StyleSheet,Dimensions,Platform} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height
const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'transparent',
    color: '#fff',
  },
  headerText: {
    fontFamily: Platform.OS=="android"?'Roboto':'Gill Sans',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 36,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: 16,
    marginTop: 12,
  },
  backAction: {
    color: '#fff',
  },
  mainContainer: {
    backgroundColor: '#2e2d39',
    color: '#fff',
    flex: 1,
  },
  mainImageView:{
     marginVertical:hp('6%'),
     marginHorizontal:wp('18%')
  },
  scrollContainer: {
    marginLeft: 30,
    marginRight: 30,
  },
  mainImageContainer: {
    width:wp('100%'),
    height:hp('90%'),
    color:'#86888F'
  },
  personaldata:{
  color:'#5E6272',
  fontSize:wp('4%'),
  fontWeight:'bold'
  },
  getitView:{
  width:wp('100%'),
  position:'absolute',
  top:hp('46%'),
  left:wp('8%')
  },
  getitText:{
   fontSize:wp('9%'),
   fontFamily:'Poppins-SemiBold',
   color:'#FFFFFF',
   lineHeight: wp('10%'),
  },
  personaldataView:
    {position:'absolute',top:hp('40%'),left:wp('8%')},
  textContainer: {
    marginBottom: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  textTitle: {
    fontFamily: Platform.OS=="android"?'Roboto':'Gill Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  textDetail: {
    fontFamily: Platform.OS=="android"?'Roboto':'Gill Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF',
    opacity: 0.55,
    alignItems: 'center',
  },
  dotStyle: {
    backgroundColor: '#65646D',
    width: 10,
    // position:'absolute',
    // top:0
  },
  activeDotStyle: {
    backgroundColor: '#246BFD',
    // top:0,
    // position:'absolute',
    width: 10,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 100,
  },
  btnContainer: {
    paddingLeft: 80,
    paddingRight: 80,
  },
  createSwapp:{width:wp('85%'),
   height:hp('7.3%')
},
 

});

export default styles;
