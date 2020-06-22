import React from "react";
import { 
    View,
    Image,
    StyleSheet,
    Text,
} from "react-native";
import OtpBoxes from './OtpBoxes'
import { connect } from 'react-redux';
import { createStructuredSelectorCreator } from '../utils/commonFunctions';
import { 
    getMobileNumber,
    loginStatusCallLoader,
} from "../LoginScreen/selectors";
import { setLoginStatus } from "../LoginScreen/actions";
import { fetchVerificationId } from "../MainApp/selectors";
import { loginAction } from "../LoginScreen/actions";
import Loader from '../utils/Loader';
import firebase from "../utils/firebase";
import iconImage from "../assets/icon.png";

function OtpScreen({
    navigation,
    mobileNumber,
    verificationId,
    loginAction,
    setLoginStatus,
    loginStatusCallLoader,
}){

    const onOtpCheck = async(arr) => {
        try {
            setLoginStatus(true)
            const otp = arr.join('')
            const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                otp
              );
            const authResult = await firebase.auth().signInWithCredential(credential);
            loginAction()
        } catch (error) {
            console.log('error in onOtpCheck ',error)
        }
    }
    
    if (loginStatusCallLoader) {
        return <Loader isLoading={loginStatusCallLoader} />;
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.imgView}>
                <Image 
                    source={iconImage}
                    resizeMode="contain"
                    style={styles.imgStyle}
                />
            </View>
            <View>
                <OtpBoxes 
                    sentOn={mobileNumber}
                    resendOtp={() => console.log('hehehe')}
                    checkOtp={onOtpCheck}
                />
            </View>
            <View style={styles.textView}>
                <Text style={styles.textStyle}>
                    {`Please Enter the OTP Sent on ${mobileNumber}`}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:"center",
    },
    imgStyle : {
        width: '100%',
        height: '100%',
    },
    textView: {
        margin: 40,
    },
    textStyle : {
        fontSize: 15,
        fontFamily:'Rubik-Bold',
        textAlign:"center",
    },
    imgView: {
        height:150,
        width:150,
    },

})

const mapStateToProps = createStructuredSelectorCreator({
    mobileNumber: getMobileNumber,
    verificationId: fetchVerificationId,
    loginStatusCallLoader
});
  
const mapDispatchToProps = {
    loginAction,
    setLoginStatus,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(OtpScreen)