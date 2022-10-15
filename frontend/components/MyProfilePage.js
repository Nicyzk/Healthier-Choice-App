import { Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert, SafeAreaView, ScrollView, StatusBar, TextInput } from 'react-native';
import React,{useState} from 'react';
import SelectList from 'react-native-dropdown-select-list';
import UploadImage from './UploadImage';



const MyProfilePage = ({navigation}) => {
    const[changeColor1, setChangeColor1] = useState(true);
    const handleClick1 = () => {
        setChangeColor1(!changeColor1)
    }
    const[changeColor2, setChangeColor2] = useState(false);
    const handleClick2 = () => {
        setChangeColor2(!changeColor2)
    }
    const[changeColor3, setChangeColor3] = useState(false);
    const handleClick3 = () => {
        setChangeColor3(!changeColor3)
    }
    const[changeColor4, setChangeColor4] = useState(false);
    const handleClick4 = () => {
        setChangeColor4(!changeColor4)
    }
    const[changeColor5, setChangeColor5] = useState(false);
    const handleClick5 = () => {
        setChangeColor5(!changeColor5)
    }
    const[changeColor6, setChangeColor6] = useState(false);
    const handleClick6 = () => {
        setChangeColor6(!changeColor6)
    }

    const[changeColor7, setChangeColor7] = useState(false);
    const handleClick7 = () => {
        setChangeColor7(!changeColor7)
    }

    const [selected1, setSelected1] = React.useState("");
  
    const data1 = [{key:'Underweight Range',value:'Less than 18.5'}, {key:'Normal/Healthy Range',value:'18.5 to 24.9'},{key:'Overweight Range', value:'25.0 to 29.9'},{key:'Obese Range', value:'30.0 or higher'} ];

    const [selected2, setSelected2] = React.useState("");
  
    const data2 = [{value:'13 to 19 years'}, {value:'20 to 39 years'},{value:'40 to 59 years'},{value:'above 60 years'} ];

    const [selected3, setSelected3] = React.useState("");
  
    const data3 = [{value:'Diabetes'}, {value:'Prediabetes'},{value:'Cardiovascular'},{value:'Weight'},{value:'Liver'} ];
    
    return(
    <View style ={style.background} >
        <View style={style.UsernameCon}>
        <TextInput style={style.Username} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Username" required></TextInput>
        </View>
        <View style={style.ImageCon}>
                <UploadImage/>
                </View>


    <SafeAreaView style={style.container2}>
        <ScrollView style={style.rectangle2}>
        <Button style={ style.UpdatePreferences} title= "My Preferences" color = "#B19CD7" fontWeight = 'bold'
                onPress={() => Alert.alert("Would you like to change your preferences?", "Click yes to make changes, No to cancel",
                [ {text: "Yes", onPress:()=> console.log("link to edit page")}
                    ,{ text: "No"}] )}></Button>
                <Text style={style.InBoxText}>Press and hold to add Healthier Choice Symbols!</Text>
                <Image style={style.HCSsugar} source={require('../assets/sugar-free.png')} />
                <Text style={style.HCSSugarCat}>Sugar Categories</Text>
                <View style ={style.noSugarCon}>
                    <TouchableOpacity
                                style ={style.sugarButtons}
                                onLongPress={handleClick1}
                                className={` ${(changeColor1 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                    <Text style={style.buttonSugar}>No Added Sugar</Text>
                    </TouchableOpacity>
                            </View>
                <View style ={style.lessSugarCon}>
                    <TouchableOpacity
                                style ={style.sugarButtons}
                                onLongPress={handleClick2}
                                className={` ${(changeColor2 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                    <Text style={style.buttonSugar}>Less Sugar</Text>
                                </TouchableOpacity>
                            </View>
                <View style ={style.sugarFreeCon}>
                    <TouchableOpacity
                                style ={style.sugarButtons}
                                onLongPress={handleClick3}
                                className={` ${(changeColor3 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                    <Text style={style.buttonSugar}>Sugar Free</Text>
                                </TouchableOpacity> 
                                </View>

            <Image style={style.HCSfat} source={require('../assets/trans-fat-free.png')} />
            <Text style={style.HCSFatCat}>Fat Categories</Text>
            <View style ={style.lowSatFatCon}>
                <TouchableOpacity
                            style ={style.sugarButtons}
                            onLongPress={handleClick4}
                            className={` ${(changeColor4 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                <Text style={style.buttonSugar}>Lower in Saturated Fat</Text>
                            </TouchableOpacity> 
                            </View>
            <View style ={style.transFatCon}>
                <TouchableOpacity
                            style ={style.sugarButtons}
                            onLongPress={handleClick5}
                            className={` ${(changeColor5 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                <Text style={style.buttonSugar}>Trans Fat Free</Text>
                            </TouchableOpacity> 
                            </View>
            
            <Image style={style.HCScarbo} source={require('../assets/brown-rice.png')} />
            <Text style={style.HCSCarboCat}>Carbohydrate Categories</Text>
            <View style ={style.lowGICon}>
                <TouchableOpacity
                            style ={style.sugarButtons}
                            onLongPress={handleClick6}
                            className={` ${(changeColor6 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                <Text style={style.buttonSugar}>Low Glycemic Index</Text>
                            </TouchableOpacity> 
                            </View>
            <View style ={style.highHGCon}>
                <TouchableOpacity
                            style ={style.sugarButtons}
                            onLongPress={handleClick7}
                            className={` ${(changeColor7 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                <Text style={style.buttonSugar}>Higher in Wholegrains</Text>
                            </TouchableOpacity> 
                            </View>
            
            </ScrollView>
            </SafeAreaView>
    
                    
            <SafeAreaView style={style.container3}>
            <ScrollView style={style.rectangle3}>
                <Button style={ style.UpdatePreferences} title= "My Health" color = "#B19CD7" fontWeight = 'bold'
                    onPress={() => Alert.alert("Would you like to change your health status?", "Click yes to make changes, No to cancel",
                    [ {text: "Yes", onPress:()=> console.log("link to edit page")}
                        ,{ text: "No"}] )}></Button>
                <Text style={style.MyHealthDescription}>Your health status under your fingertips</Text>
                <Image style={style.BMI} source={require('../assets/body-mass-index.png')} />
                <Text style={style.BMItext}>Body Mass Index</Text>
                <Image style={style.AgeGroup} source={require('../assets/growth.png')} />
                <Text style={style.AgeGroupText}>Age Group</Text>
                <Image style={style.Health} source={require('../assets/healthcare.png')}/>
                <Text style={style.HealthText}>Health Concerns</Text>
                <View style={style.optionsBox1}>
                    <SelectList setSelected={setSelected1} data={data1} onSelect={() => Alert.alert("You are in the", selected1)} />
                    <View style={{backgroundColor:"#EBE8FC",flex:2,padding:40}}></View>
                    <SelectList setSelected={setSelected2} data={data2} />
                    <View style={{backgroundColor:"#EBE8FC",flex:2,padding:40}}></View>
                    <SelectList setSelected={setSelected3} data={data3} />
                </View>
            </ScrollView>
                </SafeAreaView>

    </View>
    )
}



const style = StyleSheet.create({
    background:{
        backgroundColor: "#fff", 
        flex:1, 
        flexDirection:"column", 
        justifyContent:"space-evenly",
        justifyContent:"top"
    },
    Username:{
        top: 110,
        right: 0
    },
    UsernameCon:{
        paddingHorizontal:300
    },
    ImageCon: {
        padding:0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        top: -50,
      },
    rectangle2:{
        top: 20,
        right: -70,
        backgroundColor: "#EBE8FC", 
        width: 700,
        height: 525
    },
    rectangle3:{
        backgroundColor: "#EBE8FC", 
        width: 700,
        height: 350,
        top: 40,
        right: -70
    },
    ProfilePic:{
        width: 100,
        height: 100,
        right: -370,
        top: -9,
    },
    UpdateProfile:{
        right: -375,
        top: 100,
        fontSize: 10
    },
    container2: {
        paddingTop: StatusBar.currentHeight,
        width: 700,
        height: 600
      },
    container3: {
        paddingTop: StatusBar.currentHeight,
        width: 700,
        height: 300
    },
    InBoxText:{
        color: "#B19CD7",
        fontSize: 15,
        right: -220
    },
    HCScarbo:{
        width: 100,
        height: 100,
        right: -175,
        top: 0
    },
    HCSsugar:{
        width: 100,
        height: 100,
        right: -175,
        top: 70
    },
    HCSfat:{
        width: 100,
        height: 100,
        right: -175,
        top:0
    },
    HCSSugarCat:{
        color: "black",
        fontWeight: 'bold',
        fontSize: 20,
        right: -150,
        top: 70
    },
    HCSFatCat:{
        color: "black",
        fontWeight: 'bold',
        fontSize: 20,
        right: -150,
        top: 0
    },
    HCSCarboCat:{
        color: "black",
        fontWeight: 'bold',
        fontSize: 20,
        right: -115,
        top: 0
    },
    Sugars:{
        color: "black",
        fontSize:20,
        right: -250,
        top: -75
    },
    sugarButtons:{
        alignItems: "left",
        padding: 10,
        height:50
    },
    noSugarCon:{
        justifyContent: "center",
        paddingHorizontal: 265,
        right:-75,
        top:-100
    },
    lessSugarCon:{
        justifyContent: "center",
        paddingHorizontal: 290,
        right:-75,
        top:-75
    },
    sugarFreeCon:{
        justifyContent: "center",
        paddingHorizontal: 290,
        right:-75,
        top:-50
    },
    buttonSugar:{
        color: "black",
        fontSize:20,
        right: 0,
        top: 0
    },
    lowSatFatCon:{
        justifyContent: "center",
        paddingHorizontal: 240,
        right:-75,
        top:-125
    },
    transFatCon:{
        justifyContent: "center",
        paddingHorizontal: 277,
        right:-75,
        top:-100
    },
    lowGICon:{
        justifyContent: "center",
        paddingHorizontal: 252,
        right:-75,
        top:-140
    },
    highHGCon:{
        justifyContent: "center",
        paddingHorizontal: 242,
        right:-75,
        top:-120
    },
    UpdatePreferences:{
        top:-100,
        color: "#B19CD7"
    },
    MyHealthDescription:{
        color: "black",
        fontSize: 15,
        right: -210
    },
    BMI:{
        width: 100,
        height: 100,
        right: -70,
        top: 20
    },
    BMItext:{
        color: "black",
        fontWeight: 'bold',
        fontSize: 20,
        right: -50,
        top: 40
    },
    optionsBox1:{
        paddingHorizontal:250,
        paddingVertical:0,
        right:200,
        top: -200,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    AgeGroup:{
        width: 100,
        height: 100,
        right: -300,
        top: -110
    },
    AgeGroupText:{
        color: "black",
        fontWeight: 'bold',
        fontSize: 20,
        right: -300,
        top: -90
    },
    Health:{
        width: 100,
        height: 100,
        right: -525,
        top: -230
    },
    HealthText:{
        color: "black",
        fontWeight: 'bold',
        fontSize: 20,
        right: -500,
        top: -215
    }
    
  });


export default MyProfilePage
/*
<Button style={ style.UpdateProfile} title= "Update Profile" 
        onPress={() => Alert.alert("Would you like to update your profile details?", "Click yes to make changes, No to cancel",
        [ {text: "Yes", onPress:()=> navigation.navigate("EditProfile")}
            ,{ text: "No"}] )}></Button>*/