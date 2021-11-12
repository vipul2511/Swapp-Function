import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#181A20'
    },
    image:{
        width:wp('100%'),
        height:hp('100%'),
        justifyContent:'center',
        alignItems:'center'
    },
    inputTitle: {
        color:'white',
        fontSize:wp('3.0%'),
        marginBottom:hp('2%'),
        fontFamily:'Inter-Bold'
    },
    inputBlock: {
        marginTop:hp('4%'),
        width:wp('90%'),
        alignSelf:'center',
        height: hp('8%'),
        display: 'flex',
        justifyContent:'space-between'
    },
    input: {
        width:wp('90%'),
        height:hp('6%'),
        borderBottomColor: '#246BFD',
        borderBottomWidth:2,
        color:'white',
        fontSize:wp('4.5%'),
        fontFamily:'Inter-SemiBold'
    },
})
