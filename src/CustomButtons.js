import {Text,TouchableOpacity} from 'react-native'
import { Entypo, AntDesign } from '@expo/vector-icons'

export default function CustomButton({title,onPress,icon,color,background}){
    return (
        <TouchableOpacity onPress={onPress} className={`absolute top-0 ${background}`}>
            <AntDesign name={icon} size={28} color={color? color:'#f1f1f1'} />
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}