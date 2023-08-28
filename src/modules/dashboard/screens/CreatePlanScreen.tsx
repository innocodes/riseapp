import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {family, palette} from '../../../theme';
import PrimaryButton from '../../shared/components/PrimaryButton';
import CREATEPLANIMAGE from './../../../../assets/images/CreatePlanImage.png';
import CLOSESVG from './../../../../assets/images/svgs/CloseIcon.svg';
import CALENDARSVG from './../../../../assets/images/svgs/CalendarIcon.svg';
import SETTINGSSVG from './../../../../assets/images/svgs/SettingsIcon.svg';
import QUESTIONSVG from './../../../../assets/images/svgs/QuestionMark.svg';

export default function CreatePlanScreen({navigation}: any) {
  const handleContinueButton = () => {
    navigation.navigate('GoalNameScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={palette.white} barStyle={'dark-content'} />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          display: 'flex',
          width: '90%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 36,
            height: 36,
            borderRadius: 50,
            backgroundColor: 'rgba(113.24, 134.71, 156.19, 0.10)',
            justifyContent: 'center',
            flex: 1,
            // marginRight: 20,
          }}>
          <CLOSESVG style={{width: 15, height: 15, alignSelf: 'center'}} />
        </TouchableOpacity>
        <View style={{flex: 7, marginLeft: 70, justifyContent: 'center'}}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 24,
              fontWeight: '700',
              color: palette.black,
              lineHeight: 26,
            }}>
            Create a plan
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 30,
          fontSize: 15,
          lineHeight: 22,
          color: palette.lynch,
        }}>
        Reach your goals faster
      </Text>
      <View style={{marginTop: 60}}>
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={CREATEPLANIMAGE}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 25,
          display: 'flex',
          width: '90%',
        }}>
        <QUESTIONSVG style={styles.textSvg} />
        <View style={{flex: 4}}>
          <Text style={styles.textTitle}>Give us a few details</Text>
          <Text style={styles.textDescription}>
            Tell us what you want to achieve and we will{'\n'} help you get
            there
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 25,
          display: 'flex',
          width: '90%',
        }}>
        <CALENDARSVG style={styles.textSvg} />
        <View style={{flex: 4}}>
          <Text style={styles.textTitle}>Turn on auto-invest</Text>
          <Text style={styles.textDescription}>
            The easiest way to get your investment {'\n'}working for you is to
            invest periodically
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 25,
          display: 'flex',
          width: '90%',
        }}>
        <SETTINGSSVG style={styles.textSvg} />
        <View style={{flex: 4}}>
          <Text style={styles.textTitle}>Modify as you progress</Text>
          <Text style={styles.textDescription}>
            You're in charge. Make changes to your{'\n'}plan, from adding funds,
            funding source,{'\n'}adding money to your wallet and more.
          </Text>
        </View>
      </View>

      <View style={{marginTop: 80, marginBottom: 30, width: '90%'}}>
        <PrimaryButton
          textColor={palette.white}
          backgroundColor={palette.teal}
          onPrimaryButtonPress={() => {
            handleContinueButton();
          }}
          title="Continue"
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
  textSvg: {flex: 1, width: 60, height: 60, marginRight: 20},
  textTitle: {fontSize: 15, fontWeight: '700', color: palette.mineShaft},
  textDescription: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: palette.lynch,
    marginTop: 6,
  },
});
