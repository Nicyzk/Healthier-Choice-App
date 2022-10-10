import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react'
import { Text } from 'react-native';

function dropdown({options, value, setValue}) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(options);

  return (
    <>
      <Text>{value}</Text>
      <DropDownPicker
        multiple={true}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select an item"
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
        extendableBadgeContainer={true}
      />
    </>
  );
}

export default dropdown
