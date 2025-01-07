import axios from 'axios';
import { useContext, useState, useEffect } from 'react';

import {View, Text, StyleSheet} from 'react-native';
import { AuthContext } from '../store/auth-context';

export default function WelcomeScreen(){
    const [fetchedMessage, setFetchedMessage] = useState('');

    const authCtx = useContext(AuthContext);
    const token = authCtx.token;


    useEffect(() => {
        axios.get('https://console.firebase.google.com/project/react-native-expensecalculator/database/react-native-expensecalculator-default-rtdb/data/~2F.json?auth=' + token).then(
        (response) => {setFetchedMessage(response.data);
    });
    }, [token]);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>You authenticated successfully.</Text>
            <Text>{fetchedMessage}</Text>
        </View>
        );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    }
});