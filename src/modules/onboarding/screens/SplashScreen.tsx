import {Text, View, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {palette, family} from '../../../theme';
import RISELOGOSVG from '../../../../assets/images/svgs/rise.svg';

export default function SplashScreen({navigation}: any) {
  // Navigates to onboarding flow after 3.5secs
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnboardStories');
    }, 3500);
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={palette.teal} />
      <RISELOGOSVG width="30%" style={{marginTop: 100}} />
      <Text style={styles.fontText}>Dollar investments that help you grow</Text>
      <View style={styles.footer}>
        <Text style={styles.copyrightText}>All rights reserved</Text>
        <Text style={styles.copyrightText}>&copy; 2021</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.teal,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  fontText: {
    fontFamily: family.SpaceGrotesk,
    fontSize: 18,
    color: palette.white,
    marginTop: 20,
    width: '50%',
    textAlign: 'center',
    flex: 1,
  },
  footer: {
    marginBottom: 20,
  },
  copyrightText: {
    fontSize: 12,
    color: palette.white,
    textAlign: 'center',
    fontFamily: family.SpaceGrotesk,
  },
});
