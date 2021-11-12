import {StyleSheet,Dimensions} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height
export default StyleSheet.create({
    container: {
        height: hp('8%'),
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    imgContainer: {
        height:'100%',
        marginLeft:wp('4%'),
        width:wp('8%'),
        zIndex:9999
    },
    img: {
        position:'absolute',
        width:wp('8%'),

        height:'100%',
        resizeMode: 'contain'
    },
    textContainer: {
        position:'absolute',
        width:'100%',
        display: 'flex',
        justifyContent:'center'
    },
    text: {
        color:'white',
        fontSize:widthPercentageToDP('5.2%'),
        fontFamily:'Poppins-SemiBold',
        textAlign:'center'
    }
})
