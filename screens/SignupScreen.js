import AuthenticationContent from "../components/AuthenticationContent";
import { createUser } from "../utilities/http";
import {useState} from 'react';

export default function SignupScreen(){

    const [isAuthenticating, setIsAuthenticating] = useState(false);

    async function SignupHandler({email, password}){
        setIsAuthenticating(true);
        await createUser(email, password);
        setIsAuthenticating(false);
    }
    if(isAuthenticating){
        return <LoadingOverlay/>
    }
    return(<AuthenticationContent onAuthenticate={SignupHandler}/>);
}
