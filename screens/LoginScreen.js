import { useContext, useState } from "react";
import AuthenticationContent from "../components/AuthenticationContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { loginUser } from "../utilities/http";

import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";


export default function LoginScreen(){

    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);
    
        async function LoginHandler({email, password}){
            setIsAuthenticating(true);
            try{
                const token = await loginUser(email, password);
                authCtx.authenticate(token);
            }
            catch(error){
                Alert.alert('Authentication failed.', 'Could not log users in. Please check your input credentials');
                setIsAuthenticating(false);
            }
        }
        if(isAuthenticating){
            return <LoadingOverlay message="Logging User in..."/>;
        }

    return <AuthenticationContent isLogin onAuthenticate={LoginHandler}/>;
}
