import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {family, palette} from '../../../theme';
import PrimaryButton from '../components/PrimaryButton';
import ACCOUNTCREATEDSVG from './../../../../assets/images/svgs/AccountCreated.svg';

export default function JPinCreatedScreen({navigation}: any) {
  const handleOkayButton = () => {
    navigation.navigate('FAccountCreatedScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={palette.white} barStyle={'dark-content'} />
      <View style={{marginTop: 100}}>
        <ACCOUNTCREATEDSVG style={{width: 40, alignSelf: 'center'}} />
      </View>
      <Text style={styles.headingText}>You've created your PIN</Text>
      <Text style={styles.bodyText}>
        Keep your account safe with your{'\n'} secret PIN. Do not share this PIN
        {'\n'}with anyone.
      </Text>

      <View style={{marginBottom: 30, width: '90%'}}>
        <PrimaryButton
          textColor={palette.white}
          backgroundColor={palette.teal}
          onPrimaryButtonPress={() => {
            handleOkayButton();
          }}
          title="Okay"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    alignItems: 'center',
  },
  headingText: {
    fontFamily: family.SpaceGrotesk,
    fontSize: 20,
    color: palette.mineShaft,
    marginTop: 50,
    width: '90%',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 26,
  },
  bodyText: {
    fontFamily: family.DMSans,
    fontSize: 15,
    marginTop: 10,
    color: palette.lynch,
    fontWeight: '400',
    width: '90%',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
    flex: 1,
  },
});
