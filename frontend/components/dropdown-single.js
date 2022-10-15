import DropDownPicker from 'react-native-dropdown-picker';
import { useState, useEffect } from 'react'
import { Text } from 'react-native';

// Drop down linked to a key in value object!
function dropdown({ options, value, value_key, setValue, index, placeholder }) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(options);

    return (
        <>
            <Text className='mb-1'>{value_key}</Text>
            <DropDownPicker
                style={{ zIndex: 10 - index }}
                open={open}
                value={value[value_key]}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={placeholder}
                mode="BADGE"
                badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                listMode="SCROLLVIEW"
                extendableBadgeContainer={true}
            />
        </>

    );
}

export default dropdown