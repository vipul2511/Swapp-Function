import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from './styles';

const Title = (props) => {
    const { title, text } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    )
}

export default Title;
