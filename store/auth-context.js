import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {},
});


export default function AuthenticationContextProvider({children}){
    const [authToken, setAuthToken] = useState();

    function authenticate(token){
        setAuthToken(token);
    }

    function logout(){
        setAuthToken(null);
    }

    const value = {
        token: authToken,
        isAuthenticate: !!authToken,
        authenticate: authenticate,
        logout: logout,
    }
    return <AuthenticationContext.Provider value={value}>
        {children}
    </AuthenticationContext.Provider>
}