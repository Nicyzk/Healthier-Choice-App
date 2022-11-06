import { NavigationContainer } from '@react-navigation/native';
import HomePage from './containers/HomePage'
import Overlay from './components/Overlay'
import MyProfilePage from './containers/ProfilePage'
import MyLists from './containers/MyLists'
import infoPage from './containers/HCSInfoPage'
import MapPage from './containers/LocationPage'
import ListPage from './containers/ListPage'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="overlay" component={Overlay} />
        <Stack.Screen name="HomePage" component={HomePage} /> 
        <Stack.Screen name="MyLists" component={MyLists} />
        <Stack.Screen name="InfoPage" component={infoPage} />
        <Stack.Screen name="MyProfilePage" component={MyProfilePage} />
        <Stack.Screen name="MapPage" component={MapPage} />
        <Stack.Screen name="ListPage" component={ListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}