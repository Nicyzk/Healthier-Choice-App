import { View, Text } from "react-native";
import styles from "../components/ButtonStyles";
import Button from "../components/Button";
import { Image } from "react-native";

const LocationPage = () => (
    <View className="p-4 flex-1 bg-white items-center" >
      <Text className="text-2x1 text-center font m-4 py-4 ">Tap to navigate to Ang Mo Kio Supermarket</Text>
      <Image className="h-70 w-70" source={require('../assets/Locationmap.png')} />
      <Button styles={styles.roundbutton} text = {styles.whitetext}name='Done'/>
    </View>
)

export default LocationPage