import React, {useState, useEffect} from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from "react-native";
import {family, palette} from '../../../theme';
// import PrimaryButton from '../components/PrimaryButton';
import ACCOUNT from '../../../../assets/images/Account.png';
import FRONTARROWSVG from '../../../../assets/images/svgs/frontArrowBig.svg';

export default function AccountScreen({navigation}: any) {
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
        <Image source={ACCOUNT} />
      </View>
      <View style={styles.straightRule} />
      <TouchableOpacity
        onPress={() => navigation.navigate('GSignInScreen')}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <View>
          <Text style={styles.totalEarningsTitle}>Dear User, • MANAGE YOUR ACCOUNT</Text>
          <Text style={styles.totalEarningsBody}>Log out.</Text>
        </View>
        <FRONTARROWSVG style={{width: 80, height: 80, alignSelf: 'center'}} />
      </TouchableOpacity>
      <View style={styles.straightRule} />
      {/*<Text style={styles.headingText}>My Account</Text>*/}
      {/*<Text style={styles.bodyText}>Coming nnnsoon.</Text>*/}



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
  straightRule: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(113, 135, 156, 0.2)',
    width: '90%',
  },
  totalEarningsTitle: {
    fontSize: 15,
    color: palette.mineShaft,
    lineHeight: 22,
    paddingTop: 10,
  },
  totalEarningsBody: {
    fontSize: 13,
    color: palette.lynch,
  },
});
