// import 'react-native-gesture-handler';
import { useContext, useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {IconButton} from './components/UI/IconButton';
import { Colors } from './constants/colors';

import AuthContextProvider, { AuthContext } from './store/auth-context';

import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from 'expo-app-loading';


const Stack = createStackNavigator();

function AuthStack(){
  return(
    <Stack.Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor: Colors.primary500,
        },
        headerTintColor: 'white',
        contentStyle: {backgroundColor: Colors.primary100}
      }}>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Signup" component={SignupScreen}/>
    </Stack.Navigator>
  )
}

function AuthenticatedStack(){
  const authCtx = useContext(AuthContext);
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: Colors.primary100}
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
        headerRight: ({tintColor}) => {
          <IconButton name="exit" color={tintColor} size={24} onPress={authCtx.logout}/>
        }
      }}/>
    </Stack.Navigator>
  );
}

function Navigation(){
  const authCtx = useContext(AuthContext);
  return(
      <NavigationContainer>
        {!authCtx.isAuthenticated && <AuthStack/>}
        {authCtx.isAuthenticated && <AuthenticatedStack />}
      </NavigationContainer>
  )
}


function Root(){
  const authCtx = useContext(AuthContext);

  const [isTryingLogin, setIsTryingLogin] = useState(true);

  useEffect(() => {
    async function fetchedToken(){
        const storedToken = await AsyncStorage.getItem('token');
        if(storedToken){
            authCtx.authenticate(storedToken);
        }
        setIsTryingLogin(false);
    }
    fetchedToken();
  },[]);

  if(isTryingLogin){
    return <AppLoading/>;
  }
  return <Navigation/>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
        <AuthContextProvider>
          <Root/>
        </AuthContextProvider>
    </>
      
  );
}

