import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import AuthenticationForm from "./AuthenticationForm";
import FlatButton from "./UI/FlatButton";
import { Colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function AuthenticationContent({isLogin, onAuthenticate}){

    const navigation = useNavigation();

    const [invalidCredentials, setInvalidCredentials] = useState({
        email: false,
        confirmEmail: false,
        password: false,
        confirmPassword: false
    });

    function switchAuthentication(){
        if(isLogin){
            // navigation.navigate('Signup');
            navigation.replace('Signup');
        }
        else{
            // navigation.navigate('Login');
            navigation.replace('Login');
        }
    }

    function submitHandler(credentials){
        let {email, confirmEmail, password, confirmPassword} = credentials;

        email = email.trim();
        password =  password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;
        const emailsAreEqual = email === confirmEmail;
        const passwordsAreEqual = password === confirmPassword;

        if(!emailIsValid || !passwordIsValid || (!isLogin && (!emailsAreEqual || !passwordsAreEqual))){
            Alert.alert('Invalid credentials', 'Please check your entered credentials and try again');
                setInvalidCredentials({
                    email: !emailIsValid,
                    confirmEmail: !emailIsValid || !emailsAreEqual,
                    password: !passwordIsValid,
                    confirmPassword: !passwordIsValid || !passwordsAreEqual,
                });
            return;
        }
        onAuthenticate({email, password});
    }
    return (
        <View style={styles.authContent}>
            <AuthenticationForm
                isLogin={isLogin}
                onSubmit={submitHandler}
                credentialsInvalid={invalidCredentials}
            />
            <View style={styles.button}>
                <FlatButton onPress={switchAuthentication}>{isLogin ? 'Create a new user' : 'Login user'}</FlatButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    authContent:{
        marginTop: 64,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
    },
    button:{
        marginTop: 8,
    }
});