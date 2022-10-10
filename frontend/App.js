import { NavigationContainer } from '@react-navigation/native';
import HomePage from './containers/HomePage'
import Overlay from './components/Overlay'
import MyProfilePage from './components/MyProfilePage'
import MyLists from './containers/MyLists'
import SugarPage from './containers/SugarPage'
import InfoPage from './containers/InfoPage'
import SodiumPage from './containers/SodiumPage'
import CalciumPage from './containers/CalciumPage'
import CholestrolPage from './containers/CholestrolPage'
import FatsPage from './containers/FatsPage'
// import MyListBeverages from './containers/MyListBeverages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfile from './components/EditProfile';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="overlay" component={Overlay} />
        <Stack.Screen name="HomePage" component={HomePage} /> 
        <Stack.Screen name="MyLists" component={MyLists} />
        <Stack.Screen name="InfoPage" component={InfoPage} />
        <Stack.Screen name="SugarPage" component={SugarPage} />
        <Stack.Screen name="MyProfilePage" component={MyProfilePage} />
        {/* <Stack.Screen name="MyListBeverages" component={MyListBeverages} />   */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}