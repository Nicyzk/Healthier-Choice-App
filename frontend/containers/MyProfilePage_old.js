import { Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert, SafeAreaView, ScrollView, StatusBar, TextInput } from 'react-native';
import React, { useState } from 'react';
import SelectList from 'react-native-dropdown-select-list';
import UploadImage from '../components/UploadImage';
import Navbar from '../components/NavBar';

import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { ListOptions } from '../consts/constants'
import DropdownMulti from '../components/Dropdown-multi'


const SUGAR = [
    { label: 'No Added Sugar', value: '1' },
    { label: 'Lower in Sugar', value: '2' },
    { label: 'Sugar Free', value: '3' },
];

const FAT = [
    { label: 'Lower in Saturated Fat', value: '4' },
    { label: 'Tras Fat Free', value: '5' }
];

const CALORIES = [
    { label: 'Less than 100 calories', value: '6' },
    { label: 'Less than 200 calories', value: '7' }
];

const SODIUM = [
    { label: 'Lower in Sodium', value: '8' },
    { label: 'No Added Sodium', value: '9' }
];

const CALCIUM = [
    { label: 'Higher in Calcium', value: '10' }
];

const WHOLEGRAINS = [
    { label: 'Higher in Wholegrains', value: '11' }
];

const BLOODSUGAR = [
    { label: 'Low Glycemic Index', value: '12' }
];

const FRUITSVEGES = [
    { label: 'Eat 2+2 Servings of Fruits and Vegetables Daily', value: '13' }
];


const MyProfilePage = ({ navigation }) => {
    let i = 0
    const [changeColor1, setChangeColor1] = useState(true);
    const handleClick1 = () => {
        setChangeColor1(!changeColor1)
    }
    const [changeColor2, setChangeColor2] = useState(false);
    const handleClick2 = () => {
        setChangeColor2(!changeColor2)
    }
    const [changeColor3, setChangeColor3] = useState(false);
    const handleClick3 = () => {
        setChangeColor3(!changeColor3)
    }
    const [changeColor4, setChangeColor4] = useState(false);
    const handleClick4 = () => {
        setChangeColor4(!changeColor4)
    }
    const [changeColor5, setChangeColor5] = useState(false);
    const handleClick5 = () => {
        setChangeColor5(!changeColor5)
    }
    const [changeColor6, setChangeColor6] = useState(false);
    const handleClick6 = () => {
        setChangeColor6(!changeColor6)
    }

    const [changeColor7, setChangeColor7] = useState(false);
    const handleClick7 = () => {
        setChangeColor7(!changeColor7)
    }

    const [selected1, setSelected1] = React.useState("");

    const data1 = [{ key: 'Underweight Range', value: 'Less than 18.5' }, { key: 'Normal/Healthy Range', value: '18.5 to 24.9' }, { key: 'Overweight Range', value: '25.0 to 29.9' }, { key: 'Obese Range', value: '30.0 or higher' }];

    const [selected2, setSelected2] = React.useState("");

    const data2 = [{ value: '13 to 19 years' }, { value: '20 to 39 years' }, { value: '40 to 59 years' }, { value: 'above 60 years' }];

    const [selected3, setSelected3] = React.useState("");

    const data3 = [{ value: 'Diabetes' }, { value: 'Prediabetes' }, { value: 'Cardiovascular' }, { value: 'Weight' }, { value: 'Liver' }];

    const [selected, setSelected] = React.useState([]);

    const renderSugarItem = (item1) => {
        return (
            <View style={style.item}>
                <Text style={style.selectedTextStyle}>{item1.label}</Text>
            </View>
        );
    };

    const renderFatItem = (item2) => {
        return (
            <View style={style.item}>
                <Text style={style.selectedTextStyle}>{item2.label}</Text>
            </View>
        );
    };

    const renderCalorieItem = (item3) => {
        return (
            <View style={style.item}>
                <Text style={style.selectedTextStyle}>{item3.label}</Text>
            </View>
        );
    };

    const renderSodiumItem = (item4) => {
        return (
            <View style={style.item}>
                <Text style={style.selectedTextStyle}>{item4.label}</Text>
            </View>
        );
    };

    const renderCalciumItem = (item4) => {
        return (
            <View style={style.item}>
                <Text style={style.selectedTextStyle}>{item4.label}</Text>
            </View>
        );
    };

    const renderWholegrainsItem = (item4) => {
        return (
            <View style={style.item}>
                <Text style={style.selectedTextStyle}>{item4.label}</Text>
            </View>
        );
    };

    const renderBloodSugarItem = (item4) => {
        return (
            <View style={style.item}>
                <Text style={style.selectedTextStyle}>{item4.label}</Text>
            </View>
        );
    };

    const renderFruitsVegesItem = (item4) => {
        return (
            <View style={style.item}>
                <Text style={style.selectedTextStyle}>{item4.label}</Text>
            </View>
        );
    };

    return (
        <View className="p-4 flex-4 bg-white" >
            <View style={styles.scroll}>
                <ScrollView>

                    <Text className="text-2xl text-center font-bold m-1 mt-8 mb-5 ">My Profile Page</Text>
                    <View style={style.UsernameCon}>
                        <TextInput style={style.Username} type="search" id="default-search" className="block p-3 pl-8 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Username" required></TextInput>
                    </View>
                    <View style={style.ImageCon}>
                        <UploadImage />
                    </View>


                    <SafeAreaView style={style.container2}>
                        <ScrollView style={style.rectangle2}>

                            <Button style={style.UpdatePreferences} title="My Preferences" color="#B19CD7" fontWeight='bold'
                                onPress={() => Alert.alert("Would you like to change your preferences?", "Click yes to make changes, No to cancel",
                                    [{ text: "Yes", onPress: () => console.log("link to edit page") }
                                        , { text: "No" }])}></Button>
                            <Text style={style.InBoxText}>Press and hold to add Healthier Choice Symbols!</Text>
                            <Image style={style.HCSsugar} source={require('../assets/sugar-free.png')} />
                            <View style={style.MultiContainer1}>
                                <MultiSelect
                                    style={style.dropdown}
                                    placeholderStyle={style.placeholderStyle}
                                    selectedTextStyle={style.selectedTextStyle}
                                    inputSearchStyle={style.inputSearchStyle}
                                    iconStyle={style.iconStyle}
                                    data={SUGAR}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Sugar Categories"
                                    value={selected}
                                    search
                                    searchPlaceholder="Search..."
                                    onChange={item1 => {
                                        setSelected(item1);
                                    }}
                                    renderItem={renderSugarItem}
                                    renderSelectedItem={(item1, unSelect) => (
                                        <TouchableOpacity onPress={() => unSelect && unSelect(item1)}>
                                            <View style={style.selectedStyle}>
                                                <Text style={style.textSelectedStyle}>{item1.label}</Text>
                                                <AntDesign color="black" name="delete" size={17} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                                <StatusBar />
                            </View>


                            <Image style={style.HCSfat} source={require('../assets/trans-fat-free.png')} />
                            <View style={style.MultiContainer2}>
                                <MultiSelect
                                    style={style.dropdown}
                                    placeholderStyle={style.placeholderStyle}
                                    selectedTextStyle={style.selectedTextStyle}
                                    inputSearchStyle={style.inputSearchStyle}
                                    iconStyle={style.iconStyle}
                                    data={FAT}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Fat Categories"
                                    value={selected}
                                    search
                                    searchPlaceholder="Search..."
                                    onChange={item2 => {
                                        setSelected(item2);
                                    }}
                                    renderItem={renderFatItem}
                                    renderSelectedItem={(item2, unSelect) => (
                                        <TouchableOpacity onPress={() => unSelect && unSelect(item2)}>
                                            <View style={style.selectedStyle}>
                                                <Text style={style.textSelectedStyle}>{item2.label}</Text>
                                                <AntDesign color="black" name="delete" size={17} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                                <StatusBar />
                            </View>

                            <Image style={style.HCScarbo} source={require('../assets/meal.png')} />
                            <View style={style.MultiContainer3}>
                                <MultiSelect
                                    style={style.dropdown}
                                    placeholderStyle={style.placeholderStyle}
                                    selectedTextStyle={style.selectedTextStyle}
                                    inputSearchStyle={style.inputSearchStyle}
                                    iconStyle={style.iconStyle}
                                    data={CALORIES}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Calories Categories"
                                    value={selected}
                                    search
                                    searchPlaceholder="Search..."
                                    onChange={item3 => {
                                        setSelected(item3);
                                    }}
                                    renderItem={renderCalorieItem}
                                    renderSelectedItem={(item3, unSelect) => (
                                        <TouchableOpacity onPress={() => unSelect && unSelect(item3)}>
                                            <View style={style.selectedStyle}>
                                                <Text style={style.textSelectedStyle}>{item3.label}</Text>
                                                <AntDesign color="black" name="delete" size={17} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                                <StatusBar />
                            </View>

                            <Image style={style.HCSsodium} source={require('../assets/no-salt.png')} />
                            <View style={style.MultiContainer4}>
                                <MultiSelect
                                    style={style.dropdown}
                                    placeholderStyle={style.placeholderStyle}
                                    selectedTextStyle={style.selectedTextStyle}
                                    inputSearchStyle={style.inputSearchStyle}
                                    iconStyle={style.iconStyle}
                                    data={SODIUM}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Sodium Categories"
                                    value={selected}
                                    search
                                    searchPlaceholder="Search..."
                                    onChange={item3 => {
                                        setSelected(item3);
                                    }}
                                    renderItem={renderSodiumItem}
                                    renderSelectedItem={(item3, unSelect) => (
                                        <TouchableOpacity onPress={() => unSelect && unSelect(item3)}>
                                            <View style={style.selectedStyle}>
                                                <Text style={style.textSelectedStyle}>{item3.label}</Text>
                                                <AntDesign color="black" name="delete" size={17} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                                <StatusBar />
                            </View>

                            <Image style={style.HCScalcium} source={require('../assets/milk.png')} />
                            <View style={style.MultiContainer5}>
                                <MultiSelect
                                    style={style.dropdown}
                                    placeholderStyle={style.placeholderStyle}
                                    selectedTextStyle={style.selectedTextStyle}
                                    inputSearchStyle={style.inputSearchStyle}
                                    iconStyle={style.iconStyle}
                                    data={CALCIUM}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Calcium Categories"
                                    value={selected}
                                    search
                                    searchPlaceholder="Search..."
                                    onChange={item3 => {
                                        setSelected(item3);
                                    }}
                                    renderItem={renderCalciumItem}
                                    renderSelectedItem={(item3, unSelect) => (
                                        <TouchableOpacity onPress={() => unSelect && unSelect(item3)}>
                                            <View style={style.selectedStyle}>
                                                <Text style={style.textSelectedStyle}>{item3.label}</Text>
                                                <AntDesign color="black" name="delete" size={17} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                                <StatusBar />
                            </View>

                            <Image style={style.HCSwholegrains} source={require('../assets/brown-rice.png')} />
                            <View style={style.MultiContainer6}>
                                <MultiSelect
                                    style={style.dropdown}
                                    placeholderStyle={style.placeholderStyle}
                                    selectedTextStyle={style.selectedTextStyle}
                                    inputSearchStyle={style.inputSearchStyle}
                                    iconStyle={style.iconStyle}
                                    data={WHOLEGRAINS}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Wholegrains Categories"
                                    value={selected}
                                    search
                                    searchPlaceholder="Search..."
                                    onChange={item3 => {
                                        setSelected(item3);
                                    }}
                                    renderItem={renderWholegrainsItem}
                                    renderSelectedItem={(item3, unSelect) => (
                                        <TouchableOpacity onPress={() => unSelect && unSelect(item3)}>
                                            <View style={style.selectedStyle}>
                                                <Text style={style.textSelectedStyle}>{item3.label}</Text>
                                                <AntDesign color="black" name="delete" size={17} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                                <StatusBar />
                            </View>

                            <Image style={style.HCSbloodsugar} source={require('../assets/blood.png')} />
                            <View style={style.MultiContainer7}>
                                <MultiSelect
                                    style={style.dropdown}
                                    placeholderStyle={style.placeholderStyle}
                                    selectedTextStyle={style.selectedTextStyle}
                                    inputSearchStyle={style.inputSearchStyle}
                                    iconStyle={style.iconStyle}
                                    data={BLOODSUGAR}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Blood Sugar Categories"
                                    value={selected}
                                    search
                                    searchPlaceholder="Search..."
                                    onChange={item3 => {
                                        setSelected(item3);
                                    }}
                                    renderItem={renderBloodSugarItem}
                                    renderSelectedItem={(item3, unSelect) => (
                                        <TouchableOpacity onPress={() => unSelect && unSelect(item3)}>
                                            <View style={style.selectedStyle}>
                                                <Text style={style.textSelectedStyle}>{item3.label}</Text>
                                                <AntDesign color="black" name="delete" size={17} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                                <StatusBar />
                            </View>

                            <Image style={style.HCSfruits} source={require('../assets/fruits-and-vegetables.png')} />
                            <View style={style.MultiContainer8}>
                                <MultiSelect
                                    style={style.dropdown}
                                    placeholderStyle={style.placeholderStyle}
                                    selectedTextStyle={style.selectedTextStyle}
                                    inputSearchStyle={style.inputSearchStyle}
                                    iconStyle={style.iconStyle}
                                    data={FRUITSVEGES}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Fruits & Vegetables Categories"
                                    value={selected}
                                    search
                                    searchPlaceholder="Search..."
                                    onChange={item3 => {
                                        setSelected(item3);
                                    }}
                                    renderItem={renderFruitsVegesItem}
                                    renderSelectedItem={(item3, unSelect) => (
                                        <TouchableOpacity onPress={() => unSelect && unSelect(item3)}>
                                            <View style={style.selectedStyle}>
                                                <Text style={style.textSelectedStyle}>{item3.label}</Text>
                                                <AntDesign color="black" name="delete" size={17} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                                <StatusBar />
                            </View>

                        </ScrollView>
                    </SafeAreaView>


                    <SafeAreaView style={style.container3}>
                        <ScrollView style={style.rectangle3}>
                            <Button style={style.UpdatePreferences} title="My Health" color="#B19CD7" fontWeight='bold'
                                onPress={() => Alert.alert("Would you like to change your health status?", "Click yes to make changes, No to cancel",
                                    [{ text: "Yes", onPress: () => console.log("link to edit page") }
                                        , { text: "No" }])}></Button>
                            <Text style={style.MyHealthDescription}>Your health status under your fingertips</Text>
                            <Image style={style.BMI} source={require('../assets/body-mass-index.png')} />
                            <Text style={style.BMItext}>Body Mass Index</Text>
                            <Image style={style.AgeGroup} source={require('../assets/growth.png')} />
                            <Text style={style.AgeGroupText}>Age Group</Text>
                            <Image style={style.Health} source={require('../assets/healthcare.png')} />
                            <Text style={style.HealthText}>Health Concerns</Text>
                            <View style={style.optionsBox1}>
                                <SelectList setSelected={setSelected1} data={data1} onSelect={() => Alert.alert("You are in the", selected1)} />
                                <View style={{ backgroundColor: "#EBE8FC", flex: 2, padding: 5 }}></View>
                                <SelectList setSelected={setSelected2} data={data2} />
                                <View style={{ backgroundColor: "#EBE8FC", flex: 2, padding: 5 }}></View>
                                <SelectList setSelected={setSelected3} data={data3} />
                            </View>



                        </ScrollView>
                    </SafeAreaView>

                </ScrollView>
            </View>
            <Navbar></Navbar>
        </View>
    )
}



const style = StyleSheet.create({
    background: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        justifyContent: "top"
    },
    Username: {
        top: 80,
        right: 0
    },
    UsernameCon: {
        paddingHorizontal: 100,
        paddingVertical: 25,
    },
    ImageCon: {
        padding: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        top: -100,
    },
    rectangle2: {
        top: -20,
        right: 0,
        backgroundColor: "#EBE8FC",
        width: 360,
        height: 80,
        borderRadius: 20
    },
    rectangle3: {
        backgroundColor: "#EBE8FC",
        width: 360,
        height: 80,
        top: 0,
        right: 0,
        borderRadius: 20
    },
    ProfilePic: {
        width: 100,
        height: 100,
        right: -370,
        top: -9,
    },
    UpdateProfile: {
        right: -375,
        top: 100,
        fontSize: 10
    },
    container2: {
        paddingTop: StatusBar.currentHeight,
        width: 375,
        height: 300
    },
    container3: {
        paddingTop: StatusBar.currentHeight,
        width: 350,
        height: 300
    },
    InBoxText: {
        color: "#B19CD7",
        fontSize: 15,
        right: -20
    },
    HCScarbo: {
        width: 65,
        height: 65,
        right: -7,
        top: -75
    },
    HCSsugar: {
        width: 65,
        height: 65,
        right: 0,
        top: 0
    },
    HCSfat: {
        width: 65,
        height: 65,
        right: 0,
        top: -40
    },
    HCSsodium: {
        width: 65,
        height: 65,
        right: 0,
        top: -110
    },
    HCScalcium: {
        width: 60,
        height: 60,
        right: 0,
        top: -140
    },
    HCSwholegrains: {
        width: 65,
        height: 65,
        right: 0,
        top: -170
    },
    HCSbloodsugar: {
        width: 60,
        height: 60,
        right: 0,
        top: -200
    },
    HCSfruits: {
        width: 60,
        height: 60,
        right: 0,
        top: -230
    },
    Sugars: {
        color: "black",
        fontSize: 10,
        right: -250,
        top: -75
    },
    SugarCatCon: {
        paddingHorizontal: 75,
        paddingVertical: 0,
        right: 5,
        top: -75,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sugarButtons: {
        alignItems: "left",
        padding: 5,
        height: 50
    },
    noSugarCon: {
        justifyContent: "center",
        paddingHorizontal: 150,
        right: 0,
        top: -100
    },
    lessSugarCon: {
        justifyContent: "center",
        paddingHorizontal: 0,
        right: 0,
        top: -100
    },
    sugarFreeCon: {
        justifyContent: "center",
        paddingHorizontal: 140,
        right: 70,
        top: -60
    },
    buttonSugar: {
        color: "black",
        fontSize: 15,
        right: 0,
        top: 8
    },
    FatCatCon: {
        paddingHorizontal: 40,
        paddingVertical: 0,
        right: -25,
        top: -75,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lowSatFatCon: {
        justifyContent: "center",
        paddingHorizontal: 150,
        right: 0,
        top: -125
    },
    transFatCon: {
        justifyContent: "center",
        paddingHorizontal: 150,
        right: 0,
        top: -100
    },
    CarboCatCon: {
        paddingHorizontal: 30,
        paddingVertical: 0,
        right: -35,
        top: -75,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    UpdatePreferences: {
        top: -100,
        color: "#B19CD7"
    },
    MyHealthDescription: {
        color: "black",
        fontSize: 15,
        right: -50
    },
    BMI: {
        width: 55,
        height: 55,
        right: -25,
        top: 20
    },
    BMItext: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 15,
        right: -5,
        top: 40
    },
    optionsBox1: {
        paddingHorizontal: 125,
        paddingVertical: 0,
        right: 110,
        top: -100,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    AgeGroup: {
        width: 55,
        height: 55,
        right: -160,
        top: -50
    },
    AgeGroupText: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 15,
        right: -150,
        top: -33
    },
    Health: {
        width: 55,
        height: 55,
        right: -285,
        top: -125
    },
    HealthText: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 15,
        right: -250,
        top: -105
    },
    MultiContainer1: {
        paddingHorizontal: 50,
        flex: 1,
        right: -30,
        top: -60
    },
    MultiContainer2: {
        paddingHorizontal: 50,
        flex: 1,
        right: -30,
        top: -100
    },
    MultiContainer3: {
        paddingHorizontal: 50,
        flex: 1,
        right: -30,
        top: -170
    },
    MultiContainer5: {
        paddingHorizontal: 40,
        flex: 1,
        right: -30,
        top: -200
    },
    MultiContainer6: {
        paddingHorizontal: 40,
        flex: 1,
        right: -30,
        top: -230
    },
    MultiContainer7: {
        paddingHorizontal: 40,
        flex: 1,
        right: -30,
        top: -260
    },
    MultiContainer8: {
        paddingHorizontal: 40,
        flex: 1,
        right: -30,
        top: -290
    },
    dropdown: {
        height: 50,
        backgroundColor: '#B19CD7',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 1.41,

        elevation: 2,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textSelectedStyle: {
        marginRight: 5,
        fontSize: 16,
    }

});


export default MyProfilePage
/*
<Button style={ style.UpdateProfile} title= "Update Profile" 
        onPress={() => Alert.alert("Would you like to update your profile details?", "Click yes to make changes, No to cancel",
        [ {text: "Yes", onPress:()=> navigation.navigate("EditProfile")}
            ,{ text: "No"}] )}></Button>
            
            
            
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
                                    
                                    
                                    
CAN REMOVE THE OLD SUGAR BUTTON CONTAINERS
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
                            
    <View style={style.SugarCatCon}>
                    
                        <TouchableOpacity
                                    style ={style.sugarButtons}
                                    onLongPress={handleClick1}
                                    className={` ${(changeColor1 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                        <Text style={style.buttonSugar}>No Added Sugar</Text>
                        </TouchableOpacity>
                    
                        <TouchableOpacity
                                    style ={style.sugarButtons}
                                    onLongPress={handleClick2}
                                    className={` ${(changeColor2 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                        <Text style={style.buttonSugar}>Less Sugar</Text>
                                    </TouchableOpacity>
                                
                </View>
    <View style={style.sugarFreeCon}>
                <TouchableOpacity
                                    style ={style.sugarButtons}
                                    onLongPress={handleClick3}
                                    className={` ${(changeColor3 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                        <Text style={style.buttonSugar}>Sugar Free</Text>
                                    </TouchableOpacity> 
                </View>
                
    <View style={style.FatCatCon}>
            <TouchableOpacity
                            style ={style.sugarButtons}
                            onLongPress={handleClick4}
                            className={` ${(changeColor4 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                <Text style={style.buttonSugar}>Lower in Saturated Fat</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                            style ={style.sugarButtons}
                            onLongPress={handleClick5}
                            className={` ${(changeColor5 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                <Text style={style.buttonSugar}>Trans Fat Free</Text>
                            </TouchableOpacity>
            </View>
            
    <View style={style.CarboCatCon}>
            <TouchableOpacity
                            style ={style.sugarButtons}
                            onLongPress={handleClick6}
                            className={` ${(changeColor6 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                                <Text style={style.buttonSugar}>Low Glycemic Index</Text>
                            </TouchableOpacity>

            <TouchableOpacity
            style ={style.sugarButtons}
            onLongPress={handleClick7}
            className={` ${(changeColor7 === true)? 'bg-grey-700' : 'bg-blue-300'}`} >
                <Text style={style.buttonSugar}>Higher in Wholegrains</Text>
            </TouchableOpacity>
            </View>*/

const styles = StyleSheet.create({

    normalView: {
        marginTop: 20,
        alignItems: "center",
    },

    scroll: {
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
        padding: 10,
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
        width: '80%',
        padding: 10,
        borderWidth: 3,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    container: {
        flex: 1,
    },

    innerbox: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "#463EC633",
        width: 350,
        padding: 10,
        borderWidth: 3,
        borderColor: 'rgba(0, 0, 0, 0.1)',
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
        marginHorizontal: 0,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});