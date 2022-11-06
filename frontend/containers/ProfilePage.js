import { Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert, SafeAreaView, ScrollView, StatusBar, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import UploadImage from '../components/UploadImage';
import Navbar3 from '../components/NavBar3';
import axios from 'axios'
import FaIcon from 'react-native-vector-icons/FontAwesome'
import DropDownPicker from 'react-native-dropdown-picker';
import { preferenceSettings } from '../consts/constants';
import Modal from '../components/Modal'


const MyProfilePage = () => {
    const [userPreferences, setUserPreferences] = useState(null)
    const [selectedPreference, setSelectedPreference] = useState(null)
    const [openSugarDropdown, setOpenSugarDropdown] = useState(false)
    const [openFatDropdown, setOpenFatDropdown] = useState(false)
    const [openSodiumDropdown, setOpenSodiumDropdown] = useState(false)
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState("")
    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
        getPreferences()
    }, [loading])

    useEffect(() => {
        console.log(selectedPreference)
    }, [selectedPreference])

    const getPreferences = async () => {
        try {
            let results = await axios.get('https://hcs-backend.onrender.com/api/userpreference/2')
            const preferences = []
            for (let p of results.data) {
                preferences.push(p.preference)
            }
            setUserPreferences(preferences)
        } catch (err) {
            console.log(err.message)
        }
    }

    const addPreference = async () => {
        try {
            setLoading(true)
            const results = await axios.post('https://hcs-backend.onrender.com/api/userpreference', { userid: 2, preference: selectedPreference })
            if (typeof results.data == 'string') setMsg(results.data)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            setErrMsg(err.message)
        }
        
    }

    const removePreference = async(p) => {
        try {
            setLoading(true)
            console.log(p)
            const results = await axios.delete('https://hcs-backend.onrender.com/api/userpreference/2', { data: { userid: 2, preference: p }})
            console.log(results.data)
            if (typeof results.data == 'string') setMsg(results.data)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
            setErrMsg(err.message)
        }
    }

    const renderPreferences = () => {
        const toRender = []
        for (let p of userPreferences) {
            toRender.push(
                <View key={p} className='bg-white px-2 m-2 h-8 flex-1 flex-row items-center'>
                    <FaIcon
                        name="remove"
                        color="red"
                        size={20}
                        onPress={() => {
                            console.log(p)
                            removePreference(p)
                        }}
                    ></FaIcon>
                    <Text className='ml-4'>{p}</Text>
                    
                </View>)
        }
        return toRender
    }


    return (
        <>
            <View className="p-4 flex-1 bg-white" >
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
                            <View style={{ zIndex: 10 }}>
                                <Text className="font-bold m-1 mt-2 mb-2 text-white">Sugar</Text>
                                <DropDownPicker
                                    style={{ zIndex: 10 }}
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
                            <View style={{ zIndex: 9 }}>
                                <Text className="font-bold m-1 mt-2 mb-1 text-white">Fat</Text>
                                <DropDownPicker
                                    style={{ zIndex: 9}}
                                    className='my-2'
                                    open={openFatDropdown}
                                    setOpen={setOpenFatDropdown}
                                    value={selectedPreference}
                                    items={preferenceSettings['fat']}
                                    setItems={() => { }}
                                    setValue={setSelectedPreference}
                                    placeholder="select a preference to add"
                                    listMode="SCROLLVIEW"
                                />
                            </View>
                            <View style={{ zIndex: 8 }}>
                                <Text className="font-bold m-1 mt-2 mb-1 text-white">Sodium</Text>
                                <DropDownPicker
                                    style={{ zIndex: 8 }}
                                    className='my-2'
                                    open={openSodiumDropdown}
                                    setOpen={setOpenSodiumDropdown}
                                    value={selectedPreference}
                                    items={preferenceSettings['sodium']}
                                    setItems={() => { }}
                                    setValue={setSelectedPreference}
                                    placeholder="select a preference to add"
                                    listMode="SCROLLVIEW"
                                />
                            </View>
                            <View className="mt-6" >
                                <TouchableOpacity
                                    className="rounded-3xl justify-center bg-white mb-2 "
                                    activeOpacity={1.0}
                                    onPress={addPreference}>
                                    <Text className="py-4 text-center">Add preference</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Navbar3>
                </Navbar3>
            </View>
            {loading ? <View className='bg-slate-100 h-full w-full absolute flex-1 justify-center items-center'><Text>Loading...please wait</Text></View>: null}
            {msg ? (
                <Modal title="Message" btnText="Done" onClick={() => setMsg("")} onCancel={() => setMsg("")}>
                    <View className='py-8'><Text className='text-center text-xl'>{msg}</Text></View>
                </Modal>) : null}
            {errMsg ? (
                <Modal title="Error" btnText="Done" onClick={() => setErrMsg("")} onCancel={() => setErrMsg("")}>
                    <View className='py-8'><Text className='text-center text-xl'>{errMsg}</Text></View>
                </Modal>) : null}
        </>
    )
}

export default MyProfilePage