import { Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert, SafeAreaView, ScrollView, StatusBar, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import UploadImage from '../components/UploadImage';
import Navbar from '../components/NavBar';
import axios from 'axios'
import FaIcon from 'react-native-vector-icons/FontAwesome'
import DropDownPicker from 'react-native-dropdown-picker';
import { preferenceSettings } from '../consts/constants';


const MyProfilePage = () => {
    const [userPreferences, setUserPreferences] = useState(null)
    const [selectedPreference, setSelectedPreference] = useState(null)
    const [openSugarDropdown, setOpenSugarDropdown] = useState(false)
    const [openFatDropdown, setOpenFatDropdown] = useState(false)

    useEffect(() => {
        getPreferences()
    }, [])

    const getPreferences = async () => {
        try {
            let results = await axios.get('https://hcs-backend.onrender.com/api/userpreference/2')
            const preferences = []
            for (let p of results.data) {
                preferences.push(p.preference)
            }
            console.log("hi1")
            console.log(preferences)
            setUserPreferences(preferences)
        } catch (err) {
            console.log(err.message)
        }
    }

    const removePreference = () => {

    }

    const renderPreferences = () => {
        const toRender = []
        console.log('hi')
        console.log(userPreferences)
        for (let p of userPreferences) {
            toRender.push(
                <View className='bg-white m-2 h-8 flex-1 flex-row justify-evenly items-center'>
                    <Text className=''>{p}</Text>
                    <FaIcon
                        name="remove"
                        color="red"
                        size={20}
                        onPress={() => removePreference()}
                    ></FaIcon>
                </View>)
        }
        return toRender
    }


    return (
        <>
            <View className="p-4 flex-4 bg-white" >
                <Text className="text-2xl text-center font-bold m-1 mt-8 mb-5 ">My Profile Page</Text>
                <ScrollView className='h-4/5 mb-12'>
                    <View className='flex-1 items-center'>
                        <UploadImage />
                    </View>
                    <View className='flex-1 items-center my-4'>
                        <View className='bg-indigo-500 rounded-xl p-4 w-4/5'>
                            <Text className="text-xl text-center font-bold m-1 mt-2 mb-5 text-white">My Preferences</Text>
                            {userPreferences ? renderPreferences() : <Text className='text-white'>Loading preferences...</Text>}
                        </View>
                    </View>
                    <View className='flex-1 items-center my-4'>
                        <View className='bg-indigo-500 rounded-xl p-4 w-4/5'>
                            <Text className="text-xl text-center font-bold m-1 mt-2 mb-5 text-white">Manage Preferences</Text>
                            <View>
                                <Text className="font-bold m-1 mt-2 mb-1 text-white">Sugar</Text>
                                <DropDownPicker
                                    className='my-2'
                                    open={openSugarDropdown}
                                    setOpen={setOpenSugarDropdown}
                                    value={selectedPreference}
                                    items={preferenceSettings['sugar']}
                                    setItems={() => { }}
                                    setValue={setSelectedPreference}
                                    placeholder="select a preference to add"
                                    listMode="SCROLLVIEW"
                                />
                            </View>
                            <View>
                                <Text className="font-bold m-1 mt-2 mb-1 text-white">Fat</Text>
                                <DropDownPicker
                                    className='my-2'
                                    open={openSugarDropdown}
                                    setOpen={setOpenSugarDropdown}
                                    value={selectedPreference}
                                    items={preferenceSettings['sugar']}
                                    setItems={() => { }}
                                    setValue={setSelectedPreference}
                                    placeholder="select a preference to add"
                                    listMode="SCROLLVIEW"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Navbar>
                </Navbar>
            </View>
        </>
    )
}

export default MyProfilePage