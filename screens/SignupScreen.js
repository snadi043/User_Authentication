import {useState} from 'react';

import AuthenticationContent from "../components/AuthenticationContent";
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { createUser } from "../utilities/http";


export default function SignupScreen(){

    const [isAuthenticating, setIsAuthenticating] = useState(false);

    async function SignupHandler({email, password}){
        setIsAuthenticating(true);
        await createUser(email, password);
        setIsAuthenticating(false);
    }
    if(isAuthenticating){
        return <LoadingOverlay message="Creating User..."/>
    }
    return(<AuthenticationContent onAuthenticate={SignupHandler}/>);
}
