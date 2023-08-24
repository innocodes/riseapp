import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {palette} from '../../../theme';

interface CustomCheckboxProps {
  checked: boolean;
  onChange?: (newValue: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({checked, onChange}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} activeOpacity={0.7}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && (
          // <View style={styles.innerCheckbox}>
          <Text style={styles.checkIcon}>✓</Text>
          // </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: palette.teal,
  },
  checked: {
    backgroundColor: palette.teal,
  },
  checkIcon: {
    color: '#fff',
    fontSize: 10,
  },
});

export default CustomCheckbox;
