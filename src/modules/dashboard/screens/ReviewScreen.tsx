import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {family, palette} from '../../../theme';
import PrimaryButton from '../../shared/components/PrimaryButton';
import BACKARROWSVG from './../../../../assets/images/svgs/LeftBackArrow.svg';
import CAUTIONSVG from './../../../../assets/images/svgs/informationOutline.svg';
import PLANCHART from './../../../../assets/images/SCR-20230828-rxmb-2.png';

export default function ReviewScreen({navigation}: any) {
  // const handleContinueButton = () => {
  //   navigation.navigate('ReviewScreen');
  // };

  const [withdrawDate, setWithdrawDate] = useState('');
  const [amount, setAmount] = useState('10,930.75');
  const [investmentAmount, setInvestmentAmount] = useState('50,400');
  const [returnsAmount, setReturnsAmount] = useState('20,803');

  const data = [{value:50}, {value:80}, {value:90}, {value:70} ];

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      style={styles.container}>
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
            // flex: 1,
            // marginRight: 20,
          }}>
          <BACKARROWSVG style={{width: 15, height: 15, alignSelf: 'center'}} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              fontWeight: '700',
              color: palette.black,
              lineHeight: 26,
              alignSelf: 'center',
              marginLeft: 70,
            }}>
            Review
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 40,
          fontSize: 15,
          lineHeight: 22,
          color: palette.lynch,
          textAlign: 'center',
          width: '90%',
        }}>
        Kate Ventures
      </Text>
      <Text
        style={{
          fontSize: 24,
          lineHeight: 26,
          fontWeight: '700',
          textAlign: 'center',
          width: '90%',
          color: palette.black,
        }}>
        ${amount}
      </Text>
      <Text
        style={{
          marginTop: 5,
          fontSize: 15,
          lineHeight: 22,
          color: palette.mineShaftTwo,
          textAlign: 'center',
          width: '90%',
          fontWeight: '400',
        }}>
        by 20 June 2021
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginTop: 20,}}>
        <Text
          style={{
            fontSize: 15,
            lineHeight: 22,
            color: palette.lynch,
            // textAlign: 'center',
            // width: '90%',
          }}>
          Investments • ${investmentAmount}
        </Text>
        <Text
          style={{
            fontSize: 15,
            lineHeight: 22,
            color: palette.lynch,
            // textAlign: 'center',
            // width: '90%',
          }}>
          Returns • ${returnsAmount}
        </Text>
      </View>
      <View style={{width: '90%', alignItems: 'center', marginTop: 20}} />

      <View>
        {/*<BarChart data = {data} />*/}
        {/*<LineChart data = {data} />*/}
        {/*<PieChart data = {data} />*/}
        <Image source={PLANCHART} style={{width: 400, height: 240}} />
      </View>

      <View
        style={{
          marginTop: 25,
          width: '90%',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.textTitle}>Estimated monthly investment</Text>
          <Text style={{...styles.textTitle, color: palette.black}}>$120</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          backgroundColor: 'rgba(113.24, 134.71, 156.19, 0.05)',
          padding: 10,
          borderRadius: 8,
        }}>
        <CAUTIONSVG style={{width: 15, height: 15, alignSelf: 'center', marginLeft: 20}} />
        <Text
          style={{
            color: palette.lynch,
            fontSize: 15,
            fontFamily: family.DMSans,
            lineHeight: 22,
            fontWeight: '400',
            marginRight: 30,
          }}>
          Returns not guaranteed. Investing{'\n'}involves risk. Read our
          Disclosures.
        </Text>
      </View>
      <Text
        style={{
          color: palette.lynch,
          fontSize: 12,
          fontFamily: family.DMSans,
          fontWeight: '400',
          marginTop: 20,
          textAlign: 'center',
        }}>
        These are your starting settings, they can always be {'\n'} updated.
      </Text>
      <View
        style={{
          marginBottom: 30,
          marginTop: 30,
          width: '100%',
        }}>
        <PrimaryButton
          backgroundColor={palette.teal}
          textColor={palette.white}
          textWeight={'700'}
          title="Agree & Continue"
          onPrimaryButtonPress={() => navigation.navigate('PlanCreatedScreen')}
        />
        <PrimaryButton
          backgroundColor={'rgba(113, 135, 156, 0.1)'}
          textColor={palette.teal}
          textWeight={'700'}
          title="Start Over"
          onPrimaryButtonPress={() => navigation.navigate('CreatePlanScreen')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    // alignItems: 'center',
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
    fontWeight: '400',
    color: palette.lynch,
    lineHeight: 22,
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
