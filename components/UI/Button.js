import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Colors } from '../../constants/colors';

export default function Button({onPress, children}){
    return (
        <Pressable 
            onPress={onPress}
            style={({pressed}) => [styles.button, pressed && styles.pressed]}>
            <View>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button:{
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {height: 1, width: 1},
        shadowRadius: 4,
        shadowOpacity: 0.25,
        backgroundColor: Colors.primary500,
    },
    pressed:{
        opacity: 0.75,
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
});