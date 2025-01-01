import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Colors } from '../../constants/colors';

export default function Input({
    label, 
    onInputValueChange, 
    keyboardType,
    secure,
    value,
    isInvalid,
}){
    return(
        <View style={styles.container}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text>
            <TextInput
                style={[styles.input, isInvalid && styles.inputIsInvalid]}
                onChangeText={onInputValueChange}
                keyboardType={keyboardType}
                autoCapitalize='none'
                secureTextEntry={secure}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 8,
    },
    label: {
        color: 'white',
        marginBottom: 4,
    },
    labelInvalid:{
        color: Colors.error500,
    },
    input:{
        padding: 8,
        backgroundColor: Colors.primary500,
        borderRadius: 6,
        fontSize: 16,
    },
    inputIsInvalid:{
        backgroundColor: Colors.error100,
    }
});