import { View, Text, TouchableWithoutFeedback, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import Modal from '../components/Modal'
import images from '../consts/images'
import React from 'react';
import axios from 'axios';

const ListPage = ({ route }) => {
    const { listName, products } = route.params
    const [productDetails, setProductDetails] = useState(false)
    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
        getProductDetails()
    }, [])

    const getProductDetails = async () => {
        const details = []
        try {
            for (let id of products) {
                const result = await axios.get(`https://hcs-backend.onrender.com/api/search/product/${id}`)
                if (result.data.length <= 0) throw new Error('No product is found for this id')
                details.push(result.data[0])
            }
            setProductDetails(details)
        } catch (err) {
            setErrMsg(err.message)
            console.log(err.message)
        }
    }

    const renderProducts = () => {
        const products = []
        for (let p of productDetails) {
            products.push(
                <Product key={p.productid} name={p.productname} hcs={p.subcategory} onBasketClicked={() => { }} onMapClicked={() => { }} imgSource={images[p.productid]}></Product>
            )
        }
        return products
    }

    return (
        <>
            <View className="p-4 flex-1 bg-white p-4" >
                <Text className="text-2xl text-center font-bold m-4 py-4 ">{listName}</Text>
                <ScrollView className='w-full' contentContainerStyle={{ alignItems: 'center' }}>
                    {!productDetails ? <Text>Loading Products...</Text>: (productDetails.length == 0 ? <Text>No products in list</Text>: renderProducts())}
                    <View className='h-48'></View>
                </ScrollView>
                <NavBar></NavBar>
            </View>
            {errMsg ? (
                <Modal title="Error" btnText="Done" onClick={() => setErrMsg("")} onCancel={() => setErrMsg("")}>
                    <View className='py-8'><Text className='text-center text-xl'>{errMsg}</Text></View>
                </Modal>) : null}
        </>
    )
}

export default ListPage