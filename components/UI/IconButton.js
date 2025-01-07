import { Pressable, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function IconButton({name, size, color, onPress}){
    return(
        <Pressable 
            onPress={onPress}
            style={({pressed}) => [pressed && styles.pressed, styles.button]}>
            <Ionicons name={name} size={size} color={color}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
    button:{
        margin: 8,
        borderRadius: 20,
    }
});