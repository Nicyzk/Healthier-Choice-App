import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Button from '../components/Button'
import SearchBar from '../components/searchBar'
import styles from '../components/ButtonStyles';
import NavBar from '../components/navBar';
import { useNavigation } from '@react-navigation/native';
import FaIcon from 'react-native-vector-icons/FontAwesome'
import Fa5Icon from 'react-native-vector-icons/FontAwesome5'
import { Animated, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'

export default function InfoPage () {
    const [name,setName] = useState("")
    const navigation = useNavigation()
    
    const ClickMe = () =>{
      console.log(name)
    }

    return(
    
    <View className="p-5 flex-1 bg-white" >
      <Text className="text-2xl text-center font-bold m-4 py-6">HCS Taglines And What They Mean</Text>

    <TouchableOpacity
        onPress={() => navigation.navigate('SugarPage')}
    >   
      <View className='m-9 my-1 h-14 w-50 rounded-2xl' style={{ backgroundColor: '#463EC633' }}> 
                <View className='bottom6 items-center'>
                    {/* <Text className='text-center'>Sugar</Text> */}
                    <View className='flex-row w-40 my-2 items-center justify-evenly'>
                        <FaIcon
                            name="spoon"
                            color="lightblue"
                            size={40}
                        ></FaIcon>
                        <Text styles={styles.blacktext}>Sugar</Text>
                    </View>
                </View>
      </View>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => navigation.navigate('MyLists')}
    > 
      <View className='m-9 my-7 h-14 w-50 rounded-2xl' style={{ backgroundColor: '#463EC633' }}>
                <View className='bottom6 items-center'>
                    {/* <Text className='text-center'>Sugar</Text> */}
                    <View className='flex-row w-40 my-2 items-center justify-evenly'>
                        <FaIcon
                            name="cube"
                            color="lightblue"
                            size={40}
                        ></FaIcon>
                        <Text styles={styles.blacktext}>Sodium</Text>
                    </View>
                </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('MyLists')}
    > 
      <View className='m-9 my-1 h-14 w-50 rounded-2xl' style={{ backgroundColor: '#463EC633' }}>
                <View className='bottom6 items-center'>
                    {/* <Text className='text-center'>Sugar</Text> */}
                    <View className='flex-row w-40 my-2 items-center justify-evenly'>
                        <Fa5Icon
                            name="bone"
                            color="lightblue"
                            size={40}
                        ></Fa5Icon>
                        <Text styles={styles.blacktext}>Calcium</Text>
                    </View>
                </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('MyLists')}
    > 
      <View className='m-9 my-7 h-14 w-50 rounded-2xl' style={{ backgroundColor: '#463EC633' }}>
                <View className='bottom6 items-center'>
                    {/* <Text className='text-center'>Sugar</Text> */}
                    <View className='flex-row w-40 my-2 items-center justify-evenly'>
                        <Fa5Icon
                            name="burn"
                            color="lightblue"
                            size={40}
                        ></Fa5Icon>
                        <Text styles={styles.blacktext}>Cholestrol</Text>
                    </View>
                </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('MyLists')}
    > 
      <View className='m-9 my-1 h-14 w-50 rounded-2xl' style={{ backgroundColor: '#463EC633' }}>
                <View className='bottom6 items-center'>
                    {/* <Text className='text-center'>Sugar</Text> */}
                    <View className='flex-row w-40 my-2 items-center justify-evenly'>
                        <Fa5Icon
                            name="atom"
                            color="lightblue"
                            size={40}
                        ></Fa5Icon>
                        <Text styles={styles.blacktext}>Fats         </Text>
                    </View>
                </View>
      </View>
      </TouchableOpacity>

      <Button styles={styles.morebutton} text = {styles.whitetext} name='More to be added' click={ClickMe}/>
      <NavBar></NavBar>
    </View>
        
  )
}

            