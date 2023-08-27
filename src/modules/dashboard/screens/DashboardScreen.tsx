import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet, ImageBackground} from 'react-native';
import {family, palette} from '../../../theme';
// import PrimaryButton from '../components/PrimaryButton';
import ACCOUNTCREATEDSVG from './../../../../assets/images/svgs/AccountCreated.svg';
import GRADIENTBG from './../../../../assets/images/GradientBg.png';
import LinearGradient from 'react-native-linear-gradient';

export default function DashboardScreen({navigation}: any) {
  const handleOkayButton = () => {
    navigation.navigate('HCreatePinScreen');
  };

  // useEffect(() => {
  //   // validatePassword(password);
  // }, [password]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F8E8F3', '#EEF3FA', '#E9DFF7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          // flex: 1,
          height: 30,
          width: '100%',
        }}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
      </LinearGradient>

      <ImageBackground
        resizeMode="cover"
        source={GRADIENTBG}
        style={styles.backgroundImage}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
          }}>
          <View>
            <Text style={{fontSize: 15, marginTop: 20, lineHeight: 22}}>
              Good morning{'\n'}
              <Text style={{fontSize: 20, marginTop: 10}}>Deborah</Text>
            </Text>
          </View>
          <View></View>
          <View></View>
        </View>
      </ImageBackground>
      <View style={{marginTop: 100}}>
        <ACCOUNTCREATEDSVG style={{width: 40, alignSelf: 'center'}} />
      </View>
      <Text style={styles.headingText}>
        Homepage
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
  backgroundImage: {
    flex: 2,
    // justifyContent: 'center',
    width: '100%',
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
