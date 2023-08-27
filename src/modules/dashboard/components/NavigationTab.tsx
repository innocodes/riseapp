import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import HOMESVG from '../../../../assets/images/svgs/HomeIcon.svg';
import PLANSSVG from '../../../../assets/images/svgs/PlansIcon.svg';
import WALLETSVG from '../../../../assets/images/svgs/WalletIcon.svg';
import FEEDSVG from '../../../../assets/images/svgs/FeedIcon.svg';
import ACCOUNT from '../../../../assets/images/Account.png';

import {palette} from '../../../theme';

const NavigationTab = ({navigation}: any) => {
  const [focusKey, setFocusKey] = useState(1);

  const handlePress = (routename: string, idx: number) => {
    setFocusKey(idx);
    navigation.navigate(routename);
  };

  return (
    <View style={styles.navigationTabContainer}>
      <View style={styles.navigationTabInnerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handlePress('DashboardScreen', 1)}>
          <View style={styles.navigationTabItems}>
            <HOMESVG
              style={{
                opacity: focusKey === 1 ? 1 : 0.8,
                marginTop: -5,
              }}
            />
          </View>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: palette.teal,
              width: 9,
              height: 9,
              alignSelf: 'center',
              marginTop: 10,
              opacity: focusKey === 1 ? 1 : 0.8,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handlePress('PlansScreen', 2)}>
          <View style={styles.navigationTabItems}>
            <PLANSSVG
              style={{
                opacity: focusKey === 2 ? 1 : 0.8,
              }}
            />
          </View>
          <Text
            style={{
              ...styles.navigationTabItemIcons,
              opacity: focusKey === 2 ? 1 : 0.8,
            }}>
            Plans
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handlePress('WalletScreen', 3)}>
          <View style={styles.navigationTabItems}>
            <WALLETSVG
              style={{
                opacity: focusKey === 3 ? 1 : 0.8,
              }}
            />
          </View>
          <Text
            style={{
              ...styles.navigationTabItemIcons,
              opacity: focusKey === 3 ? 1 : 0.8,
            }}>
            Wallet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handlePress('FeedScreen', 4)}>
          <View style={styles.navigationTabItems}>
            <FEEDSVG
              style={{
                opacity: focusKey === 4 ? 1 : 0.8,
              }}
            />
          </View>
          <Text
            style={{
              ...styles.navigationTabItemIcons,
              opacity: focusKey === 4 ? 1 : 0.8,
            }}>
            Feed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handlePress('AccountScreen', 5)}>
          <View style={styles.navigationTabItems}>
            <Image
              style={{
                opacity: focusKey === 5 ? 1 : 0.8,
                width: 25,
                height: 25,
              }}
              source={ACCOUNT}
            />
          </View>
          <Text
            style={{
              ...styles.navigationTabItemIcons,
              opacity: focusKey === 5 ? 1 : 0.8,
            }}>
            Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationTabContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: palette.white,
    borderTopWidth: 1,
    borderTopColor: palette.athensGray,
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 10,
  },
  navigationTabInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: palette.white,
  },
  navigationTabItems: {
    display: 'flex',
    alignItems: 'center',
    // width: 65,
    height: 25,
  },
  navigationTabItemIcons: {
    alignSelf: 'center',
    marginTop: 4,
    color: palette.gullGray,
  },
});

export default NavigationTab;
