import { useState } from "react";
import AuthenticationContent from "../components/AuthenticationContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { loginUser } from "../utilities/http";

import { Alert } from "react-native";

export default function LoginScreen(){

    const [isAuthenticating, setIsAuthenticating] = useState(false);
    
        async function LoginHandler({email, password}){
            setIsAuthenticating(true);
            try{
                await loginUser(email, password);
            }
            catch(error){
                Alert.alert('Authentication failed.', 'Could not log users in. Please check your input credentials');
            }
            setIsAuthenticating(false);
        }
        if(isAuthenticating){
            return <LoadingOverlay message="Logging User in..."/>
        }

    return(<AuthenticationContent isLogin onAuthenticate={LoginHandler}/>);
}
