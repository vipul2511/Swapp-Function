import React, {useEffect, useState} from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView, Modal, Pressable,
    SafeAreaView,
    StatusBar,
    Text,
    View
} from "react-native";
import styles from './Styles';
import Button from "../../../Components/CreatingAccount/Button";
import BackArrow from "../../../Components/CreatingAccount/BackArrow";
import TermsOfUse from "../TermsOfUse";
import { BlurView, VibrancyView } from "react-native-blur";

const PointBlock = (props) => {
    const { text } = props;
    return (
        <View style={styles.pointContainer}>
            <Image
                style={styles.pointImg}
                source={require('../../../Assets/Images/Check.png')}
            />
            <Text style={styles.pointText}>{text}</Text>
        </View>
    )
}

const ThreeThingsScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        console.log('Three things screen there')
    }, [])
    const navigation=(text)=>{
        console.log(text);
        if(text==true){
            setModalVisible(false)
            props.navigation.navigate('AcceptTerm')
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
                {
                    modalVisible && <View style={styles.blurContainer}></View>
                }
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <TermsOfUse navigation={props.navigation} handle={(text)=>{navigation(text)}} setModalVisible={setModalVisible}/>
                </Modal>

                <StatusBar backgroundColor="#181A20" barStyle="light-content" />
                <BackArrow isText={'Registration'}/>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Three things you should know</Text>
                </View>

                <View style={styles.pointsBlock}>
                    <PointBlock text={'No one can see the data you import, only you hold the key!'}/>
                    <PointBlock text={'Your data is not held by us, you decide where it lives'}/>
                    <PointBlock text={'Your data can only be shared with your explicit consent'}/>
                </View>

                <View style={styles.signatureContainer}>
                    <Image
                        style={styles.signatureImg}
                        source={require('../../../Assets/Images/signature.png')}
                    />
                </View>
                <Button handleFunction={() => setModalVisible(true)} btnText={'Read the terms of use'}/>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ThreeThingsScreen;
