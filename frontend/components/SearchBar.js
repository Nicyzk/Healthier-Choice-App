import FaIcon from 'react-native-vector-icons/FontAwesome'
import IoIcon from 'react-native-vector-icons/Ionicons'
import { View, TextInput } from 'react-native';

const SearchBar = ({ searchText, setSearchText, search, showFilter, setShowFilter }) => {

    return (
        <View className="m-4 w-11/12 flex-row justify-center justify-between bg-gray-50 rounded-lg border border-gray-300" style={{ elevation: 2 }}>
            <View className="pl-2 w-3/12"><FaIcon.Button
                name="search"
                className='h-12 bg-gray-50'
                color="black"
                onPress={search}
            ></FaIcon.Button></View>
            <TextInput type="search" className="w-7/12" selectionColor={'black'}
                onChangeText={setSearchText}
                value={searchText}
                placeholder="Search..." required>
            </TextInput>
            <View className="w-2/12 justify-center"><IoIcon.Button
                name="filter"
                className='h-12 bg-gray-50'
                color="black"
                onPress={() => setShowFilter(!showFilter)}
            ></IoIcon.Button></View>
        </View>
    )

}




export default SearchBar