import { View, Text, Image, TouchableWithoutFeedback, Touchable, Switch } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation()
    return (
        <View className="left-3 flex-row w-full h-18 bottom-0.5 items-center justify-evenly absolute py-4 bg-white rounded-lg">
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MyLists')}>
                <View className="px-1">
                    <FaIcon
                        name="home"
                        color="#D3D3D3"
                        size={30}
                    ></FaIcon>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('InfoPage')}>
                <View className="px-1">
                    <FaIcon
                        name="info"
                        color="#D3D3D3"
                        size={30}
                    ></FaIcon>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MyLists')}>
                <View className="px-1">
                    <FaIcon
                        name="shopping-basket"
                        color="#D3D3D3"
                        size={28}
                    ></FaIcon>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('AboutPage')}>
                <View className="px-1">
                    <FaIcon
                        name="gear"
                        color="#D3D3D3"
                        size={30}
                    ></FaIcon>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Navbar
