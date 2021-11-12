import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import { Spinner } from 'native-base'
import Style from './styles';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Button = props => {
  const {
    style,
    textStyle,
    onPress,
    title,
    disabled,
    loading,
    selected,
    children,
  } = props;
  let textStyleNode = selected
    ? {...Style.text, ...textStyle, ...Style.selectedText}
    : {...Style.text, ...textStyle};
  let buttonStyleNode = selected
    ? {...Style.button, ...style, ...Style.selectedButton}
    : {...Style.button, ...style};
  let textNode = <Text style={textStyleNode}>{title}</Text>;
  textNode = title ? textNode : [];
  return (
    <View style={{width: '85%'}}>
      <Image
        source={require('../../Assets/Images/buttonlogo.png')}
        style={{
          width: 25,
          height: 25,
          position: 'absolute',
          top: widthPercentageToDP('4%'),
          zIndex: 1,
          left: '19%',
        }}
      />
      <TouchableOpacity
        disabled={disabled}
        style={buttonStyleNode}
        onPress={onPress}>
        {!loading ? children : []}
        {/* {loading ? (<Spinner color={'#fff'} />) : textNode} */}
        {textNode}
      </TouchableOpacity>
    </View>
  );
};
export default Button;
Button.defaultProps = {
  disabled: false,
  loading: false,
  selected: false,
  children: [],
};
