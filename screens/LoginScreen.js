import { useState } from "react";
import AuthenticationContent from "../components/AuthenticationContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { loginUser } from "../utilities/http";

export default function LoginScreen(){

    const [isAuthenticating, setIsAuthenticating] = useState(false);
    
        async function LoginHandler({email, password}){
            setIsAuthenticating(true);
            await loginUser(email, password);
            setIsAuthenticating(false);
        }
        if(isAuthenticating){
            return <LoadingOverlay message="Logging User in..."/>
        }

    return(<AuthenticationContent isLogin onAuthenticate={LoginHandler}/>);
}
