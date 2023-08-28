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
import FRONTARROWSVG from './../../../../assets/images/svgs/frontArrowBig.svg';
import {TextInput} from 'react-native-paper';

export default function SelectBankScreen({navigation}: any) {
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
          marginBottom: 20,
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
            Select Bank
          </Text>
        </View>
      </View>
      <View style={styles.straightRule} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <View>
          <Text style={styles.totalEarningsTitle}>0123456789 • GTBank PLC</Text>
          <Text style={styles.totalEarningsBody}>
            Bosun Olanrewaju
          </Text>
        </View>
        <FRONTARROWSVG style={{ width: 80, height: 80, alignSelf: 'center' }}/>
      </View>
      <View style={styles.straightRule} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <View>
          <Text style={styles.totalEarningsTitle}>0123456789 • Fidelity Bank</Text>
          <Text style={styles.totalEarningsBody}>
            Bosun Olanrewaju
          </Text>
        </View>
        <FRONTARROWSVG style={{ width: 80, height: 80, alignSelf: 'center' }}/>
      </View>
      <View style={styles.straightRule} />
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
  textTitle: {marginTop: 30, fontSize: 15, fontWeight: '700', color: palette.mineShaft},
  textInputBody: {
    marginTop: 10,
    width: '100%',
    fontSize: 15,
    fontWeight: '700',
    backgroundColor: '#fff',
    color: palette.outerSpace,
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
