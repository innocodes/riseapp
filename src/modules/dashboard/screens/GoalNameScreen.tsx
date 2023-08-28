import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {family, palette} from '../../../theme';
import PrimaryButton from '../../shared/components/PrimaryButton';
import BACKARROWSVG from './../../../../assets/images/svgs/LeftBackArrow.svg';
import {TextInput} from 'react-native-paper';

export default function GoalNameScreen({navigation}: any) {
  const handleContinueButton = () => {
    navigation.navigate('DashboardTabs');
  };

  const [savingGoal, setSavingGoal] = useState('');

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
          <BACKARROWSVG style={{width: 15, height: 15, alignSelf: 'center'}} />
          {/*<CLOSESVG style={{width: 15, height: 15, alignSelf: 'center'}} />*/}
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
            Goal name
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 40,
          fontSize: 15,
          lineHeight: 22,
          color: palette.lynch,
          textAlign: 'left',
          width: '80%',
        }}>
        Question 1 of 3
      </Text>

      <View
        style={{
          marginTop: 25,
          width: '80%',

        }}>
        <View style={{
          width: '100%',

        }}>
          <Text style={styles.textTitle}>What are you saving for?</Text>
          <TextInput
            style={styles.textInputBody}
            mode="outlined"
            label="Investments"
            value={savingGoal}
            onChangeText={txt => {
              setSavingGoal(txt);
            }}
            selectionColor="#0898A0"
            outlineColor="#cdcdcd"
          />
        </View>
      </View>
      <View style={{marginTop: 20, marginBottom: 30, width: '90%'}}>
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
  textTitle: {fontSize: 15, fontWeight: '700', color: palette.mineShaft},
  textInputBody: {
    marginTop: 10,
    width: '100%',
    fontSize: 15,
    fontWeight: '700',
    backgroundColor: '#fff',
    color: palette.outerSpace,
  },
});
