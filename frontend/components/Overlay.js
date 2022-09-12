import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

const Overlay = ({ navigation }) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('HomePage')}>
      <View className="flex-1 items-center justify-center bg-white" >
        <Image className="h-96 w-96" source={require('../assets/logo.png')} />
      </View>
    </TouchableWithoutFeedback>
  )

export default Overlay