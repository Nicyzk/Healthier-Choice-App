import React from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome'
import { Image, View, Text } from 'react-native'


const Product = ({name, hcs, onBasketClicked, onMapClicked, imgSource}) => {
    return (
        <View className='mx-2 my-6 py-2 h-56 w-48 rounded-3xl' style={{ backgroundColor: '#463EC633' }}>
            <View className='bottom-10 items-center'>
                <Image className="h-40 w-40 rounded-3xl" source={imgSource} />
                <Text className='font-bold text-xs text-center'>{name}</Text>
                <Text className='text-xs text-center'>{hcs}</Text>
                <View className='flex-row absolute w-20 my-56 justify-evenly'>
                    <FaIcon
                        name="shopping-basket"
                        color="black"
                        size={20}
                        onPress={onBasketClicked}
                    ></FaIcon>
                    <FaIcon
                        name="map-marker"
                        color="black"
                        size={20}
                        onPress={onMapClicked}
                    ></FaIcon>
                </View>
            </View>
        </View>
    )
}

export default Product