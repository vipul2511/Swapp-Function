import {StyleSheet, Dimensions} from 'react-native';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#181A20'
    },
    closeIcon: {
        width:wp('6%'),
        height:wp('6%'),
        resizeMode: 'contain'
    },
    wordBoard: {
        marginTop:hp('2%'),
        width: wp('90%'),
        alignSelf:'center',
        height: hp('27%'),
        backgroundColor: '#262A34',
        borderWidth: 1,
        borderRadius: wp('2.6%'),
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical:hp('0.6%'),
        paddingHorizontal:wp('1.4%'),
    },
    wordBtnContainer: {
        marginVertical:hp('0.6%'),
        width:'30%',
        height:hp('4.8%'),
        /*marginHorizontal:wp('1.2%'),
        marginVertical:hp('0.4%'),*/
        paddingHorizontal:wp('2.4%'),
        paddingVertical:wp('0.6%'),
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        borderWidth: 1,
        borderRadius: wp('1.4%'),
    },
    wordBtnText: {
        fontSize:wp('3.6%'),
        fontFamily:'Inter-Medium'
    },
    attachedWordContainer: {
        height:'20%',
        paddingHorizontal:'1%',
        marginHorizontal:'1%',
        marginVertical:'1%',
        display:'flex',
        flexDirection:'row',
        borderColor: '#5E6272',
        borderWidth: 1,
        borderRadius: wp('1.2%'),
        alignItems:'center'
    },
    titleContainer: {
        width: wp('90%'),
        alignSelf:'center',
        height: hp('18%'),
    },
    title: {
        color: '#FFFFFF',
        fontSize:hp('3.7%'),
        fontFamily:'Poppins-SemiBold'
    },
    text: {
        color: '#5E6272',
        fontSize:hp('2.3%'),
        fontFamily:'Inter-Regular'
    },
    attachedWordText: {
        color:'#FFFFFF',
        fontSize:wp('4.0%'),
        paddingHorizontal:wp('1.8%'),
        fontFamily:'Inter-Medium'
    },
    wordBtnBlock: {
        height:hp('24%'),
        marginTop:'auto',
        width:wp('90%'),
        alignSelf:'center',
        display:'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent:'space-between'
    },

  cell: {
    width: hp('6.4%'),
    height: hp('7.2%'),
    borderWidth: 2,
    borderColor: '#5E6272',
    textAlign: 'center',
    backgroundColor: '#262A34',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
  },
  inputBlock: {
    marginTop: hp('6%'),
    width: wp('90%'),
    alignSelf: 'center',
    height: hp('15%'),
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    width: wp('100%'),
    height: hp('6%'),
    borderBottomColor: '#246BFD',
    borderBottomWidth: 3,
    color: 'white',
    fontSize: 18,
  },
  email: {
    marginTop: hp('0.5%'),
    color: 'white',
    fontSize: wp('3.8%'),
    width: '90%',
    alignSelf: 'center',
    paddingVertical: hp('1%'),
  },
  codeFieldRoot: {
    marginTop: hp('1%'),
    width: wp('70%'),
    alignSelf: 'center',
  },
  focusCell: {
    borderColor: '#246BFD',
    shadowColor: '#246BFD',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 14,
  },
  digit: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  additionalPostscript: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  additionalPostscriptTitle: {
    color: '#5E6272',
    fontSize: wp('3.8%'),
  },
  additionalPostscriptBtnText: {
    color: '#246BFD',
    fontSize: wp('3.8%'),
    textShadowColor: '#246BFD',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 30,
  },
});
