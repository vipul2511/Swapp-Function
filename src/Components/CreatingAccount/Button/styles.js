import {StyleSheet,Dimensions} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height
export default StyleSheet.create({
    buttonContainer: {
        width:wp('100%'),
        height:hp('8%'),
        // backgroundColor:'red',
        marginTop: 'auto',
        marginBottom: hp('1.8%')
    },
    button: {
        width:wp('90%'),
        alignSelf:'center',
        height:hp('7.6%'),
        borderRadius: hp('2%'),
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonText: {
        color:'white',
        fontSize: wp('4.2%'),
        fontFamily:'Inter-Bold'
    },
})
