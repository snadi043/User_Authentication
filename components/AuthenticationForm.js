import {View, StyleSheet} from 'react-native';
import Input from './UI/Input';
import { useState } from 'react';
import Button from './UI/Button';

export default function AuthenticationForm({isLogin, onSubmit}){
    const [enteredEmail, setEnteredEmail] = useState('');
    const [reEnteredEmail, setReEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [reEnteredPassword, setReEnteredPassword] = useState('');

    function updateInputValuesHandler(identifier, enteredInput){
        switch(identifier){
            case 'email':
                setEnteredEmail(enteredInput);
                break;
            case 're-enterEmail':
                setReEnteredEmail(enteredInput);
                break;
            case 'password':
                setEnteredPassword(enteredInput);
                break;
            case 're-enterPassword':
                setReEnteredPassword(enteredInput);
                break;
        }
    }

    function submitHandler(){
        onSubmit({
            email: enteredEmail,
            confirmEmail: reEnteredEmail,
            password: enteredPassword,
            confirmPassword: reEnteredPassword
        });
    }

    const {
        email: emailIsInvalid,
        confirmEmail: emailsDontMatch,
        password: passwordIsInvalid,
        confirmEmail: passwordDontMatch
    } = credentialsInvalid;

    return (
       <View>
         <View>
            <Input 
                label="E-mail Address"
                onInputValueChange={updateInputValuesHandler.bind(this, 'email')}
                keyboardType='email-address'
                secure={false}
                value={enteredEmail}
                isInvalid={emailIsInvalid}
            />
            <Input 
                label="Re-Enter E-mail Address"
                onInputValueChange={updateInputValuesHandler.bind(this, 're-enterEmail')}
                keyboardType='email-address'
                secure={false}
                value={reEnteredEmail}
                isInvalid={emailsDontMatch}
            />
            <Input 
                label="Password"
                onInputValueChange={updateInputValuesHandler.bind(this, 'password')}
                keyboardType='default'
                secure={true}
                value={enteredPassword}
                isInvalid={passwordIsInvalid}
            />
            <Input 
                label="Re-enter Password"
                onInputValueChange={updateInputValuesHandler.bind(this, 're-enterPassword')}
                keyboardType='default'
                secure={true}
                value={reEnteredPassword}
                isInvalid={passwordDontMatch}
            />
            <View>
                <Button
                    onPress={submitHandler}
                >
                {isLogin ? 'Login' : 'Signup'}
                </Button>
            </View>
        </View>
       </View>
    )
}

const styles = StyleSheet.create({

});