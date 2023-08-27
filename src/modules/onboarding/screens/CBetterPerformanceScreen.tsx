import React from 'react';
import {
  View,
  BackHandler,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {family, palette} from '../../../theme';
import speedometer from './../../../../assets/images/speedometer.png';
import PrimaryButton from '../components/PrimaryButton';

export default function CBetterPerformanceScreen({navigation}: any) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={palette.dew} barStyle={'dark-content'} />
      <Image
        source={speedometer}
        width={300}
        height={300}
        style={{
          marginTop: 75,
        }}
      />
      <View style={{flexDirection: 'row', marginBottom: 40}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AQualityAssetsScreen')}
          style={styles.backgroundEllipsis}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('BSuperiorSelectionScreen')}
          style={{...styles.backgroundEllipsis, marginHorizontal: 10}}
        />
        <View style={styles.focusEllipsis} />
      </View>
      <Text style={styles.headingText}>Better Performance</Text>
      <Text style={styles.bodyText}>
        You earn more returns, achieve more of your {'\n'}financial goals and
        protect your money from {'\n'}devaluation
      </Text>
      <View
        style={{
          marginBottom: 30,
          width: '90%',
        }}>
        <PrimaryButton
          backgroundColor={palette.teal}
          textColor={palette.white}
          title="Sign Up"
          onPrimaryButtonPress={() => navigation.navigate('DSignUpScreen')}
        />
        <PrimaryButton
          backgroundColor={'rgba(113, 135, 156, 0.1)'}
          textColor={palette.teal}
          title="Sign In"
          onPrimaryButtonPress={() => navigation.navigate('GSignInScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.dew,
    alignItems: 'center',
  },
  headingText: {
    fontFamily: family.SpaceGrotesk,
    fontSize: 20,
    color: palette.teal,
    marginTop: 20,
    width: '90%',
    textAlign: 'left',
    lineHeight: 26,
  },
  bodyText: {
    fontFamily: family.DMSans,
    fontSize: 15,
    marginTop: 10,
    color: palette.mineShaft,
    width: '90%',
    textAlign: 'left',
    flex: 1,
    lineHeight: 22,
  },
  focusEllipsis: {
    backgroundColor: palette.teal,
    width: 7,
    height: 7,
    borderRadius: 50,
  },
  backgroundEllipsis: {
    backgroundColor: palette.slateGray,
    width: 7,
    height: 7,
    borderRadius: 50,
    opacity: 0.2,
  },
});
