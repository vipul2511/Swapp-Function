import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#181A20'
    },
    cell: {
        width: '20%',
        height: wp('13.2%'),
        borderWidth: 2,
        borderColor: '#5E6272',
        textAlign: 'center',
        backgroundColor:'#262A34',
        borderRadius:8,
        display:'flex',
        justifyContent:'center'
    },
    inputBlock: {
        marginTop:hp('6%'),
        width:wp('90%'),
        alignSelf:'center',
        height: hp('15%'),
        display: 'flex',
        justifyContent:'space-between'
    },
    input: {
        width:wp('100%'),
        height:hp('6%'),
        borderBottomColor: '#246BFD',
        borderBottomWidth:3,
        color:'white',
        fontSize:18
    },
    email: {
        marginTop:hp('0.5%'),
        color:'white',
        fontSize:wp('3.8%'),
        width:'90%',
        fontFamily:'Inter-SemiBold',
        alignSelf:'center',
        paddingVertical:hp('1%'),
    },
    codeFieldRoot: {
        marginTop:hp('1%'),
        width:wp('60%'),
        alignSelf: 'center'
    },
    focusCell: {
        borderColor: '#246BFD',
        shadowColor: '#246BFD',
        shadowOffset: {width: 0, height: 0},
        elevation: 18,
        shadowOpacity: 0.3,
        shadowRadius: 14,
    },
    digit: {
        color:'white',
        fontSize: 20,
        textAlign: 'center',
    },
    additionalPostscript: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('3%')
    },
    additionalPostscriptTitle: {
        color:'#5E6272',
        fontSize:wp('3.8%'),
        fontFamily:'Inter-Regular'
    },
    additionalPostscriptBtnText: {
        color:'#246BFD',fontSize:wp('3.8%'),textShadowColor: '#246BFD',
        textShadowOffset: {width: -1, height: 0},
        textShadowRadius: 30,
        fontFamily:'Inter-Bold'
    }
})
