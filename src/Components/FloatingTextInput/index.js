import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const {inputStyle, titleStyle,label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: !isFocused ? 18 : 0,
      fontSize: !isFocused ? wp('4.0%') : wp('4.0%'),
      color: !isFocused ? '#aaa' : '#fff',
    };
    return (
      <View style={{ paddingTop: 18 }}>
        <Text style={[labelStyle,{fontFamily:'Poppins-SemiBold',fontWeight:'bold'}]}>
          {label}
        </Text>
        <TextInput
          {...props}
          style={inputStyle}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}
export default FloatingLabelInput;
