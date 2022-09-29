import { NavigationContainer } from '@react-navigation/native';
import HomePage from './containers/HomePage'
import Overlay from './components/Overlay'
import MyLists from './components/MyLists'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="overlay" component={Overlay} />
        <Stack.Screen name="HomePage" component={HomePage} /> 
        <Stack.Screen name="MyLists" component={MyLists} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}