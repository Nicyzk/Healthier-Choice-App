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

export default function SugarPage () {
    const [name,setName] = useState("")
    const navigation = useNavigation()
    
    const ClickMe = () =>{
      console.log(name)
    }

    return(
    
    <View className="p-2 flex-1 bg-white" >
    <Text className="text-2xl text-center font-bold m-0 py-4 ">HCS Taglines And What They Mean</Text>
    <View className='m-3 my-0 h-88 w-58 rounded-2xl' style={{ backgroundColor: '#463EC633' }}> 
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

      <View className='m-3 my-1 h-50 w-58 rounded-2xl' style={{ backgroundColor: '#463EC633' }}> 
                <View className='bottom6 items-center'>
                    {/* <Text className='text-center'>Sugar</Text> */}
                    <View className='flex-row w-72 my-2 items-center justify-evenly'>
                        <Text styles={styles.blacktext}>Lower in Sugar:
                        Products carrying HCS with this tagline contain at least 25% less sugar compared to similar products from the same food category.  Example of foods carrying HCS with this tagline includes sweetened drinks such as Asian drinks, carbonated drinks, cultured milk products, juice drinks and sweet snacks such as chocolate confectionery.</Text>
                    </View>
                </View>
      </View>

      <View className='m-3 my-1 h-50 w-58 rounded-2xl' style={{ backgroundColor: '#463EC633' }}> 
                <View className='bottom6 items-center'>
                    {/* <Text className='text-center'>Sugar</Text> */}
                    <View className='flex-row w-72 my-2 items-center justify-evenly'>
                        <Text styles={styles.blacktext}>No added Sugar:
                        Products carrying HCS with this tagline contain no added sugar to the product. This means that no additional free sugars or ingredients containing free sugars were added during the processing of the product. Examples of foods carrying HCS with this tagline include beverages such as fruit juice, coffee and tea, as well as, fruit spreads and dried fruit.</Text>
                    </View>
                </View>
      </View>

      <View className='m-3 my-1 h-50 w-58 rounded-2xl' style={{ backgroundColor: '#463EC633' }}> 
                <View className='bottom6 items-center'>
                    {/* <Text className='text-center'>Sugar</Text> */}
                    <View className='flex-row w-72 my-2 items-center justify-evenly'>
                        <Text styles={styles.blacktext}>Sugar Free:
                        Products carrying HCS with this tagline contain less than or equal to 0.5g sugars per 100g or per 100ml of the product. 

Our sugar consumption should not be more than 10 per cent of our daily energy intake. For most adults, that is about 10 teaspoons of sugar (based on a 2000- daily calorie intake). One way to reduce your sugar intake is to opt for sugar free drinks. </Text>
                    </View>
                </View>
      </View>

    <NavBar></NavBar>
    </View>
        
  )
}