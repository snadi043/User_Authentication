import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './constants/colors';

import AuthenticationContent from './components/AuthenticationContent';

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
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: Colors.primary100}
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
    </Stack.Navigator>
  );
}

function Navigation(){
  return(
    <AuthenticationContent>
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
    </AuthenticationContent>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigation/>
    </>
  );
}

