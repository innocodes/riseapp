import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {family, palette} from '../../../theme';
// import PrimaryButton from '../components/PrimaryButton';
import ACCOUNTCREATEDSVG from './../../../../assets/images/svgs/AccountCreated.svg';
import PLANSSVG from '../../../../assets/images/svgs/PlansIcon.svg';

export default function PlansScreen({navigation}: any) {
  const handleOkayButton = () => {
    navigation.navigate('HCreatePinScreen');
  };

  // useEffect(() => {
  //   // validatePassword(password);
  // }, [password]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={palette.white} barStyle={'dark-content'} />
      <View style={{marginTop: 100}}>
        <PLANSSVG style={{width: 80, alignSelf: 'center'}} />
      </View>
      <Text style={styles.headingText}>
        Plans
      </Text>
      <Text style={styles.bodyText}>
        Welcome to Rise, let's take{'\n'}you home
      </Text>

      <View style={{marginBottom: 30, width: '90%'}}>
        {/*<PrimaryButton*/}
        {/*  textColor={palette.white}*/}
        {/*  backgroundColor={palette.teal}*/}
        {/*  onPrimaryButtonPress={() => {*/}
        {/*    handleOkayButton();*/}
        {/*  }}*/}
        {/*  title="Okay"*/}
        {/*/>*/}
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
