import FaIcon from 'react-native-vector-icons/FontAwesome'
import IoIcon from 'react-native-vector-icons/Ionicons'
import { View, Text, Button, TextInput, Image } from 'react-native';
import Carousel from '../components/carousel'

const images = { 1: require('../assets/image1.png'), 2: require('../assets/image2.png')}

const HomePage = () => (
    <View className="p-4 flex-1 bg-white" >
        <Text className="text-2xl text-center font-bold m-4 py-4 ">Healthier Choices Near You</Text>
        <View className="m-4 w-11/12 flex-row justify-center justify-between bg-gray-50 rounded-lg border border-gray-300" style={{ elevation: 2 }}>
            <View className="pl-2 w-2/12"><FaIcon.Button
                name="search"
                className='h-12 bg-gray-50'
                color="black"
                onPress={() => { }}
            ></FaIcon.Button></View>
            <TextInput type="search" className="w-7/12" selectionColor={'black'}
                placeholder="Search..." required>
            </TextInput>
            <View className="w-2/12 justify-center"><IoIcon.Button
                name="filter"
                className='h-12 bg-gray-50'
                color="black"
                onPress={() => { }}
            ></IoIcon.Button></View>
        </View>
        <Text className="p-1 m-4 w-28 border-b-4 border-transparent border-b-indigo-500/75 text-center">Recommended</Text>
        <Carousel images={images}></Carousel>
    </View>
)

export default HomePage