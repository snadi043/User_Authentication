import { ActivityIndicator, View, Text, StyleSheet } from "react-native";

export default function LoadingOverlay({message}){
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="white"/>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    text:{
        fontSize: 16,
        textAlign:'center',
        marginTop: 10,
    }
}) 