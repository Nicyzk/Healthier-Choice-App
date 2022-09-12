import { View, Text, Button, TextInput } from 'react-native';

// const search = () => {
//    axios.post('/search', {
//     keywords: []
//    })
// }

const HomePage = () => (
    <View className="flex-1 items-center justify-center bg-white" >
        <Text className="text-white">Healthier Choices Near You</Text>
        <View className="relative">
            <TextInput type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
            </TextInput>
            <Button title="search" type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</Button>
        </View>
        
    </View>
)

export default HomePage