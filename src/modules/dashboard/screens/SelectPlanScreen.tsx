import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import {family, palette} from '../../../theme';
import BACKARROWSVG from './../../../../assets/images/svgs/LeftBackArrow.svg';
import PLANWEDDINGCARD from './../../../../assets/images/PlanWeddinCard.png';
import STARTBUSINESSCARD from './../../../../assets/images/StartBusinessCard.png';
import BUILDWEALTHCARD from './../../../../assets/images/BuildWealthCard.png';

export default function SelectPlanScreen({navigation}: any) {
  const handleContinueButton = () => {
    navigation.navigate('TargetAmountScreen');
  };

  const [savingGoal, setSavingGoal] = useState('');
  const [progress, setProgress] = useState(0.33);

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
            // marginRight: 20,
          }}>
          <BACKARROWSVG style={{width: 15, height: 15, alignSelf: 'center'}} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', marginLeft: 30}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              fontWeight: '700',
              color: palette.black,
              lineHeight: 26,
              alignSelf: 'center',
            }}>
            Choose from plans
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 10,
          fontSize: 15,
          lineHeight: 22,
          color: palette.lynch,
          textAlign: 'center',
        }}>
        Tap on any of the plans to select
      </Text>

      <View style={{width: '90%', alignItems: 'center', marginTop: 20}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectBankScreen')}
          >
            <Image
              source={PLANWEDDINGCARD} style={{ width: 192, height: 241 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectBankScreen')}
          >
            <Image
              source={STARTBUSINESSCARD} style={{ width: 192, height: 241 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '109%'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectBankScreen')}
            style={{}}
          >
            <Image
              source={BUILDWEALTHCARD} style={{ width: 192, height: 241 }}
            />
          </TouchableOpacity>
        </View>
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
  textTitle: {
    marginTop: 30,
    fontSize: 15,
    fontWeight: '700',
    color: palette.mineShaft,
  },
  textInputBody: {
    marginTop: 10,
    width: '100%',
    fontSize: 15,
    fontWeight: '700',
    backgroundColor: '#fff',
    color: palette.outerSpace,
  },
});
