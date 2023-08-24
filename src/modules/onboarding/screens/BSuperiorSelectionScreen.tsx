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
import searchBar from './../../../../assets/images/searchBar.png';
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';
import BNEXTARROWSVG from '../../../../assets/images/svgs/BNextArrow.svg';
import BACKARROWSVG from '../../../../assets/images/svgs/BackArrow.svg';

export default function BSuperiorSelectionScreen({navigation}: any) {
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
    navigation.navigate('CBetterPerformanceScreen');
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={palette.carouselPink}
        barStyle={'dark-content'}
      />
      <Image
        source={searchBar}
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
        <View style={{...styles.focusEllipsis, marginHorizontal: 10}} />
        <TouchableOpacity
          onPress={() => navigation.navigate('CBetterPerformanceScreen')}
          style={styles.backgroundEllipsis}
        />
      </View>
      <Text style={styles.headingText}>Superior Selection</Text>
      <Text style={styles.bodyText}>
        Our expert team and intelligent algorithms {'\n'}select assets that beat
        markets.
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
          onBackButtonPress={() => backButtonPress()}
        />
        <NextButton
          textColor={palette.flirt}
          childArrow={
            <BNEXTARROWSVG style={{width: 40, alignSelf: 'center'}} />
          }
          onNextButtonPress={() => nextButtonPress()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.carouselPink,
    alignItems: 'center',
  },
  headingText: {
    fontFamily: family.SpaceGrotesk,
    fontSize: 20,
    color: palette.flirt,
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
    backgroundColor: palette.flirt,
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
