import React from 'react';
import {Text, TouchableOpacity, View,ActivityIndicator} from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import styles from './styles';
const Button = (props) => {
    const { btnText, inActive, isTransparent,style,btnconstyle,disabled, handleFunction,loading,roundBtn } = props;

    const getTextColor = () => {
        if(style) { return '#3A3D46' } else
            if(inActive) { return '#3A3D46' }
            else { return 'white' }
    }

    const getBackgroundColor = () => {
        if(style) { return '#262A34' } else
        if(inActive) { return '#262A34' }
        else { return '#246BFD' }
    }

    return (
        <View style={[btnconstyle,styles.buttonContainer]}>
            <TouchableOpacity
            disabled={disabled}
                style={[styles.button, isTransparent ? {
                    backgroundColor: '#ffffff00',
                    borderWidth: 1,
                    borderColor: roundBtn?'#246BFD':'#5E6272',
                    borderRadius:roundBtn?heightPercentageToDP('10%'):heightPercentageToDP('2%')
                } : {backgroundColor: getBackgroundColor()}]}
                onPress={() => {handleFunction()}}
            >
               {loading?(<ActivityIndicator color={"#fff"} size={widthPercentageToDP('10%')} />):(<Text style={[styles.buttonText,{color: getTextColor(),fontFamily:roundBtn?'Inter-Medium':'Inter-Bold',fontSize:roundBtn?widthPercentageToDP('3.8%'):widthPercentageToDP('4.2%')}]}>{btnText}</Text>)}
            </TouchableOpacity>
        </View>
    )
}

export default Button;
