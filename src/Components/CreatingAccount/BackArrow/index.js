import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const BackArrow = (props) => {
    const navigation = useNavigation();
    const { isText } = props;

    const handlePress = () => {
        navigation.goBack();
        if(props.func) {
            props.func();
        }
    }

    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={()=>handlePress()} style={styles.imgContainer}>
                <Image
                    style={styles.img}
                    source={require('../../../Assets/Images/arrow.png')}
                />
            </TouchableOpacity>
            {
                isText &&
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{isText}</Text>
                </View>
            }
        </View>
    )
}

export default BackArrow;

