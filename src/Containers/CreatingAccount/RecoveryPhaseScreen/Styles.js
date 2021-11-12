import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#181A20'
    },
    img: {
        alignSelf:'center',
        height: hp('16%'),
        width: hp('16%'),
        resizeMode: 'contain'
    },
    wordsBlock: {
        justifyContent:'center',
        display:'flex',
        flexDirection: 'row',
        width:'100%',
        alignSelf:'center',
        flexWrap: 'wrap',
        marginTop:hp('1%'),
    },
    wordContainer: {
        width:'35%',
        marginHorizontal:wp('1.4%'),
        marginVertical:hp('0.6%'),
        paddingHorizontal:wp('2.4%'),
        paddingVertical:wp('0.8%'),
        display:'flex',
        flexDirection:'row',
        borderColor: '#5E6272',
        borderWidth: 1,
        borderRadius: wp('1.4%'),
        justifyContent:'center',
        alignItems:'center'
    },
    word: {
        paddingLeft:wp('1.4%'),
        fontSize:wp('3.8%'),
        color:'white',
        fontFamily:'Inter-Medium'
    },
    number: {
        fontSize:wp('4%'),
        color:'#5E6272'
    },
    dangerIcon: {
        width: wp('10%'),
        resizeMode: 'contain'
    },
    warning: {
        width: wp('90%'),
        alignSelf:'center',
        backgroundColor:'#3C1C35',
        height: hp('10%'),
        borderColor:'#FF0B80',
        borderWidth:1,
        borderRadius:wp('3.8%'),
        shadowColor: '#FF0B80',
        shadowOffset: {width: 0, height: 0},
        elevation: 6,
        shadowOpacity: 0.3,
        shadowRadius: 8,
        display:'flex',
        flexDirection:'row',
        marginTop:hp('2.6%'),
    },
    warningText: {
        color:'#FF0B80',
        fontSize:wp('3.8%'),
        width:wp('60%'),
        fontFamily:'Inter-Medium'
    },
    warningIconContainer: {
        width:'20%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    warningTextContainer: {
        width:'80%',
        display:'flex',
        alignItems: 'center',
        justifyContent:'center'
    },
    title: {
        width: wp('90%'),
        alignSelf:'center',
      fontSize: wp('5.5%'),
        color:'white',
        textAlign:'center',
        fontFamily:'Poppins-SemiBold'
    },
    text: {
        marginTop:hp('1%'),
        width: wp('90%'),
        alignSelf:'center',
        color:'#5E6272',
        textAlign:'center',
        fontSize: wp('4%'),
        lineHeight: hp('3%'),
        fontFamily:'Inter-Regular'
    },
    btnContainer: {
        width:wp('100%'),
        marginTop: 'auto',
        marginBottom: hp('1%')
    },
    insideBtnContainer: {
        width:wp('90%'),
        alignSelf:'center',
        display:'flex',
        flexDirection:'row',
        marginBottom: hp('1%'),
        justifyContent:'space-between'
    },
    miniBtn: {
        borderColor: '#5E6272',
        borderWidth: 1,
        width:'48%',
        alignSelf:'center',
        height:hp('7.6%'),
        borderRadius: hp('2%'),
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    textMiniBtn: {
        color:'white',
        fontSize: wp('4.2%'),
        fontFamily:'Inter-Bold'
    },
    btnIcon: {
        width: '16%',
        marginLeft:'6%',
        resizeMode: 'contain'
    },
    cell: {
        width: hp('6.4%'),
        height: hp('7.2%'),
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
        alignSelf:'center',
        paddingVertical:hp('1%'),
    },
    codeFieldRoot: {
        marginTop:hp('1%'),
        width:wp('70%'),
        alignSelf: 'center'
    },
    focusCell: {
        borderColor: '#246BFD',
        shadowColor: '#246BFD',
        shadowOffset: {width: 0, height: 0},
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
        fontSize:wp('3.8%')
    },
    additionalPostscriptBtnText: {
        color:'#246BFD',fontSize:wp('3.8%'),textShadowColor: '#246BFD',
        textShadowOffset: {width: -1, height: 0},
        textShadowRadius: 30
    }
})
