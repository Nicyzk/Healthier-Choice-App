import { View, Text, Image, TouchableWithoutFeedback, Touchable, Switch } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation()
    return (
        <View className="left-4 flex-row w-full h-20 bottom-0.5 items-center justify-evenly absolute py-4 bg-white rounded-lg">
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MyLists')}>
                <View className="px-1">
                    <FaIcon
                        name="home"
                        color="#D3D3D3"
                        size={30}
                    ></FaIcon>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Info')}>
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

// const NavBar = () => (
//     <View className=" fixed top-40 left-0 flex-row justify-center justify-between bg-white-50 rounded-lg border border-0" style={{ elevation: 2 }}>
//         <View className='flex-row w-80 my-2 justify-evenly'>
//                         <FaIcon
//                             name="home"
//                             color="grey"
//                             size={40}
//                             onPress={() => navigation.navigate('MyLists')}
//                         ></FaIcon>
//                         <FaIcon
//                             name="info"
//                             color="grey"
//                             size={40}
//                             onPress={() => { }}
//                         ></FaIcon>
//                         <FaIcon
//                             name="shopping-basket"
//                             color="grey"
//                             size={35}
//                             onPress={() => { }}
//                         ></FaIcon>
//                         <FaIcon
//                             name="gear"
//                             color="grey"
//                             size={40}
//                             onPress={() => { }}
//                         ></FaIcon>
//                     </View>
//     </View>
// )

// export default NavBar