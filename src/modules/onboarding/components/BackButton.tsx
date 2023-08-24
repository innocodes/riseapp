import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

function BackButton({
  onBackButtonPress = () => {},
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
        backgroundColor: 'rgba(113, 135, 156, 0.1)',
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row',
      }}
      onPress={onBackButtonPress}
      disabled={disabled}>
      {childArrow}
    </TouchableOpacity>
  );
}

export default BackButton;
