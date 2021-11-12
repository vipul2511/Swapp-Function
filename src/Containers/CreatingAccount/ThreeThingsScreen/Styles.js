import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#181A20'
    },
    blurContainer: {
        position:'absolute',
        width:'100%',
        height:'100%',
        zIndex:9999,
        backgroundColor: 'rgba( 0, 0, 0, 0.9 )'
    },
    titleContainer: {
        marginTop:hp('2%'),
        height: hp('14%'),
        display: 'flex',
        width:wp('90%'),
        alignSelf:'center',
        justifyContent:'space-between'
    },
    title: {
        color:'white',
        fontSize:hp('4.7%'),
        textAlign:'center',
        fontFamily:'Poppins-SemiBold'
    },
    pointsBlock: {
      marginTop: hp('2%'),
    },
    pointContainer: {
        marginTop: hp('2%'),
        display:'flex',
        flexDirection:'row',
        width:wp('90%'),
        alignSelf: 'center',
        alignItems:'center'
    },
    pointImg: {
        height:hp('7%'),
        width:hp('7%'),
        resizeMode: 'contain'
    },
    pointText: {
        paddingRight:wp('20%'),
        paddingLeft:wp('2%'),
        lineHeight: hp('3.2%'),
        color:'white',
        fontSize: wp('4%'),
        flexWrap: 'wrap',
        fontFamily:'Inter-Regular'
    },
    signatureContainer: {
        marginTop:hp('1%'),
        height:hp('12.2%'),
        width: wp('60%'),
        alignSelf:'center',
    },
    signatureImg: {
        height:'100%',
        width:'100%',
        resizeMode: 'contain'
    }
})
