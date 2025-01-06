import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {},
});


export default function AuthContextProvider({children}){
    const [authToken, setAuthToken] = useState();
    
    function authenticate(token){
        setAuthToken(token);
    }

    function logout(){
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    const value = {
        token: authToken,
        isAuthenticate: !!authToken,
        authenticate: authenticate,
        logout: logout,
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

// Refer to this link below on understanding how to use the Async Storage package which is useful for storing the 
// authentication token in the device so that it helps the user to auto login when they have the token stored in their devices locally.

// https://react-native-async-storage.github.io/async-storage/docs/usage