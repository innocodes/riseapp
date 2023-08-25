import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import RNScreenKeyboard from 'rnscreenkeyboard';
import { palette } from "../../../theme";

interface PinInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const PinInput: React.FC<PinInputProps> = ({value, onChangeText}) => {
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (value.length === 6) {
      inputRefs[5].current?.blur();
    }

    if (index == 5) {
      console.log('index = 5');
    }
  }, [value]);

  const handlePinChange = (text: string, index: number) => {
    const newPin = [...value];
    newPin[index] = text;
    const newValue = newPin.join('').slice(0, 6);
    onChangeText(newValue);

    // Move focus to the next input
    if (text !== '' && index < 5 && inputRefs[index + 1].current) {
      inputRefs[index + 1].current?.focus();
    }

    if (index == 5) {
      setIndex(5);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.pinInput}>
        {Array.from({length: 6}).map((_, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            value={value[index] || ''}
            onChangeText={text => handlePinChange(text, index)}
            keyboardType="numeric"
            secureTextEntry={true}
            maxLength={1}
            style={styles.input}
            mode="outlined"
            editable={false}
          />
        ))}
      </View>
      <View style={{marginTop: 120}}>
        <RNScreenKeyboard
          textStyle={{color: palette.teal, fontSize: 30, fontWeight: '600', paddingHorizontal: 11}}
          backspaceTint={palette.teal}
          cellStyle={{
            borderRadius: 100,
            backgroundColor: 'rgba(113, 135, 156, 0.1)',
            margin: 10,
            // paddingHorizontal: 10,
            marginHorizontal: 20,
          }}
          // rowStyle={{
          //   margin: 10
          // }}
          value={value}
          onKeyPress={(val: string) => onChangeText(val)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  pinInput: {
    flexDirection: 'row',
  },
  input: {
    width: 42,
    height: 42,
    marginHorizontal: 6,
    textAlign: 'center',
  },
});

export default PinInput;
