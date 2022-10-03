import { NavigationContainer } from '@react-navigation/native';
import HomePage from './containers/HomePage'
import Overlay from './components/Overlay'
import MyLists from './containers/MyLists'
// import MyListBeverages from './containers/MyListBeverages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="overlay" component={Overlay} />
        <Stack.Screen name="HomePage" component={HomePage} /> 
        <Stack.Screen name="MyLists" component={MyLists} />
        {/* <Stack.Screen name="MyListBeverages" component={MyListBeverages} />   */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}