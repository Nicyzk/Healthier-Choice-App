import { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios'
import * as Location from 'expo-location';
import { PLACES_API_KEY } from '../consts/constants';

export default function App() {
  const [ready, setReady] = useState(false)
  const [initialRegion, setInitialRegion] = useState({latitude: null, longitude: null, latitudeDelta: 0.05, longitudeDelta: 0.05})
  const [nearbyPlaces, setNearbyPlaces] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
    }
    let location = await Location.getCurrentPositionAsync({});
    let updated = { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: initialRegion.latitudeDelta, longitudeDelta: initialRegion.longitudeDelta }
    setInitialRegion(updated)

    // get nearby NTUC locations
    const keyword = 'NTUC'
    const config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${updated.latitude}%2C${updated.longitude}&radius=10000&keyword=${keyword}&key=${PLACES_API_KEY}`,
      headers: { }
    };

    const res = await axios(config)

    let nearbyResults = []	// [{name: '', lat: '', lng: ''}]
    for (let el of res.data.results) {
      let place = {}
      place.name = el.name
      place.lat = el.geometry.location.lat
      place.lng = el.geometry.location.lng
      nearbyResults.push(place)
    }
    setNearbyPlaces(nearbyResults)
    setReady(true)
  }

  const renderListOfPlaces = () => {
    const listOfPlaces = []
    let idx = 0
    for (let el of nearbyPlaces) {
        listOfPlaces.push(
            <View key={idx} className='m-2 p-2 flex-1 flex-row items-center justify-between rounded-lg border border-slate-400'>
                <View><Text className='text-lg'>{el.name}</Text></View>
                <TouchableOpacity
                    className="rounded-lg justify-center px-2 bg-indigo-500 active:bg-indigo-600"
                    activeOpacity={1.0}
                    onPress={() => { }}>
                    <Text className="py-4 text-center text-lg text-white">Open in Google Maps</Text>
                </TouchableOpacity>
            </View>
        )
        idx++
    }
    return listOfPlaces
  }

  return (
    <View className='flex-1 bg-white items-center p-4'>
        <View className='m-4'><Text className="text-lg font-bold">Nearest Locations Found</Text></View>
        {ready ? <MapView provider={PROVIDER_GOOGLE} showsUserLocation={true} initialRegion={initialRegion} className="h-70 w-70" style={styles.map} />: <View className="h-70 w-70"><Text>Loading map...</Text></View>}
        {ready ? <ScrollView className='h-2/3'>{renderListOfPlaces()}</ScrollView>: <View className="h-70 w-70"><Text>Loading nearby locations...</Text></View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 400,
    height: 400,
    borderRadius: 20
  },
});

// const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
// const latLng = `${lat},${lng}`;
// const label = 'Custom Label';
// const url = Platform.select({
//   ios: `${scheme}${label}@${latLng}`,
//   android: `${scheme}${latLng}(${label})`
// });

    
// Linking.openURL(url);