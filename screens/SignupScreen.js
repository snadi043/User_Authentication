import { useContext, useState} from 'react';

import AuthenticationContent from "../components/AuthenticationContent";
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { createUser } from "../utilities/http";
import { Alert } from 'react-native';

import { AuthContext } from '../store/auth-context';


export default function SignupScreen(){

    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);

    async function SignupHandler({email, password}){
        setIsAuthenticating(true);
        try{
            const token = await createUser(email, password);
            authCtx.authenticate(token);
        }
        catch(error){
            Alert.alert('Authenticating Failed!', 'Could not create user. Please check your input fields or try again later.');
            setIsAuthenticating(false);
        }
    }
    if(isAuthenticating){
        return <LoadingOverlay message="Creating User..."/>
    }
    return(<AuthenticationContent onAuthenticate={SignupHandler}/>);
}
