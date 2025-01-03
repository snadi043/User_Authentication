import {useState} from 'react';

import AuthenticationContent from "../components/AuthenticationContent";
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { createUser } from "../utilities/http";
import { Alert } from 'react-native';


export default function SignupScreen(){

    const [isAuthenticating, setIsAuthenticating] = useState(false);

    async function SignupHandler({email, password}){
        setIsAuthenticating(true);
        try{
            await createUser(email, password);
        }
        catch(error){
            Alert.alert('Authenticating Failed!', 'Could not create user. Please check your input fields or try again later.');
        }
        setIsAuthenticating(false);
    }
    if(isAuthenticating){
        return <LoadingOverlay message="Creating User..."/>
    }
    return(<AuthenticationContent onAuthenticate={SignupHandler}/>);
}
