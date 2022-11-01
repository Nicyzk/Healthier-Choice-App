import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import NavBar2 from '../components/NavBar2';
import Modal from '../components/Modal'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

export default function MyLists() {
  const [lists, setLists] = useState({})  // { shoppinglist1: [1,13,...] }
  const [showModal, setShowModal] = useState(false)
  const [newListName, setNewListName] = useState("")
  const [errMsg, setErrMsg] = useState("")

  const navigation = useNavigation()

  useEffect(() => {
    getLists()
  }, [showModal])

  const getLists = async () => {
    try {
      const results = await axios.get("https://hcs-backend.onrender.com/api/userlists/2")
      const updatedLists = {}
      for (let el of results.data) {
        if (!updatedLists[el.list]) updatedLists[el.list] = []
        if (el.productid != null) updatedLists[el.list].push(el.productid)
      }
      setLists(updatedLists)
    } catch (err) {
      console.log(err.message)
    }
  }

  const renderLists = () => {
    const rendered = []
    for (let list in lists) {
      rendered.push(
        <TouchableOpacity key={list} onPress={() => navigation.navigate('ListPage',  {listName: list, products: lists[list]})}>
          <View className="p-4 m-4 rounded-lg text-xl items-center justify-center" style={{ backgroundColor: '#463EC633' }}>
            <Text>{list}</Text>
          </View>
        </TouchableOpacity>

      )
    }
    return rendered
  }

  const modalContent = () => (
    <View>
      <TextInput
        className="h-16 px-8 my-8 border-2 border-slate-200 rounded-xl text-base"
        onChangeText={setNewListName}
        value={newListName}
        selectionColor={'black'}
        placeholder="Enter your new list name"
      />
    </View>
  )

  const createNewList = async () => {
    try {
      if (newListName == "") throw new Error("List name cannot be empty!")
      if (newListName in lists) throw new Error('Cannot create duplicate list!')
      const results = await axios.post("https://hcs-backend.onrender.com/api/userlists/createlist", {
        userid: 2,
        list: newListName
      })
      setNewListName('')
      setShowModal(false)
      const updatedLists = lists
      updatedLists[newListName] = []
      setLists(updatedLists)
    } catch (err) {
      console.log(err.message)
      setErrMsg(err.message)
    }
  }

  return (
    <>
      <View className="p-4 flex-1 bg-white p-4" >
        <Text className="text-2xl text-center font-bold m-4 py-4 ">My Lists</Text>
        {Object.keys(lists).length == 0 ? <Text className='text-center'>Loadings users lists...</Text>: <ScrollView>{renderLists()}</ScrollView>}
        <View className="m-4 mx-8 py-2" >
          <TouchableOpacity
            className="rounded-3xl justify-center bg-indigo-500 active:bg-indigo-600 mb-8"
            activeOpacity={1.0}
            onPress={() => setShowModal(true)}>
            <Text className="py-4 text-center text-white">Create New List</Text>
          </TouchableOpacity>
        </View>
        <NavBar2></NavBar2>
      </View>
      {showModal ? (
        <Modal title="Create New Lists" btnText="Confirm" onClick={() => createNewList()} onCancel={() => setShowModal(false)} >
          {modalContent()}
        </Modal>
      ) : null}
      {errMsg ? (
        <Modal title="Error" btnText="Done" onClick={() => setErrMsg("")} onCancel={() => setErrMsg("")}>
          <View className='py-8'><Text className='text-center text-xl'>{errMsg}</Text></View>
        </Modal>) : null}
    </>
  )
}