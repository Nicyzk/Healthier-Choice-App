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

const HomePage = ({ navigation }) => {
    const [showFilter, setShowFilter] = useState(false);
    const [types, setTypes] = useState([])
    const [healthyChoices, setHealthyChoices] = useState({})
    const [searchResults, setSearchResults] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [recommendedProductDetails, setRecommendedProductDetails] = useState([])
    const [openListDropdown, setOpenListDropdown] = useState(false)
    const [selectedList, setSelectedList] = useState(null)
    const [addtoListProductId, setAddToListProductId] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    const [lists, setLists] = useState([])

    // get users lists
    useEffect(() => {
        getLists()
    }, [])

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

    // Filter Function
    const filter = async () => {
        const keywords = types
        for (let i in healthyChoices) {
            keywords.push(healthyChoices[i])
        }
        console.log(keywords)
        // await search(keywords) // updates searchResult
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
                                    filter()
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
    const search = async (kw) => {
        try {
            const keywords = kw.split(' ')
            console.log(keywords)
            // TO EDIT
            // const results = await axios.post("https://hcs-backend.onrender.com/api/search/all", { keywords })
            const updatedResults = []
            updatedResults.push({
                "productid": 5,
                "productname": "Afiat Premium Corn Oil 2L",
                "productdescription": "tester description 5",
                "subcategory": "Lower in Saturated Fat",
                "location": "NTUC",
                "imgFile": "vitagen.png"
            }) // Testing Only!!
            setSearchResults(updatedResults)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => { if (searchResults.length > 0) renderSearchResults(); }, [searchResults])

    const renderSearchResults = () => (
        <>
            <Text className="p-1 m-4 w-28 border-b-4 border-transparent border-b-indigo-500/75 text-center">Search Results</Text>
            <Carousel images={images} navigation={navigation}></Carousel>
        </>
    )

    // Get recommended products
    useEffect(() => {
        getRecommendedProducts()
    }, [])
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

    const addProductToList = async () => {
        const result = await axios.post('https://hcs-backend.onrender.com/api/userlists/createlist', {
            "userid":2,
            "list":selectedList,
            "productid":addtoListProductId})

        console.log(result.data)
    }

    return (
        <>
            <View className="p-4 flex-1 bg-white" >
                <Text className="text-2xl text-center font-bold m-4 py-4">Healthier Choices Near You</Text>
                <SearchBar searchText={searchText} setSearchText={setSearchText} search={() => search(searchText)} showFilter={showFilter} setShowFilter={setShowFilter}></SearchBar>
                <ScrollView>
                    {!searchResults ? null : (searchResults.length > 0 ? renderSearchResults() : <Text>No results found</Text>)}
                    <Text className="p-1 m-4 w-28 border-b-4 border-transparent border-b-indigo-500/75 text-center">Recommended</Text>
                    <CarouselNew productDetails={recommendedProductDetails} setAddToListProductId={setAddToListProductId}></CarouselNew>
                    <View className='h-12'></View>
                </ScrollView>
                <NavBar></NavBar>
            </View>
            {showFilter ? renderFilter() : null}
            {addtoListProductId ? (
                <Modal title="Add to my list" btnText="Confirm" onClick={() => addProductToList()} onCancel={() => setAddToListProductId(false)} >
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