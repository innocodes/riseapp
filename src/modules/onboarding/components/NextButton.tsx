import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

function NextButton({
  onNextButtonPress = () => {},
  disabled = false as boolean,
  textColor = '' as string,
  childArrow = null as any,
}) {
  return (
    <TouchableOpacity
      style={{
        // width: '90%',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 18,
        backgroundColor: 'rgba(113, 135, 156, 0.2)',
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row',
      }}
      onPress={onNextButtonPress}
      disabled={disabled}>
      <Text
        style={{
          marginRight: 20,
          color: textColor,
          opacity: 1,
          fontWeight: '700',
          fontSize: 15,
        }}>
        Next
      </Text>
      {childArrow}
    </TouchableOpacity>
  );
}

export default NextButton;
