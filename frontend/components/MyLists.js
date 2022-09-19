import { View, Image, SafeAreaView,  Text, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'
const width = Dimensions.get('screen').width/2-30

const MyLists = () => {
    //account for the bottom navigation icons??
    const Card = ({item}) => {
        return(
            <View style = {style.card}>
                <View style  = {{flex: 1}}> //location icon at the bottom of vitagen container
                    <View style={{width: 30, height: 30, borderRadius:15, alignItems: 'center', justifyContent: 'center'}}>
                        <icon name = "location" size = {18} />
                    </View>
                </View>
                <View style={{height: 100, alignItems: 'center'}}>
                    <Image style = {{flex: 1, resizeMode: 'contain'}} source = {drinks.img} />
                </View>
            </View>
    )};
    return(
        <SafeAreaView
            style ={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: COLORS.white,
            }}>
        <View style={style.header}>
            <View>
                <Image className="h-96 w-96" source={require('../assets/logo.png')} />
            </View>
            <View>
                <Text style={{fontsize: 40, fontWeight: 'bold'}}>My Lists</Text>
            </View>
        </View>
        <View style={{marginTop: 30, flexDirection: 'row'}}>
            <View style = {style.searchContainer}>
                <Icon name = 'search' size = {25} style = {{marginLeft: 20}} />
                <TextInput placeholder='Search' style ={style.input} />
            </View>
            <View style = {style.sortBtn}>
                <Icon name = 'sort' size = {30} color = {COLORS.white} />
            </View>
        </View>
        <View style={style.header}>
            <Text style={{fontsize: 30, fontWeight: 'bold'}}>Beverages</Text>
        </View>
        <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsHorizontalScrollIndicator ={true}
            showsVerticalScrollIndicator = {false}
            contentContainerStyle = {{
                marginTop: 10
            }}
            numColumns = {1}
            data = {drinks} 
            renderItem = {({item})=> <Card drink={item} />}
        />
            
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchContainer: {
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontsize: 18,
        fontWeight: 'bold',
        color: COLORS.dark,
        flex: 1
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 10
    },
    card: {
        height: 225,
        backgroundColor: COLORS.purple,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        padding: 15,
    }
});
export default MyLists