import React, {useState} from 'react';
import {
    Alert, Image,
    KeyboardAvoidingView, Modal, Pressable,
    SafeAreaView, ScrollView,
    StatusBar,
    Text, TouchableOpacity, View,
} from "react-native";
import styles from './Styles';
import Button from "../../../Components/CreatingAccount/Button";
import ScrollViewIndicator from 'react-native-scroll-indicator';
import ScrollIndicator from "react-native-custom-scroll-indicator";
import ValidationPopup from "../../../Components/ValidationPopup";

const CheckBoxBlock = (props) => {
    const [ isChecked, setIsChecked ] = useState(false);
    const checkBoxIcons = [require('../../../Assets/Images/uncheck.png'), require('../../../Assets/Images/checkBoxCheck.png')];
    const { text } = props;
    const {parentCallback}=props;
    const parentCall=()=>{
        parentCallback(!isChecked);
        setIsChecked(!isChecked)
    }
    return (
        <View style={styles.checkBoxContainer}>
            <TouchableOpacity onPress={() => parentCall()}>
                <Image
                    style={styles.checkIcon}
                    source={checkBoxIcons[+isChecked]}
                />
            </TouchableOpacity>
            <Text style={styles.checkBoxBlockText}>{text}</Text>

        </View>
    )
}

const TermsOfUse = (props) => {
    const [ isAgreeCheck, setIsAgreeCheck ] = useState(false);
    const [ validationPopup, setValidationPopup ] = useState(false);
    const [ isSignatureCheck, setIsSignatureCheck ] = useState(false);
    const callbackAgree=(agree)=>{
        setIsAgreeCheck(agree);
    }
    const callbackSignature=(signature)=>{
        setIsSignatureCheck(signature);
    }
    const handlePromise = () => {
        console.log(isSignatureCheck,isAgreeCheck,props);
        if(isAgreeCheck && isSignatureCheck) {
            props.setModalVisible(false)
            props.navigation.navigate('AcceptTerm');
        } else {
            setValidationPopup(true)
        }
    }

    return (
        <SafeAreaView style={styles.modalView}>
            <Text style={styles.title}>Terms of use</Text>
            <View style={styles.termsText}>
                <ScrollViewIndicator
                    flexibleIndicator={true}
                    shouldIndicatorHide={false}
                    scrollIndicatorContainerStyle={{ width:16, zIndex:9999}}
                    scrollIndicatorStyle={{borderRadius:10, width:16, height:60, backgroundColor:'#246BFD', zIndex:9999}}
                    scrollViewStyle={{position:'relative', zIndex:9999}}
                >
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar ex id dui convallis, euismod tincidunt nunc aliquet. Vestibulum lobortis tincidunt neque, quis ultricies orci ullamcorper sit amet. Nam elementum leo at porttitor scelerisque. Aenean convallis diam ac ante pellentesque, id venenatis nulla dignissim. Curabitur et odio pellentesque tellus dapibus pretium. Curabitur scelerisque lectus non lacus pellentesque blandit. Nam dictum vel urna at porta.

                        Quisque vestibulum mauris sed metus egestas cursus. Cras efficitur dapibus efficitur. Donec at nunc faucibus, rutrum nisi vitae, hendrerit nisl. Praesent nec lorem ac magna congue varius quis ut leo. Etiam in rhoncus lacus. Duis maximus laoreet lorem, nec placerat risus maximus at. Nullam dictum massa a erat gravida, at tincidunt leo posuere. Aliquam vel felis gravida, commodo felis sed, consectetur nulla.

                        Nam non ante nibh. Duis non rhoncus justo. Suspendisse potenti. Nam accumsan vel dolor rutrum eleifend. Mauris non sapien sapien. Ut interdum non urna in sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque lacinia auctor eros, tincidunt rutrum lacus euismod et. Nullam vel sapien quis elit ultrices condimentum at sit amet nibh. Vestibulum non rhoncus justo, vitae egestas ante. Praesent cursus quis mauris ac hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque iaculis pharetra nisi, vel fermentum massa sodales in.

                        In et lacinia ligula. Cras id felis nec ante porta efficitur id in tellus. In ornare eu erat nec pellentesque. Maecenas non tellus ex. Vivamus nec vehicula sem. Praesent fermentum aliquam purus, ac euismod odio placerat vitae. Praesent congue rhoncus urna. Nulla id nibh est.

                        Aenean elit dui, euismod ac rutrum in, gravida ut velit. Sed consectetur nibh sapien, sed dapibus nibh aliquet at. Donec quis lacus egestas, aliquam mi eget, viverra nibh. Vivamus eu mollis ligula. Ut mattis dolor sed ante placerat sodales eget at augue. Fusce vitae volutpat justo, quis finibus risus. Nullam sodales eu magna et sodales. Proin ligula nisi, vestibulum in felis sit amet, posuere rutrum nulla. Donec non vestibulum felis, a lobortis ante. Nulla facilisi. Morbi laoreet felis a mauris aliquet, in bibendum lorem venenatis. Suspendisse molestie est at pulvinar aliquam. Nulla laoreet ante eu neque accumsan imperdiet.not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    <View style={{
                        width:1,
                        height:'99%',
                        backgroundColor:'#5E6272',
                        position:'absolute',
                        right:8,
                        zIndex:0
                    }}></View>
                </ScrollViewIndicator>
            </View>

            <CheckBoxBlock parentCallback={callbackAgree} text={'I agree with Terms of use'}/>
            <CheckBoxBlock parentCallback={callbackSignature} text={'I leave my signature under the rules'}/>

            <Button inActive={!isAgreeCheck || !isSignatureCheck} disabled={!isAgreeCheck || !isSignatureCheck} handleFunction={handlePromise} btnText={'I promise!'}/>
            {validationPopup && (
                <ValidationPopup title={"Please accept the both check box"} Show={true} showback={() => {setValidationPopup(false)}} />
            )}
        </SafeAreaView>
    )
}

export default TermsOfUse;
