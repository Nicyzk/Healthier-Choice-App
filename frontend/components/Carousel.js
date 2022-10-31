import React, { useRef, useState } from 'react'
import FaIcon from 'react-native-vector-icons/FontAwesome'
import { Animated, Image, View, Text, ScrollView, TouchableWithoutFeedback, Modal, StyleSheet, Pressable } from 'react-native'
import SelectList from 'react-native-dropdown-select-list'
import { ListOptions } from '../consts/constants'
import DropdownMulti from './Dropdown-multi'

const Carousel = ({ images, navigation }) => {

  const renderedImg = []
  const [modalVisible, setModalVisible] = useState(false); //EDITED IN
  const [selected, setSelected] = React.useState(true);

  const data = [{ value: 'Groceries' }, { value: 'Beverages' }, { value: 'Snacks' }, { value: 'Groceries' }, { value: 'Beverages' }, { value: 'Snacks' }];


  for (let key in images) {
    renderedImg.push(
      <View className='mx-2 my-6 py-4 h-56 w-48 rounded-3xl' key={key} style={{ backgroundColor: '#463EC633' }}>
        <View className='bottom-10 items-center'>
          <Image className="h-40 w-40 rounded-3xl" key={key} source={images[key]} />
          <Text className='font-bold text-lg'>Vitagen</Text>
          <Text className='text-center'>Low in sugar</Text>
          <View className='flex-row w-20 my-2 justify-evenly'>
            <FaIcon
              name="shopping-basket"
              color="black"
              size={20}
              onPress={() => setModalVisible(true)}
            ></FaIcon>
            <FaIcon
              name="map-marker"
              color="black"
              size={20}
              onPress={() => navigation.navigate('MapPage')}
            ></FaIcon>
          </View>
        </View>
      </View>
    )
  }
  return (
    <>
      <View>
        <Animated.View className='flex-1 flex-row'>
          <ScrollView horizontal={true}>
            {renderedImg}
          </ScrollView>
        </Animated.View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Save item to...</Text>
            <SelectList style={styles.list1} setSelected={setSelected} data={data} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    paddingHorizontal: 50
  },
  modalView: {
    marginTop: 30,
    paddingHorizontal: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    top: 10

  },

  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default Carousel

/* <SelectList  setSelected={setSelected} data={data}/> */