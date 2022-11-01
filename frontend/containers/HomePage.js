import { View, Text, TouchableWithoutFeedback, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import CarouselNew from '../components/Carousel_new'
import { useEffect, useState } from 'react'
import DropdownMulti from '../components/Dropdown-multi'
import DropdownSingle from '../components/Dropdown-single';
import DropDownPicker from 'react-native-dropdown-picker';
import { typeOptions, healthyChoicesOptions } from '../consts/constants'
import Modal from '../components/Modal'
import React from 'react';
import axios from 'axios'
import { useNavigation, useIsFocused } from '@react-navigation/native';

const HomePage = ({ navigation }) => {
    const [showFilter, setShowFilter] = useState(false);
    const [types, setTypes] = useState([])
    const [healthyChoices, setHealthyChoices] = useState({})
    const [searchProductDetails, setSearchProductDetails] = useState(null)
    const [searchText, setSearchText] = useState("")
    const [recommendedProductDetails, setRecommendedProductDetails] = useState(null)
    const [openListDropdown, setOpenListDropdown] = useState(false)
    const [selectedList, setSelectedList] = useState(null)
    const [addtoListProductId, setAddToListProductId] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    const [lists, setLists] = useState([])
    const focus = useIsFocused()

    // get users lists
    useEffect(() => {
        getLists()
    }, [focus])

    const getLists = async () => {
        try {
            const results = await axios.get("https://hcs-backend.onrender.com/api/userlists/2")
            const updatedLists = {}
            for (let el of results.data) {
                if (!updatedLists[el.list]) updatedLists[el.list] = []
                if (el.productid != null) updatedLists[el.list].push(el.productid)
            }
            setLists(updatedLists)
        } catch (err) {
            console.log(err.message)
        }
    }

    const renderFilter = () => {
        const healthFilters = []
        let i = 0   // for z-index bug in dropdown
        for (let key in healthyChoicesOptions) {
            healthFilters.push(
                <View className="my-2" key={key} style={{ zIndex: 10 - i }}>
                    <DropdownSingle
                        style={{ zIndex: 10 - i }}
                        options={healthyChoicesOptions[key]}
                        value={healthyChoices} // Ex: {'Sugar': 'low in sugar'}
                        value_key={key}
                        index={i}
                        setValue={(newChoices) => {
                            let updated = healthyChoices
                            updated[key] = newChoices()
                            console.log(updated)
                            setHealthyChoices(updated)
                        }} />
                </View>
            )
            i++
        }
        return (
            <>
                <TouchableWithoutFeedback onPress={() => setShowFilter(!showFilter)}>
                    <View className='absolute h-full w-full bg-gray-200 opacity-80'></View>
                </TouchableWithoutFeedback>
                <View className="absolute h-full w-full flex-1 justify-center items-center z-2">
                    <View className="w-80 rounded-xl p-8 bg-white">
                        <Text className='text-2xl font-bold text-center'>Filter by category</Text>
                        <View className="my-4" style={{ zIndex: 20 }}>
                            <Text className="font-bold pb-1">Type:</Text>
                            <DropdownMulti options={typeOptions} value={types} setValue={setTypes} />
                        </View>
                        <View>
                            <Text className="font-bold">Health Filter: </Text>
                            <ScrollView className='h-1/2'>
                                {healthFilters}
                                <View className='h-32'></View>
                            </ScrollView>
                        </View>
                        <View className="py-2" >
                            <TouchableOpacity
                                className="rounded-3xl justify-center bg-indigo-500 active:bg-indigo-600"
                                activeOpacity={1.0}
                                onPress={() => {
                                    search()
                                    setShowFilter(false)
                                }}>
                                <Text className="py-4 text-center text-lg text-white">Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View >
                </View>

            </>
        )
    }

    // Search Function
    const search = async () => {
        console.log('ran')
        //? disable types because causing errors
        let keywords = []
        for (let i in healthyChoices) {
            keywords.push(healthyChoices[i])
        }
        // keywords = ['Low in sugar', 'Low in fat']

        for (let i=0; i<keywords.length; i++) {
            if (keywords[i] == '') keywords.splice(i,1)
        }

        console.log('searchText', searchText)
        console.log(keywords)   //['']
        const details = []
        try {
            const data = {}
            let results = {data: []}

            // No search no keyword: Return everything
            if (!searchText && keywords.length == 0) {
                results = await axios.get(`https://hcs-backend.onrender.com/api/search/all/*`)
                for (let e of results.data) data[e.productid] = e // results.data = [{ productid: 1, ...}, ...]
                console.log(data)
                for (let key in data) {
                    details.push(data[key])
                }
            }

            // No search have keyword: Return keyword
            else if (!searchText && keywords.length != 0) {
                console.log('nosearch text & ')
                for (let i=0; i<keywords.length; i++) {
                    results = await axios.get(`https://hcs-backend.onrender.com/api/search/subcategory/${keywords[i]}`)
                    for (let e of results.data) data[e.productid] = e
                }
                console.log(data)
                for (let key in data) {
                    details.push(data[key])
                }
            }

            // Have search no keyword: Return search
            else if (searchText && keywords.length == 0) {
                console.log('ran 2')
                if (searchText) results = await axios.get(`https://hcs-backend.onrender.com/api/search/all/${searchText}`)
                for (let e of results.data) data[e.productid] = e // results.data = [{ productid: 1, ...}, ...]
                console.log(data)
                for (let key in data) {
                    details.push(data[key])
                }
            }

            // Have search have keyword: Return the intersection
            else {
                let temp = []
                if (searchText) results = await axios.get(`https://hcs-backend.onrender.com/api/search/all/${searchText}`)
                for (let e of results.data) temp.push(e.productid) // temp = [productkey1, productkey2] to be checked against
                for (let i=0; i<keywords.length; i++) {
                    results = await axios.get(`https://hcs-backend.onrender.com/api/search/subcategory/${keywords[i]}`)
                    for (let e of results.data) {
                        if (temp.includes(e.productid)) {
                            data[e.productid] = e
                        }
                    }
                }
                console.log(data)
                for (let key in data) {
                    details.push(data[key])
                }
            }
            console.log('zk')
            console.log(details)

            setSearchProductDetails(details) // details = [{ productid: 1, ...}, ...]
        } catch (err) {
            console.log('here')
            console.log(err.message)
        }
    }

    useEffect(() => { if (searchProductDetails) renderSearchResults(); }, [searchProductDetails])

    const renderSearchResults = () => (
        <>
            <Text className="p-1 m-4 w-28 border-b-4 border-transparent border-b-indigo-500/75 text-center">Search Results</Text>
            <CarouselNew productDetails={searchProductDetails} setAddToListProductId={setAddToListProductId}></CarouselNew>
        </>
    )

    // Get recommended products
    useEffect(() => {
        getRecommendedProducts()
    }, [focus])

    const getRecommendedProducts = async () => {
        let results = await axios.get('https://hcs-backend.onrender.com/api/userpreference/2')
        const preferences = []
        for (let p of results.data) {
            preferences.push(p.preference)
        }
        console.log(preferences)
        results = await axios.get(`https://hcs-backend.onrender.com/api/search/all/${preferences.join(' ')}`)
        setRecommendedProductDetails(results.data)
    }

    // Add Product to List
    const listModalContent = () => {
        const items = []
        for (let l in lists) items.push({label: l, value: l})
        return (
            <View className='py-8'>
                <Text className='my-4'>Upon confirming, the product id: {addtoListProductId} will be added to the selected list</Text>
                <DropDownPicker
                    open={openListDropdown}
                    setOpen={setOpenListDropdown}
                    value={selectedList}
                    items={items}
                    setItems={()=> {}}
                    setValue={setSelectedList}
                    placeholder="select a list"
                />
            </View>
        )
    }

    //? Wait for list name already exists error to be solved
    const addProductToList = async () => {
        const result = await axios.post('https://hcs-backend.onrender.com/api/userlists/', {
            "userid":2,
            "list":selectedList,
            "productid":addtoListProductId
        })

        console.log(result.data)
    }

    return (
        <>
            <View className="p-4 flex-1 bg-white" >
                <Text className="text-2xl text-center font-bold m-4 py-4">Healthier Choices Near You</Text>
                <SearchBar searchText={searchText} setSearchText={setSearchText} search={search} showFilter={showFilter} setShowFilter={setShowFilter}></SearchBar>
                <ScrollView>
                    {!searchProductDetails ? null : (searchProductDetails.length > 0 ? (renderSearchResults()) : <Text>No results found</Text>)}
                    <Text className="p-1 m-4 w-28 border-b-4 border-transparent border-b-indigo-500/75 text-center">Recommended</Text>
                    {!recommendedProductDetails ? <Text>Loading recommended products...</Text>: (recommendedProductDetails.length == 0 ? <Text>No recommendations found</Text>: <CarouselNew productDetails={recommendedProductDetails} setAddToListProductId={setAddToListProductId}></CarouselNew>)}
                    <View className='h-12'></View>
                </ScrollView>
                <NavBar></NavBar>
            </View>
            {showFilter ? renderFilter() : null}
            {addtoListProductId ? (
                <Modal title="Add to my list" btnText="Confirm" onClick={() => {
                    addProductToList()
                    setAddToListProductId(false)
                }} onCancel={() => setAddToListProductId(false)} >
                    {listModalContent()}
                </Modal>
            ) : null}
            {errMsg ? (
                <Modal title="Error" btnText="Done" onClick={() => setErrMsg("")} onCancel={() => setErrMsg("")}>
                    <View className='py-8'><Text className='text-center text-xl'>{errMsg}</Text></View>
                </Modal>) : null}
        </>
    )

}

export default HomePage