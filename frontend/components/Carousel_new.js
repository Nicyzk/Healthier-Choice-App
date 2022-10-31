import React, { useRef, useState } from 'react'
import FaIcon from 'react-native-vector-icons/FontAwesome'
import { Animated, Image, View, Text, ScrollView, TouchableWithoutFeedback, StyleSheet, Pressable } from 'react-native'
import images from '../consts/images'
import Product from './Product'
import { useNavigation } from '@react-navigation/native';

const Carousel = ({ productDetails, setAddToListProductId }) => {
    const navigation = useNavigation()
    const rendered = []

    for (let p of productDetails) {
        rendered.push(
            <Product key={p.productid} name={p.productname} hcs={p.subcategory} onBasketClicked={() => setAddToListProductId(p.productid)} onMapClicked={() => navigation.navigate('MapPage', { location: p.location })} imgSource={images[p.productid]}></Product>
        )
    }

    return (
        <>
            <View>
                <Animated.View className='flex-1 flex-row'>
                    <ScrollView horizontal={true}>
                        {rendered}
                    </ScrollView>
                </Animated.View>
            </View>
        </>
    )
}

export default Carousel
