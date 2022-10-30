import { View, Text } from 'react-native';
import SearchBar from '../components/searchBar'
import Carousel from '../components/carousel'

const images = { 1: require('../assets/image1.png'), 2: require('../assets/image2.png')}

const MyListBeverages = ({ navigation }) => (
    <View className="p-4 flex-1 bg-white" >
        <Text className="text-2xl text-center font-bold m-4 py-4 ">My Lists</Text>
        <SearchBar></SearchBar>
        <Text className="text-2xl text-center font-bold m-4 py-4 ">Beverages</Text>
        <Carousel images={images} navigation={navigation}></Carousel>
    </View>
)

export default MyListBeverages