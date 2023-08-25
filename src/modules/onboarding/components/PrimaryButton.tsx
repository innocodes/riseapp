import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { palette } from "../../../theme";

function PrimaryButton({
  onPrimaryButtonPress = () => {},
  disabled = false as boolean,
  textColor = '' as string,
  backgroundColor = '' as string,
  title = '' as string,
  textWeight = '' as string,
}) {
  return (
    <TouchableOpacity
      style={{
        width: '90%',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 18,
        backgroundColor: backgroundColor,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
      }}
      onPress={onPrimaryButtonPress}
      disabled={disabled}>
      <Text
        style={{
          color: textColor,
          fontWeight: textWeight,
          // justifyContent: 'center'
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default PrimaryButton;
