import { NavigationContainer } from '@react-navigation/native';
import HomePage from './components/HomePage'
import Overlay from './components/Overlay'
import MyProfilePage from './components/MyProfilePage'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfile from './components/EditProfile';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="overlay" component={Overlay} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MyProfilePage" component={MyProfilePage} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}