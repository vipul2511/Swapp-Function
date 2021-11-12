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
    body: {
        height: hp('45%'),

        paddingVertical:hp('1%'),
        width:wp('90%'),
        alignSelf:'center',
    },
    footer: {
        width:wp('90%'),
        height:hp('30%'),
        marginTop: 'auto',
        alignSelf:'center'
    },
    optionBlock: {
        width:'100%',
        height:hp('10%'),
        marginTop:hp('2%'),
        backgroundColor: '#20222a',
        borderRadius:14,
        alignSelf: 'center',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    optionIcon: {
        width:wp('6%'),
        height:'100%',
        resizeMode: 'contain',
        marginLeft:'5%'
    },
    optionTitle: {
        color:'white',
        fontFamily:'Inter-Bold'
    },
    optionText: {
        color:'#5E6272',
        fontFamily:'Inter-Regular'
    },
    nextIcon: {
        width:wp('10.0%'),
        alignSelf: 'flex-end',
        height:'100%',
        resizeMode: 'contain',
        marginRight:wp('2.0%'),
    },
    title: {
        color:'white',
        fontSize:wp('9%'),
        fontFamily:'Poppins-SemiBold'
    },
    bodyImage: {
        width:wp('90%'),
        height:hp('40%'),
        resizeMode: 'contain'
    },
    text: {
        color:'gray',
        fontSize:wp('4.3%'),
        fontFamily:'Inter-Regular'
    }
})
