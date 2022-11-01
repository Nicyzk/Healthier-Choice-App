import { View, Text, Image, TouchableWithoutFeedback, Touchable, Switch } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";

const Navbar1 = () => {
    const navigation = useNavigation();
    const [actionTriggered, setActionTriggered] = useState('');
    return (
        <View className="flex-row w-screen h-16 bottom-0 items-center justify-between absolute py-4 bg-white rounded-lg border-2 border-slate-200">
            <TouchableWithoutFeedback onPress={() => {
                navigation.navigate('HomePage');
                
            }}>
                <View className="ml-12">
                    <FaIcon
                        name="home"
                        color="#6c6e71"
                        size={30}
                    ></FaIcon>
                </View>
                
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                navigation.navigate('InfoPage');
                }}>
                <View className="px-0 ml-2">
                    <FaIcon
                        name="info"
                        color="#463EC680"
                        size={30}
                    ></FaIcon>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MyLists')}>
                <View className="px-1 ml-2">
                    <FaIcon
                        name="shopping-basket"
                        color="#6c6e71"
                        size={28}
                    ></FaIcon>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MyProfilePage')}>
                <View className="mr-12">
                    <FaIcon
                        name="gear"
                        color="#6c6e71"
                        size={30}
                    ></FaIcon>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Navbar1
