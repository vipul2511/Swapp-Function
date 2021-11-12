import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
container:{
    flex:1,

},indicatorstyle:{
    backgroundColor: '#131313',borderRadius:20,
},
tabNavigator:{
    width:'95%',
    justifyContent:'center',alignSelf:'center',
    marginTop:'4%'
},
label:{
    textTransform: 'none', fontSize: wp('3.7%'), fontFamily:'Inter-Bold',
},
primary:{
    color:'#5E6272',
    textTransform:'uppercase',
    fontFamily:'Inter-Bold',
    fontSize:wp('3.2%')
},
viewprimary:{
    marginTop:hp('5%'),
    marginLeft:wp('5%'),
    
},
line:{
    width:wp('90%'),
    borderWidth:0.6,
    borderColor:'#5E6272',
    alignSelf:'center',
    marginTop:hp('2%')
},
EmailContainer:{
    marginTop:hp('3%'),
    width:wp('95%'),
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'flex-start',
    backgroundColor:'#262A34',
    paddingLeft:'5%',
    borderRadius:wp('3%'),
    height:hp('7%')
},
emailText:{
    fontFamily:'Inter-SemiBold',
    color:'#fff'
},
absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }

});