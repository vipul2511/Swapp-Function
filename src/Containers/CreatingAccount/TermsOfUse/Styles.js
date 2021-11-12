import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex:1,
        marginTop:'10%',
        backgroundColor: '#181A20'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "#181A20",
        //backgroundColor: "gray",
        borderTopLeftRadius: hp('4%'),
        borderTopRightRadius: hp('4%'),
        shadowColor: "#000",
        height:hp('90%'),
        marginTop:'auto',
        marginBottom: 0
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        lineHeight:10
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    title: {
        color: '#FFFFFF',
        fontSize: hp('3.4%'),
        fontWeight: '600',
        width: wp('90%'),
        alignSelf:'center',
        marginVertical:hp('2%'),
    },
    termsText: {
        padding:10,
        width: wp('90%'),
        alignSelf:'center',
        height: hp('45%'),
        borderWidth: 1,
        borderColor:'#5E6272',
        borderRadius: wp('3.6%'),
    },
    text: {
        color:'#5E6272',
        fontSize: wp('4.6%'),
        paddingRight:30,
        lineHeight: hp('3.4%'),
    },
    checkBoxContainer: {
        marginTop:hp('2%'),
        width:wp('90%'),
        alignSelf:'center',
        height:hp('8.6%'),
        borderRadius: hp('2%'),
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#262A34'
    },
    checkIcon: {
         width:wp('8%'),
         resizeMode: 'contain',
        marginHorizontal:wp('4%'),

    },
    checkBoxBlockText: {
        color:'white',
        fontSize: wp('4.2%')
    },
})
