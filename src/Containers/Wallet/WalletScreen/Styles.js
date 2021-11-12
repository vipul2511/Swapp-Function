import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#181A20'
    },
    nftContainer: {
        width:'50%',
        marginTop:hp('2%')
    },
    copyImg: {
        width:wp('6%'),
        resizeMode: 'contain',
        marginLeft:'3%'
    },
    nftInfoContainer: {
        width:wp('38%'),
        marginTop:hp('1.8%'),
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    nftText: {
        color:'white',
        fontSize:wp('3.8%'),
        fontFamily:'Inter-Medium',
    },
    priceContainer: {
        display:'flex',
        alignItems:'flex-end',
        justifyContent: 'space-between'
    },
    nftImg: {
        width:wp('38%'),
        height:wp('38%'),
        resizeMode: 'contain',
        borderRadius:wp('3%')
    },
    tokenName: {
        color:'#FFFFFF',
        fontSize:wp('4.2%'),
        fontFamily:'Inter-Medium',
    },
    nftName: {
        color:'#FFFFFF',
        fontSize:wp('3.8%'),
        marginTop:hp('0.4%'),
        fontFamily:'Inter-Medium',
    },
    tokenInfo: {
        marginVertical:'1.4%',
        display:'flex',
        justifyContent:'space-between',
        marginLeft:wp('1%')
    },
    tokenPercent: {
        color:'#FF0B80',
        fontSize:wp('3.6%'),
        fontFamily:'Inter-Medium',
    },
    tokenIcon: {
        width:wp('12%'),
        marginHorizontal: wp('2%'),
        height:wp('12%'),
        resizeMode: 'contain',
    },
    tokenContainer: {
        width:wp('90%'),
        height:hp('10%'),
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor:'#303136',
        borderBottomWidth:2
    },
    tokensInfoContainer: {
        display:'flex',
        flexDirection:'row'
    },
    switchBtnImg: {
        width:wp('6%'),
        height:wp('6%'),
        resizeMode: 'contain',
        marginRight: wp('2%')
    },
    switchBtnText: {
        color:'#FFFFFF',
        fontSize:wp('4%'),
        fontFamily:'Inter-Bold',
    },
    price: {
        color:'#FFFFFF',
        fontSize:wp('4.2%'),
        fontFamily:'Inter-Bold',
        marginBottom:hp('1%')
    },
    convertedPrice: {
        color:'#8b8c8f',
        fontSize:wp('3.4%'),
        fontFamily:'Inter-Medium',
    },
    switchButtonsContainer: {
        width:wp('90%'),
        alignSelf:'center',
        justifyContent:'center',
        height:hp('5.8%'),
        marginTop:hp('2%'),
        backgroundColor:'#131313',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:wp('4%')

    },
    switchBtn: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'48%',
        height:'90%',
        borderRadius:wp('2.8%')
    },
    btnName: {
        color:'#FFFFFF',
        fontSize:wp('3.8%'),
        fontFamily:'Inter-Medium',
        textAlign:'center',
        paddingTop:'8%'
    },
    btnIcon: {
        width:wp('13%'),
        height:wp('13%'),
        resizeMode: 'contain',
        paddingLeft:'3%'
    },
    walletAddressContainer: {
        width:'90%',
        alignSelf:'center',
        height:'15%',
        backgroundColor:'#5089fd',
        borderRadius:wp('10%'),
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'4%'
    },
    walletAddress: {
        color:'#FFFFFF',
        fontSize:wp('3.8%'),
        fontFamily:'Inter-Medium',
    },
    balance: {
        display:'flex',
        flexDirection: 'row',
        alignItems:'center'
    },
    walletName: {
        fontSize: wp('4.4%'),
        fontFamily: 'Poppins-SemiBold',
        color:'#FFFFFF'
    },
    balanceText: {
        justifyContent: 'center',
        fontSize: wp('3.6%'),
        fontFamily: 'Poppins-SemiBold',
        color:'#91b5fe'
    },
    balanceValue: {
        fontSize: wp('5.6%'),
        marginLeft:wp('2%'),
        fontFamily: 'Poppins-SemiBold',
        color:'#FFFFFF'
    },
    headerContainer: {
        width:wp('100%'),
        height:hp('38%'),
        backgroundColor:'#246BFD'
    },
    icon:{
        width:wp('20%'),
        height:wp('20%'),
        resizeMode: 'contain'
    },
    infoContainer: {
        marginLeft: wp('6%'),
        height:wp('16%'),
        display:'flex',
        justifyContent:'space-between',
    },
    profileContainer: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:wp('5%'),
        width:wp('100%'),
        height:'40%',
        alignSelf:'center',
        borderBottomColor: '#3a7afd',
        borderBottomWidth: 2,
    },
    closeIcon: {
        width:wp('6%'),
        height:wp('6%'),
        resizeMode: 'contain'
    },
    errorMessage: {
        color:'#FF0B80',
        width:wp('90%'),
        alignSelf:'center',
        marginTop:hp('1%'),
        fontSize:wp('4.4%'),
    },
    wordBoard: {
        width: wp('90%'),
        alignSelf:'center',
        height: hp('24%'),
        backgroundColor: '#262A34',
        borderWidth: 1,
        borderRadius: wp('2.6%'),
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical:hp('0.6%'),
        paddingHorizontal:wp('1.4%'),
    },
    buttonsContainer: {
        display:'flex',
        flexDirection:'row',
        width:wp('90%'),
        alignSelf:'center',
        height:'40%',
        alignItems:'center'
    },
    btnContainer: {
        width:'25%',
        display:'flex',
        alignItems:'center'
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
    },
    attachedWordContainer: {
        height:'20%',
        paddingHorizontal:'1%',
        marginHorizontal:'1%',
        marginVertical:'1%',
        display:'flex',
        flexDirection:'row',
        borderRadius: wp('1.2%'),
        backgroundColor: '#30333d',
        alignItems:'center'
    },
    titleContainer: {
        marginTop:hp('2%'),
        width: wp('90%'),
        alignSelf:'center',
        height: hp('12%'),
    },
    title: {
        color: '#FFFFFF',
        fontWeight:'600',
        fontSize:hp('3.5%'),
    },
    text: {
        paddingTop:hp('1.2%'),
        color: '#5E6272',
        fontSize:hp('2.0%'),
    },
    attachedWordText: {
        color:'#FFFFFF',
        fontSize:wp('3.8%'),
        paddingHorizontal:wp('1%'),
    },
    inputWord: {
        width:'auto',
        marginLeft:0,
        marginRight:0,
        height:'20%',
        color:'#FFFFFF',
        fontSize:wp('3.8%'),

        marginVertical:'1%',
    },
    wordBtnBlock: {
        height:hp('24%'),
        marginTop:hp('2%'),
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
