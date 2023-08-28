import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {family, palette} from '../../../theme';
// import PrimaryButton from '../components/PrimaryButton';
import BELLICONSVG from './../../../../assets/images/svgs/BellIcon.svg';
import GRADIENTBG from './../../../../assets/images/GradientBg.png';
import PLANSBG from './../../../../assets/images/PlansCard2.png';
import EYEICONSVG from './../../../../assets/images/svgs/EyeIcon.svg';
import GREENARROWSVG from './../../../../assets/images/svgs/GreenArrow.svg';
import ARROWRIGHTSVG from './../../../../assets/images/svgs/ArrowRight.svg';
import PLUSSVG from './../../../../assets/images/svgs/Plus.svg';
import RISEFOOTERSVG from './../../../../assets/images/svgs/riseFooter.svg';
import SHAREICONSVG from './../../../../assets/images/svgs/ShareIcon.svg';
import QUESTIONMARKSVG from './../../../../assets/images/svgs/QuestionMark.svg';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function DashboardScreen({navigation}: any) {
  const [toggleBalance, setToggleBalance] = useState(true);
  const [balance, setBalance] = useState(0);
  const [gains, setGains] = useState(0);
  const [hasInvestmentPlans, setHasInvestmentPlans] = useState(false);
  const [planName, setPlanName] = useState('');
  const [planDescription, setPlanDescription] = useState('');
  const [planAmount, setPlanAmount] = useState(0);

  const handleOkayButton = () => {
    navigation.navigate('HCreatePinScreen');
  };

  // useEffect(() => {
  //   // validatePassword(password);
  // }, [password]);

  const onAddMoneyBtnPress = () => {
    navigation.navigate('WalletScreen');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
      }}
      showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#F8E8F3', '#ECF0F8', '#E9DFF7']}
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
            marginTop: 20,
          }}>
          <View style={{}}>
            <Text style={{fontSize: 15, lineHeight: 22}}>
              Good morning{'\n'}
              <Text style={{fontSize: 20, marginTop: 10}}>Deborah</Text>
            </Text>
          </View>
          <View
            style={{
              backgroundColor: palette.teal,
              borderRadius: 20,
              height: 30,
              width: 111,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{color: palette.white, textAlign: 'center', fontSize: 12}}>
              Earn 3% bonus
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <BELLICONSVG style={{width: 40, alignSelf: 'center'}} />
          </View>
        </View>
        <LinearGradient
          colors={['#FAFAFD', '#F6FAFD', '#F1F0FB']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            // flex: 1,
            // height: 30,
            width: '90%',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 50,
            borderWidth: 2,
            borderColor: palette.white,
            borderRadius: 10,
          }}>
          <View>
            <View
              style={{
                width: '100%',
              }}>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  alignSelf: 'center',
                }}>
                <Text style={styles.balanceOverviewText}>Total Balance</Text>
                <TouchableOpacity style={{alignSelf: 'center'}}>
                  {toggleBalance ? (
                    // <AntDesign name="close" color="#000" size={30} />
                    <EYEICONSVG style={{}} />
                  ) : (
                    <AntDesign name="close" color="#000" size={20} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: '300',
                  color: palette.mineShaftTwo,
                }}>
                ${balance}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                borderTopWidth: 1,
                width: '60%',
                alignSelf: 'center',
                borderColor: 'rgba(113, 135, 156, 0.1)',
              }}
            />
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <Text style={styles.balanceOverviewText}>Total Gains</Text>
              <GREENARROWSVG style={{width: 40, alignSelf: 'center'}} />
              <Text
                style={{
                  marginHorizontal: 10,
                  fontSize: 16,
                  fontWeight: '300',
                  color: palette.forestGreen,
                }}>
                {gains}%
              </Text>
              <ARROWRIGHTSVG style={{width: 40, alignSelf: 'center'}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 20,
              }}>
              <View style={styles.focusEllipsis} />
              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate("BSuperiorSelectionScreen");
                }}
                style={{...styles.backgroundEllipsis, marginHorizontal: 6}}
              />
              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate("CBetterPerformanceScreen");
                }}
                style={styles.backgroundEllipsis}
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <TouchableOpacity style={styles.addMoneyBtn} onPress={onAddMoneyBtnPress}>
        <Text
          style={{
            fontSize: 22,
            marginRight: 10,
            alignSelf: 'center',
            color: palette.teal,
            fontWeight: '300',
          }}>
          +
        </Text>
        <Text
          style={{
            color: palette.teal,
            fontWeight: '700',
            // justifyContent: 'center'
            alignSelf: 'center',
            fontSize: 15,
          }}>
          Add Money
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontSize: 18, color: palette.black}}>
            {hasInvestmentPlans ? 'Your plans' : 'Create a plan'}
          </Text>
        </View>

        <TouchableOpacity
          style={{flexDirection: 'row', alignSelf: 'center'}}
          onPress={
            hasInvestmentPlans
              ? () => navigation.navigate('PlansScreen')
              : () => {}
          }>
          <Text
            style={{
              color: hasInvestmentPlans
                ? palette.teal
                : 'rgba(113, 135, 156, 0.4)',
              marginRight: 10,
            }}>
            View all plans
          </Text>
          <ARROWRIGHTSVG style={{width: 40, alignSelf: 'center'}} />
        </TouchableOpacity>
      </View>
      <Text style={styles.bodyText}>
        Start your investment journey by creating a {'\n'}plan.
      </Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          alignItems: 'center',
          width: '90%',
          marginBottom: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreatePlanScreen');
            console.log('Create investment plan pressed.');
          }}
          style={{
            height: 243,
            width: 188,
            justifyContent: 'center',
            alignSelf: 'flex-start',
            backgroundColor: 'rgba(113.24, 134.71, 156.19, 0.10)',
            borderRadius: 12,
            marginRight: 10,
          }}>
          <PLUSSVG style={{width: 40, alignSelf: 'center'}} />
          <Text
            style={{
              textAlign: 'center',
              color: palette.mineShaftTwo,
              fontWeight: '700',
            }}>
            Create an{'\n'}investment plan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={
            {
              // height: 243,
              // width: 188,
              // // justifyContent: 'center',
              // // alignSelf: 'flex-start',
              // backgroundColor: 'rgba(113.24, 134.71, 156.19, 0.10)',
              // borderRadius: 12,
            }
          }>
          <Image
            style={{alignSelf: 'flex-start', width: 150, height: 243}}
            source={PLANSBG}
          />
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          backgroundColor: palette.white,
          borderRadius: 12,
          alignSelf: 'center',
          paddingHorizontal: 12,
          height: 66,
          shadowColor: 'rgba(113.24, 134.71, 156.19, 0.10)',
          shadowRadius: 20,
        }}>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <QUESTIONMARKSVG style={{alignSelf: 'center'}} />
        </View>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text>Need help?</Text>
        </View>
        <View
          style={{
            backgroundColor: palette.teal,
            borderRadius: 6,
            height: 42,
            width: 123,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: palette.white,
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            Contact us
          </Text>
        </View>
      </View>

      <View
        style={{
          borderRadius: 15,
          backgroundColor: palette.teal,
          width: '90%',
          marginVertical: 30,
          borderWidth: 1,
          borderColor: 'rgba(64, 187, 195, 0.15)',
        }}>
        <Text
          style={{
            color: palette.white,
            fontSize: 14,
            fontWeight: '700',
            padding: 20,
          }}>
          TODAY'S QUOTE
        </Text>
        <View
          style={{
            borderWidth: 2,
            borderColor: palette.white,
            width: 30,
            marginLeft: 20,
          }}
        />
        <Text
          style={{
            marginLeft: 20,
            color: palette.white,
            marginTop: 20,
            fontSize: 15,
            lineHeight: 22,
          }}>
          We have no intention of rotating capital{'\n'}out of strong multi-year
          investments{'\n'}becuase they've recently done well or{'\n'}or because
          'growth' has outperformed{'\n'}'value'.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 20,
          }}>
          <Text
            style={{
              color: palette.white,
              fontSize: 15,
              fontWeight: '700',
              alignSelf: 'center',
            }}>
            Carl Sagan
          </Text>
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 50,
              backgroundColor: 'rgba(255, 255, 255, 0.20)',
              justifyContent: 'center',
              alignSelf: 'flex-end',
              marginRight: 20,
              marginBottom: 20,
            }}>
            <SHAREICONSVG style={{alignSelf: 'center'}} />
          </View>
        </View>
      </View>

      <View style={{marginBottom: 150}}>
        <RISEFOOTERSVG style={{alignSelf: 'center'}} />
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
    textAlign: 'left',
    lineHeight: 22,
    marginBottom: 20,
    flex: 1,
  },
  balanceOverviewText: {
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 22,
    fontSize: 15,
    color: palette.lynch,
    alignSelf: 'center',
    marginRight: 10,
  },
  focusEllipsis: {
    backgroundColor: palette.teal,
    width: 12,
    height: 5,
    borderRadius: 50,
  },
  backgroundEllipsis: {
    backgroundColor: palette.lynch,
    width: 5,
    height: 5,
    borderRadius: 50,
    opacity: 0.2,
  },
  addMoneyBtn: {
    width: '90%',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 18,
    backgroundColor: palette.white,
    borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(113, 135, 156, 0.2)',
    borderWidth: 1,
  },
});
