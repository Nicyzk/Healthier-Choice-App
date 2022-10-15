import { NavigationContainer } from '@react-navigation/native';
import HomePage from './containers/HomePage'
import Overlay from './components/Overlay'
import MyProfilePage from './components/MyProfilePage'
import MyLists from './containers/MyLists'
import infoPage from './containers/infoPage'
import SodiumPage from './containers/SodiumPage'
import CalciumPage from './containers/CalciumPage'
import CholestrolPage from './containers/CholestrolPage'
import FatsPage from './containers/FatsPage'
// import MyListBeverages from './containers/MyListBeverages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="LocationPage" component={LocationPage} /> */} 
        <Stack.Screen name="overlay" component={Overlay} />
        <Stack.Screen name="HomePage" component={HomePage} /> 
        <Stack.Screen name="MyLists" component={MyLists} />
        <Stack.Screen name="infoPage" component={infoPage} />
        <Stack.Screen name="SugarPage" component={SugarPage} />
        {/* <Stack.Screen name="MyListBeverages" component={MyListBeverages} />   */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}