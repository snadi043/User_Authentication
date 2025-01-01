import {View, Text, Pressable ,StyleSheet} from 'react-native';
import { Colors } from '../../constants/colors';

export default function FlatButton({onPress, children}){
    return (
        <Pressable 
            onPress={onPress}
            style={({pressed}) => [StyleSheet.button, pressed && styles.pressed]}>
            <View>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    pressed:{
        opacity: 0.5,
    },
    buttonText:{
        textAlign: 'center',
        color: Colors.primary100,
    }
})