import React from 'react';
import {
  View,
  BackHandler,
  Text,
  StatusBar,
  StyleSheet,
  Image, TouchableOpacity
} from "react-native";
import {useFocusEffect} from '@react-navigation/native';
import {family, palette} from '../../../theme';
import flowerBadge from './../../../../assets/images/flowerBadge.png';
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';
import ANEXTARROWSVG from '../../../../assets/images/svgs/ANextArrow.svg';
import BACKARROWSVG from '../../../../assets/images/svgs/BackArrow.svg';

export default function AQualityAssetsScreen({navigation}: any) {
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

  const backButtonPress = () => {
    navigation.goBack();
  };

  const nextButtonPress = () => {
    navigation.navigate('BSuperiorSelectionScreen');
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={palette.provincialPink}
        barStyle={'dark-content'}
      />
      <Image
        source={flowerBadge}
        width={300}
        height={300}
        style={{
          marginTop: 75,
        }}
      />
      <View style={{flexDirection: 'row', marginBottom: 40}}>
        <View style={styles.focusEllipsis} />
        <TouchableOpacity
          onPress={() => navigation.navigate('BSuperiorSelectionScreen')}
          style={{...styles.backgroundEllipsis, marginHorizontal: 10}} />
        <TouchableOpacity
          onPress={() => navigation.navigate('CBetterPerformanceScreen')}
          style={styles.backgroundEllipsis}
        />
      </View>
      <Text style={styles.headingText}>Quality Assets</Text>
      <Text style={styles.bodyText}>
        Rise invests your money into the best dollar investments around the
        world.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 100,
          width: '90%',
        }}>
        <BackButton
          childArrow={<BACKARROWSVG style={{width: 40, alignSelf: 'center'}} />}
        />
        <NextButton
          textColor={palette.orange}
          childArrow={
            <ANEXTARROWSVG style={{width: 40, alignSelf: 'center'}} />
          }
          onNextButtonPress={() => {
            nextButtonPress();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.provincialPink,
    alignItems: 'center',
  },
  headingText: {
    fontFamily: family.SpaceGrotesk,
    fontSize: 20,
    color: palette.orange,
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
    backgroundColor: palette.orange,
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
