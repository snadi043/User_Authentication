// import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {IconButton} from './components/UI/IconButton';
import { Colors } from './constants/colors';

import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext } from 'react';

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

export default function App() {
  return (
    <>
      <StatusBar style="light" />
        <AuthContextProvider>
          <Navigation/>
        </AuthContextProvider>
    </>
      
  );
}

