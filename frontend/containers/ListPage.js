import { View, Text, TouchableWithoutFeedback, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import NavBar2 from '../components/NavBar2'
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import Modal from '../components/Modal'
import images from '../consts/images'
import React from 'react';
import axios from 'axios';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const ListPage = ({ route }) => {
    const { listName, products, lists } = route.params
    const [productDetails, setProductDetails] = useState(false)
    const [msg, setMsg] = useState("")
    const [showDeleteProductModal, setShowDeleteProductModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    const navigation = useNavigation()
    const [addtoListProductId, setAddToListProductId] = useState(false)
    const [openListDropdown, setOpenListDropdown] = useState(false)
    const [productToDelete, setProductToDelete] = useState(null)
    const [selectedList, setSelectedList] = useState(null)
    const focus = useIsFocused()

    useEffect(() => {
        getProductDetails()
    }, [focus, msg, showDeleteProductModal])

    const getProductDetails = async () => {
        const pid = []
        const details = []
        try {
            // set products based on users 
            const result = await axios.get(`https://hcs-backend.onrender.com/api/userlists/2`)
            for (let el of result.data) {
                if (el.list == listName && el.productid != null) pid.push(el.productid)
            }
            for (let i of pid) {
                let res = await axios.get(`https://hcs-backend.onrender.com/api/search/product/${i}`)
                if (res.data.length <=0) throw new Error('No product is found for this id!')
                details.push(res.data[0])
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
                <Product deleteProduct={() => {
                    setProductToDelete(p.productid)
                    setShowDeleteProductModal(true)
                }} canDelete={true} key={p.productid} name={p.productname} hcs={p.subcategory} onBasketClicked={() => setAddToListProductId(p.productid)} onMapClicked={() => navigation.navigate('MapPage', { location: p.location })} imgSource={images[p.productid]}></Product>
            )
        }
        return products
    }

    const deleteProduct = async () => {
        try {
            console.log(listName)
            const results = await axios.delete('https://hcs-backend.onrender.com/api/userlists/removeproduct', { data: { userid: 2, list: listName, productid: productToDelete } })
            if (typeof results.data == 'string') setMsg(results.data)
            setMsg("Product has been deleted from list!")
            setShowDeleteProductModal(false)
        } catch (err) {
            console.log(err)
            setErrMsg(err.message)
        }
    }

    const removeList = async () => {
        try {
            console.log(listName)
            const results = await axios.delete('https://hcs-backend.onrender.com/api/userlists/removelist', { data: { userid: 2, list: listName } })
            console.log(results.data)
            if (typeof results.data == 'string') setMsg(results.data)
            navigation.navigate('MyLists')
            // set message. List has been deleted, you will be navigated back to your lists page. 
            // navigate back to my lists
        } catch (err) {
            console.log(err)
            setErrMsg(err.message)
        }
    }

    const addProductToList = async () => {
        try {
            const result = await axios.post('https://hcs-backend.onrender.com/api/userlists/', {
                "userid": 2,
                "list": selectedList,
                "productid": addtoListProductId
            })
            setMsg("Item has been added successfully!")
        } catch (err) {
            console.log(err.message)
            setErrMsg(err.message)
        }

    }

    // Add Product to List
    const listModalContent = () => {
        const items = []
        for (let l in lists) items.push({ label: l, value: l })
        return (
            <View className='py-8'>
                <Text className='my-4'>Upon confirming, the product id: {addtoListProductId} will be added to the selected list</Text>
                <DropDownPicker
                    open={openListDropdown}
                    setOpen={setOpenListDropdown}
                    value={selectedList}
                    items={items}
                    setItems={() => { }}
                    setValue={setSelectedList}
                    placeholder="select a list"
                />
            </View>
        )
    }

    return (
        <>
            <View className="p-4 flex-1 bg-white p-4" >
                <Text className="text-2xl text-center font-bold m-4 py-4 ">{listName}</Text>
                <ScrollView className='w-full' contentContainerStyle={{ alignItems: 'center' }}>
                    {!productDetails ? <Text>Loading Products...</Text> : (productDetails.length == 0 ? <Text>No products in list</Text> : renderProducts())}
                    <View className='h-48'></View>
                </ScrollView>
                <View className="m-4 mx-8 py-2" >
                    <TouchableOpacity
                        className="rounded-3xl justify-center bg-red-500 active:bg-red-600 mb-8"
                        activeOpacity={1.0}
                        onPress={() => setShowDeleteModal(true)}>
                        <Text className="py-4 text-center text-white">Delete List</Text>
                    </TouchableOpacity>
                </View>
                <NavBar2></NavBar2>
            </View>
            {msg ? (
                <Modal title="Message" btnText="Done" onClick={() => setMsg("")} onCancel={() => setMsg("")}>
                    <View className='py-8'><Text className='text-center text-xl'>{msg}</Text></View>
                </Modal>) : null}
            {showDeleteModal ? (
                <Modal title="Delete List" btnText="Confirm" onClick={() => removeList()} onCancel={() => setShowDeleteModal(false)}>
                    <View className='py-8'><Text className='text-center text-xl'>Are you sure you want to delete this list?</Text></View>
                </Modal>) : null}
            {showDeleteProductModal ? (
                <Modal title="Remove Product From List" btnText="Confirm" onClick={() => deleteProduct()} onCancel={() => setShowDeleteProductModal(false)}>
                    <View className='py-8'><Text className='text-center text-xl'>Are you sure you want to delete this product?</Text></View>
                </Modal>) : null}
            {errMsg ? (
                <Modal title="Error" btnText="Done" onClick={() => setErrMsg("")} onCancel={() => setErrMsg("")}>
                    <View className='py-8'><Text className='text-center text-xl'>{errMsg}</Text></View>
                </Modal>) : null}
            {addtoListProductId ? (
                <Modal title="Add to my list" btnText="Confirm" onClick={() => {
                    addProductToList()
                    setAddToListProductId(false)
                }} onCancel={() => setAddToListProductId(false)} >
                    {listModalContent()}
                </Modal>
            ) : null}
        </>
    )
}

export default ListPage