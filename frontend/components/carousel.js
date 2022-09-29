import React, { useRef, useState } from 'react'
import FaIcon from 'react-native-vector-icons/FontAwesome'
import { Animated, Image, View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native'

const Carousel = ({ images, navigation }) => {

    const renderedImg = []
    for (let key in images) {
        renderedImg.push(
            <View className='mx-2 my-6 py-4 h-56 w-48 rounded-3xl' style={{ backgroundColor: '#463EC633' }}>
                <View className='bottom-10 items-center'>
                    <Image className="h-40 w-40 rounded-3xl" key={key} source={images[key]} />
                    <Text className='font-bold text-lg'>Vitagen</Text>
                    <Text className='text-center'>Low in sugar</Text>
                    <View className='flex-row w-20 my-2 justify-evenly'>
                        <FaIcon
                            name="shopping-basket"
                            color="black"
                            size={20}
                            onPress={() => navigation.navigate('MyLists')}
                        ></FaIcon>
                        <FaIcon
                            name="map-marker"
                            color="black"
                            size={20}
                            onPress={() => { }}
                        ></FaIcon>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <Animated.View className='flex-1 flex-row'>
                <ScrollView horizontal={true}>
                    {renderedImg}
                </ScrollView>
            </Animated.View>
        </View>
    )
}

export default Carousel