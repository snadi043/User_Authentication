import {View, Text, StyleSheet} from 'react-native';

export default function WelcomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>You authenticated successfully.</Text>
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