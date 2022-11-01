
import NavBar1 from '../components/NavBar1';
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, SafeAreaView} from "react-native";
import FaIcon from 'react-native-vector-icons/FontAwesome'
import Fa5Icon from 'react-native-vector-icons/FontAwesome5'


const App = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [actionTriggered, setActionTriggered] = useState(''); // here we go

  return (
    <View className="p-4 flex-1 bg-white" >
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
       <Text className="text-2xl text-center font-bold m-1 mt-8 ">Common HCS Taglines</Text>
       <Text className="text-1xl text-center ">Click to find out more!</Text>
        
        <View style={styles.normalView}>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {
              setModalVisible(true);
              setActionTriggered('ACTION_1');
              }}>
             <View className='items-stretch'>
                    <View className='flex-row w-40 items-center justify-between'>
                        <FaIcon
                            name="cubes"
                            color="black"
                            size={40}
                        ></FaIcon>
                        <Text style={styles.textStyle}>Sugar</Text>
                    </View>
                </View>
          </Pressable>

          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {
              setModalVisible(true);
              setActionTriggered('ACTION_2');
              }}>
             <View className='items-stretch'>
                    <View className='flex-row w-40 ml-2 items-center justify-between'>
                        <FaIcon
                            name="hourglass-3"
                            color="black"
                            size={40}
                        ></FaIcon>
                        <Text style={styles.textStyle}>Sodium</Text>
                    </View>
                </View>
          </Pressable>

          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {
              setModalVisible(true);
              setActionTriggered('ACTION_3');
              }}>
             <View className='items-stretch'>
                    <View className='flex-row w-40  items-center justify-between'>
                        <Fa5Icon
                            name="bone"
                            color="black"
                            size={40}
                        ></Fa5Icon>
                        <Text style={styles.textStyle1}>Calcium</Text>
                    </View>
                </View>
          </Pressable>


          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {
              setModalVisible(true);
              setActionTriggered('ACTION_4');
              }}>
             <View className='items-stretch'>
                    <View className='flex-row w-36 ml-1  items-center justify-between'>
                        <Fa5Icon
                            name="cheese"
                            color="black"
                            size={40}
                        ></Fa5Icon>
                        <Text style={styles.textStyle}>Fats</Text>
                    </View>
                </View>
          </Pressable>

          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {
              setModalVisible(true);
              setActionTriggered('ACTION_5');
              }}>
             <View className='items-stretch'>
                    <View className='flex-row w-40 ml-2  items-center justify-between'>
                        <Fa5Icon
                            name="apple-alt"
                            color="black"
                            size={40}
                        ></Fa5Icon>
                        <Text style={styles.textStyle}>Calories</Text>
                    </View>
                </View>
          </Pressable>

          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {
              setModalVisible(true);
              setActionTriggered('ACTION_6');
              }}>
             <View className='items-stretch'>
                    <View className='flex-row w-44 ml-1  items-center justify-between'>
                        <Fa5Icon
                            name="bread-slice"
                            color="black"
                            size={40}
                        ></Fa5Icon>
                        <Text style={styles.textStyle1}>Wholegrains</Text>
                    </View>
                </View>
          </Pressable>

          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {
              setModalVisible(true);
              setActionTriggered('ACTION_7');
              }}>
             <View className='items-stretch'>
                    <View className='flex-row w-44 ml-1  items-center justify-between'>
                        <Fa5Icon
                            name="circle-notch"
                            color="black"
                            size={40}
                        ></Fa5Icon>
                        <Text style={styles.textStyle1}>Blood Sugar</Text>
                    </View>
                </View>
          </Pressable>

          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {
              setModalVisible(true);
              setActionTriggered('ACTION_8');
              }}>
             <View className='items-stretch'>
                    <View className='flex-row w-48 ml-1  items-center justify-between'>
                        <FaIcon
                            name="lemon-o"
                            color="black"
                            size={40}
                        ></FaIcon>
                        <Text style={styles.textStyle}>Fruits & Veges</Text>
                    </View>
                </View>
          </Pressable>
          
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{ margin: 0 }}
        onRequestClose={() => { }}>

        {actionTriggered === 'ACTION_1' ?
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View className='flex-row w-40 my-2 items-center justify-evenly'>
                <FaIcon
                    name="cubes"
                    color="white"
                    size={40}
                ></FaIcon>
                <Text className="text-2xl text-center color-white">Sugar</Text>
            </View>

            <Pressable
              style = {styles.innerbox}>
              <View className='flex-row items-center justify-center'>
                <FaIcon
                    name="cube"
                    color="white"
                    size={25}
                ></FaIcon>
                <Text className="text-xl text-center color-white m-2"> Lower in Sugar</Text>
              </View>
              <Text className="text-l text-start color-white"> - At least 25% less sugar compared to similar products from the same food category.</Text>
              <Text className="text-l text-start color-white"> - Examples: Asian drinks, Carbonated drinks, Cultured milk products, Juice drinks and more</Text>
            </Pressable>

            <Pressable
              style = {styles.innerbox}>
              <View className='flex-row items-center justify-center'>
                <FaIcon
                    name="minus"
                    color="white"
                    size={25}
                ></FaIcon>
                <Text className="text-xl text-center color-white m-2"> No Added Sugar</Text>
              </View>
              <Text className="text-l text-start color-white"> - No additional free sugars or ingredients containing free sugars were added during processing.</Text>
              <Text className="text-l text-start color-white"> - Examples: Fruit juice, Coffee and tea, Fruit spreads and dried fruit.</Text>
            </Pressable>

            <Pressable
              style = {styles.innerbox}>
              <View className='flex-row items-center justify-center'>
                <FaIcon
                    name="remove"
                    color="white"
                    size={25}
                ></FaIcon>
                <Text className="text-xl text-center color-white m-2"> Sugar Free</Text>
              </View>
              <Text className="text-l text-start color-white"> -  Contain less than or equal to 0.5g sugars per 100g or per 100ml of the product. .</Text>
              <Text className="text-l text-start color-white"> - Examples: Non-carbonated drinks, Asian drinks, Isotonic drinks, Carbonated drinks, Water.</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textnormal}>Back To Menu</Text>
            </Pressable>

        
          </View>
        
        </View> :


          actionTriggered === 'ACTION_2' ?
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View className='flex-row w-40 my-2 items-center justify-evenly'>
                <FaIcon
                    name="hourglass-3"
                    color="white"
                    size={40}
                ></FaIcon>
                <Text className="text-2xl text-center color-white">Sodium</Text>
            </View>

            <Pressable
              style = {styles.innerbox}>
              <View className='flex-row items-center justify-center'>
                <FaIcon
                    name="caret-down"
                    color="white"
                    size={25}
                ></FaIcon>
                <Text className="text-xl text-center color-white m-2"> Lower in Sodium</Text>
              </View>
              <Text className="text-l text-start color-white"> - At least 25% less sodium compared to similar products in the same food category.</Text>
              <Text className="text-l text-start color-white"> - Examples: Sauces, Recipe mixes, Canned and processed meats, Processed seafood-based foods and, Ready to eat legumes.</Text>
            </Pressable>

            <Pressable
              style = {styles.innerbox}>
              <View className='flex-row items-center justify-center'>
                <FaIcon
                    name="minus"
                    color="white"
                    size={25}
                ></FaIcon>
                <Text className="text-xl text-center color-white m-2"> No Added Sodium</Text>
              </View>
              <Text className="text-l text-start color-white"> - No additional sodium added to the product.</Text>
              <Text className="text-l text-start color-white"> - Examples: Fresh/frozen seafood, Frozen/chilled vegetables, Herbs and spices.</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textnormal}>Back To Menu</Text>
            </Pressable>

        
          </View>
        
        </View> :
          actionTriggered === 'ACTION_3' ?
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View className='flex-row w-40 my-2 items-center justify-evenly'>
                <Fa5Icon
                    name="bone"
                    color="white"
                    size={40}
                ></Fa5Icon>
                <Text className="text-2xl text-center color-white">Calcium</Text>
            </View>

            <Pressable
              style = {styles.innerbox}>
              <View className='flex-row items-center justify-center'>
                <FaIcon
                    name="caret-up"
                    color="white"
                    size={25}
                ></FaIcon>
                <Text className="text-xl text-center color-white m-2"> Higher in Calcium</Text>
              </View>
              <Text className="text-l text-start color-white"> - At least 25% more calcium compared to similar products from the same food category.</Text>
              <Text className="text-l text-start color-white"> - Examples: Calcium-fortified soy products, Milk, and Milk products.</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textnormal}>Back To Menu</Text>
            </Pressable>


          </View>

          </View> :
            actionTriggered === 'ACTION_4' ?
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View className='flex-row w-40 my-2 items-center justify-evenly'>
                  <Fa5Icon
                      name="cheese"
                      color="white"
                      size={40}
                  ></Fa5Icon>
                  <Text className="text-2xl text-center color-white">Fats</Text>
              </View>
  
              <Pressable
                style = {styles.innerbox}>
                <View className='flex-row items-center justify-center'>
                  <FaIcon
                      name="caret-down"
                      color="white"
                      size={25}
                  ></FaIcon>
                  <Text className="text-xl text-center color-white m-2"> Lower in Saturated Fat</Text>
                </View>
                <Text className="text-l text-start color-white"> - At least 25% less saturated fat compared to similar products in the same food category.</Text>
                <Text className="text-l text-start color-white"> - Examples: Dairy products, Edible oils and, Convenience meals.</Text>
              </Pressable>

              <Pressable
                style = {styles.innerbox}>
                <View className='flex-row items-center justify-center'>
                  <FaIcon
                      name="ban"
                      color="white"
                      size={25}
                  ></FaIcon>
                  <Text className="text-xl text-center color-white m-2"> Trans Fat Free</Text>
                </View>
                <Text className="text-l text-start color-white"> - No or negligible amounts of trans fat i.e. less than 0.5g per 100g of the product.</Text>
                <Text className="text-l text-start color-white"> - Examples: Margarines/Fat Spreads, Edible oils, Biscuits.​</Text>
              </Pressable>
  
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textnormal}>Back To Menu</Text>
              </Pressable>
  
  
            </View>
  
            </View> :
            actionTriggered === 'ACTION_5' ?
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View className='flex-row w-40 my-2 items-center justify-evenly'>
                  <Fa5Icon
                      name="apple-alt"
                      color="white"
                      size={40}
                  ></Fa5Icon>
                  <Text className="text-2xl text-center color-white">Calories</Text>
              </View>
  
              <Pressable
                style = {styles.innerbox}>
                <View className='flex-row items-center justify-center'>
                  <FaIcon
                      name="check"
                      color="white"
                      size={25}
                  ></FaIcon>
                  <Text className="text-xl text-center color-white m-2"> Less than 100 calories</Text>
                </View>
                <Text className="text-l text-start color-white"> - Crisps/chips where each individually packaged portion is less than or equal to 100 calories.</Text>
                <Text className="text-l text-start color-white"> - Choosing your snacks wisely can keep your energy levels up without piling on added calories .</Text>
              </Pressable>

              <Pressable
                style = {styles.innerbox}>
                <View className='flex-row items-center justify-center'>
                  <Fa5Icon
                      name="check-double"
                      color="white"
                      size={25}
                  ></Fa5Icon>
                  <Text className="text-xl text-center color-white m-2"> Less than 200 calories</Text>
                </View>
                <Text className="text-l text-start color-white"> - Ice cream products that are both lower in sugar compared to similar products in the same food category and less than or equal to 200 calories per portion. </Text>
                <Text className="text-l text-start color-white"> - Choosing your snacks wisely can keep your energy levels up without piling on added calories.​</Text>
              </Pressable>
  
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textnormal}>Back To Menu</Text>
              </Pressable>
  
  
            </View>
  
            </View> :
            actionTriggered === 'ACTION_6' ?
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View className='flex-row w-48 my-2 items-center justify-evenly'>
                  <Fa5Icon
                      name="bread-slice"
                      color="white"
                      size={40}
                  ></Fa5Icon>
                  <Text className="text-2xl text-center color-white">Wholegrains</Text>
              </View>
  
              <Pressable
                style = {styles.innerbox}>
                <View className='flex-row items-center justify-center'>
                  <FaIcon
                      name="caret-up"
                      color="white"
                      size={25}
                  ></FaIcon>
                  <Text className="text-xl text-center color-white m-2"> Higher in Wholegrains​</Text>
                </View>
                <Text className="text-l text-start color-white"> - At least 20% more wholegrains compared to similar products from the same food category.</Text>
                <Text className="text-l text-start color-white"> - Examples: Brown (or unpolished) rice, Brown rice vermicelli (bee hoon), Wholegrain breakfast cereals, Wholemeal breads.</Text>
              </Pressable>
  
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textnormal}>Back To Menu</Text>
              </Pressable>
  
  
            </View>
  
            </View> :
            actionTriggered === 'ACTION_7' ?
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View className='flex-row w-48 my-2 items-center justify-evenly'>
                  <Fa5Icon
                      name="circle-notch"
                      color="white"
                      size={40}
                  ></Fa5Icon>
                  <Text className="text-2xl text-center color-white">Blood Sugar</Text>
              </View>
  
              <Pressable
                style = {styles.innerbox}>
                <View className='flex-row items-center justify-center'>
                  <FaIcon
                      name="caret-down"
                      color="white"
                      size={25}
                  ></FaIcon>
                  <Text className="text-xl text-center color-white m-2"> Low Glycemic Index ​</Text>
                </View>
                <Text className="text-l text-start color-white"> - The Glycemic Index (GI) uses a scale from 1 to 100 to rank carbohydrate foods on how quickly and how much they raise blood sugar after eating.</Text>
                <Text className="text-l text-start color-white"> - Low Glycemic Index foods have a GI value of less than or equal to 55 and cause a more gradual rise in blood glucose.</Text>
              </Pressable>
  
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textnormal}>Back To Menu</Text>
              </Pressable>
  
  
            </View>
  
            </View> :
            actionTriggered === 'ACTION_8' ?
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View className='flex-row w-48 my-2 items-center justify-evenly'>
                  <FaIcon
                      name="lemon-o"
                      color="white"
                      size={40}
                  ></FaIcon>
                  <Text className="text-2xl text-center color-white">Fruits & Vegetables</Text>
              </View>
  
              <Pressable
                style = {styles.innerbox}>
                <View className='flex-row items-center justify-center'>
                  <Fa5Icon
                      name="apple-alt"
                      color="white"
                      size={25}
                  ></Fa5Icon>
                  <Text className="text-xl text-center color-white m-2"> Eat 2+2 Servings of Fruits and Vegetables Daily ​</Text>
                </View>
                <Text className="text-l text-start color-white"> - Fruit and vegetables are naturally low in fat, calories, and sodium and boast a range of essential vitamins and minerals.</Text>
                <Text className="text-l text-start color-white"> - The Health Promotion Board encourages everyone to eat 2 servings of fruit and 2 servings of vegetables each day. </Text>
              </Pressable>
  
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textnormal}>Back To Menu</Text>
              </Pressable>
  
  
            </View>
  
            </View> :
            null}
      </Modal>
        </View>

        <View style={styles.normalView}>
        </View>
        </ScrollView>
        </SafeAreaView>
        <NavBar1></NavBar1>
    </View>
    
  );
};





















const styles = StyleSheet.create({
  
  normalView: {
    marginTop: 20,
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3
  },
  modalView: {
    marginTop: 20,
    backgroundColor: "#4169e1",
    borderRadius: 20,
    padding:10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    marginBottom: 20,
    borderRadius: 20,
    width:'80%',
    padding: 10,
    borderWidth:3,
    borderColor:'rgba(0, 0, 0, 0.1)',
  },
  container: {
    flex: 1,
  },

  innerbox: {
    marginTop:10,
    borderRadius: 10,
    backgroundColor: "#463EC633",
    width:350,
    padding: 10,
    borderWidth:3,
    borderColor:'rgba(0, 0, 0, 0.1)',
  },
  buttonOpen: {
    backgroundColor: "#463EC633",
  },
  buttonClose: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
  },
  textStyle: {
    color: "black",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 20,
    left: 15
    
  },

  textStyle1: {
    color: "black",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 20,
    left: 24
    
  },
  textnormal: {
    color: "black",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 15,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;            