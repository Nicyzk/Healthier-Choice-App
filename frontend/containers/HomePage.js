import { View, Text } from 'react-native';
import SearchBar from '../components/searchBar'
import NavBar from '../components/navBar'
import Carousel from '../components/carousel'

const images = { 1: require('../assets/image1.png'), 2: require('../assets/image2.png')}

const HomePage = ({ navigation }) => (
    <View className="p-4 flex-1 bg-white" >
        <Text className="text-2xl text-center font-bold m-4 py-4 ">Healthier Choices Near You</Text>
        <SearchBar></SearchBar>
        <Text className="p-1 m-4 w-28 border-b-4 border-transparent border-b-indigo-500/75 text-center">Recommended</Text>
        <Carousel images={images} navigation={navigation}></Carousel>
        <NavBar></NavBar>
        
    </View>
)

export default HomePage