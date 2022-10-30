import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native"

const Modal = ({ title, children, btnText, onCancel, onClick }) => {
    const modal = (
        <>
            <TouchableWithoutFeedback onPress={onCancel}>
                <View className='absolute h-full w-full bg-gray-200 opacity-80'></View>
            </TouchableWithoutFeedback>
            <View className="absolute h-full w-full flex-1 justify-center items-center z-2">
                <View className="w-80 rounded-xl p-8 bg-white">
                    <Text className='text-2xl font-bold text-center'>{title}</Text>
                    {children}
                    <View className="flex-1 flex-row justify-between py-2" >
                        <TouchableOpacity
                            className="rounded-2xl w-5/12 justify-center bg-white border-2 border-indigo-500"
                            activeOpacity={1.0}
                            onPress={onCancel}>
                            <Text className="py-3 text-center text-lg text-indigo-500">Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="rounded-2xl w-5/12 justify-center bg-indigo-500 active:bg-indigo-600"
                            activeOpacity={1.0}
                            onPress={onClick}>
                            <Text className="py-3 text-center text-lg text-white">{btnText}</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </View>
        </>
    )
    return modal
}

export default Modal