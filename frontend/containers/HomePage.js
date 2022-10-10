import { View, Text, TouchableWithoutFeedback, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import SearchBar from '../components/searchBar'
import NavBar from '../components/navBar'
import Carousel from '../components/carousel'
import { useEffect, useState } from 'react'
import DropdownMulti from '../components/dropdown-multi'
import DropdownSingle from '../components/dropdown-single';
import { typeOptions, healthyChoicesOptions } from '../consts/constants'


const images = { 1: require('../assets/image1.png'), 2: require('../assets/image2.png') }

const HomePage = ({ navigation }) => {
    const [showFilter, setShowFilter] = useState(false);
    const [types, setTypes] = useState([])
    const [healthyChoices, setHealthyChoices] = useState({})

    const onFilterBtnClicked = () => {
        setShowFilter(false)
    }

    const renderFilter = () => {
        const healthFilters = []
        let i = 0   // for z-index bug in dropdown
        for (let key in healthyChoicesOptions) {
            healthFilters.push(
                <View className="my-2" key={key} style={{zIndex: 10-i}}>
                    <DropdownSingle
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
                            <Text className="font-bold">Type:</Text>
                            <DropdownMulti options={typeOptions} value={types} setValue={setTypes} />
                        </View>
                        <View>
                            <Text className="font-bold">Health Filter: </Text>
                            <ScrollView className='h-1/2'>
                                {healthFilters}
                            </ScrollView>
                        </View>
                        <View className="py-2" >
                            <TouchableOpacity
                                className="rounded-3xl justify-center bg-indigo-500 active:bg-indigo-600"
                                activeOpacity={1.0}
                                onPress={onFilterBtnClicked}>
                                <Text className="py-4 text-center text-lg text-white">Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View >
                </View>

            </>
        )
    }

    return (
        <>
            <View className="p-4 flex-1 bg-white" >
                <Text className="text-2xl text-center font-bold m-4 py-4 ">Healthier Choices Near You</Text>
                <SearchBar showFilter={showFilter} setShowFilter={setShowFilter}></SearchBar>
                <Text className="p-1 m-4 w-28 border-b-4 border-transparent border-b-indigo-500/75 text-center">Recommended</Text>
                <Carousel images={images} navigation={navigation}></Carousel>
                <NavBar></NavBar>
            </View>
            {showFilter ? renderFilter() : null}
        </>
    )

}



export default HomePage