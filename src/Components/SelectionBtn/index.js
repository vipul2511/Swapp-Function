import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

const SelectionBtn = ({selection, GetSelected}) => {
  const [select, setselect] = React.useState(selection);
  console.log(select);

  const Selectedvalue = item => {
    setselect(item);
    GetSelected(item);
  };

  const emoji = ['  😎', '  💸', '  👍'];
  return (
    <View>
      {selection.map((item, index) => {
        return (
          <View style={{paddingVertical: hp('1%')}} key={index}>
            <TouchableOpacity
              onPress={() => Selectedvalue(item)}
              style={
                select === item ? Styles.activebutton : Styles.disablebutton
              }>
              <View
                style={
                  select === item ? Styles.activecheck : Styles.disablecheck
                }>
                {select === item ? (
                  <Icon size={15} color="white" name="check" />
                ) : null}
              </View>

              <View>
                <Text
                  style={
                    select === item ? Styles.btntext : Styles.btntextdisable
                  }>
                  {item}
                  {emoji[index]}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default SelectionBtn;
