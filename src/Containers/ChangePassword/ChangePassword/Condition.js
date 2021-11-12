import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Condition = ({pattern, Title}) => {
  const [check, setcheck] = useState(null);
  React.useEffect(() => {
    setcheck(pattern);
    // console.log('dd')
  }, [pattern]);
  return (
    <View style={{flexDirection: 'row', marginVertical: hp('0.8')}}>
      {check ?
      <View
      style={[
        {
          width: wp('5'),
          height: wp('5'),

          borderRadius: 30,
          overflow:'hidden'
        },
      //   check ? {backgroundColor: 'pink'} : {backgroundColor: 'red'},
      ]}
    >
        <Image source={require('../../../Assets/Images/Check2.png') } style={{height:'100%',width:'100%'}}/>
        </View> :
         <View
         style={[
           {
             width: wp('5'),
             height: wp('5'),
   
             borderRadius: 30,
             overflow:'hidden',
             borderColor:'gray',
             borderWidth:1
             
           },
         //   check ? {backgroundColor: 'pink'} : {backgroundColor: 'red'},
         ]}
       />}
      <Text style={{marginLeft: wp('4'), color: '#5E6272'}}>{Title}</Text>
      
    </View>
  );
};

export default Condition;
