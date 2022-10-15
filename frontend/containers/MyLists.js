

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button'
import SearchBar from '../components/searchBar'
import styles from '../components/ButtonStyles';
import NavBar from '../components/navBar';

export default function MyLists () {
    const [name,setName] = useState("")
    
    const ClickMe = () =>{
      console.log(name)
    }

    return(
    
    <View className="p-4 flex-1 bg-white p-4" >
      <Text className="text-2xl text-center font-bold m-4 py-4 ">My Lists</Text>
      <SearchBar></SearchBar>
      <Button styles={styles.rectbutton} text = {styles.blacktext}name='Beverages' click={ClickMe}/>
      <Button styles={styles.rectbutton} text = {styles.blacktext}name='Groceries' click={ClickMe}/>
      <Button styles={styles.rectbutton} text = {styles.blacktext} name='Snacks' click={ClickMe}/>

      <Button styles={styles.roundbutton} text = {styles.whitetext} name='Create New List' click={ClickMe}/>
      <NavBar></NavBar>
    </View>
        
  )
}