import React from 'react';
import {TouchableOpacity,Text,Platform,View} from 'react-native';
// import { Spinner } from 'native-base'
import Style from './style';
import AntDesgin from 'react-native-vector-icons/AntDesign';
const TransparentButton=(props)=>{
const { style, 
    textStyle,
    onPress, 
    title, 
    disabled, 
    loading, 
    selected, 
    children}=props;
    let textStyleNode = selected ? { ...Style.text, ...textStyle, ...Style.selectedText} : { ...Style.text, ...textStyle};
	let buttonStyleNode = selected ? { ...Style.button, ...style, ...Style.selectedButton } : { ...Style.button, ...style };
	let textNode = (
    <Text style={textStyleNode}>{title}</Text>);
	textNode = title ? textNode : [];
    return(
        <View style={{width:'85%'}}>
        <TouchableOpacity disabled={disabled} style={buttonStyleNode}  onPress={onPress}>
 {!loading ? children : []}
	    {textNode}
        </TouchableOpacity>
        </View>
    )
}
export default TransparentButton;
TransparentButton.defaultProps = {
    disabled: false, 
    loading: false, 
    selected: false, 
    children: []
  };