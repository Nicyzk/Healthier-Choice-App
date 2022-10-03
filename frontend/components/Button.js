import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ButtonStyles';

export default function Button(props){
  return(
    <TouchableOpacity onPress={()=>props.click}>
      <View style={props.styles}>
        <Text style = {props.text}>  {props.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

