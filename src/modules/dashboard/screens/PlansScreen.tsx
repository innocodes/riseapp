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
import PLANSSCREENGRADIENTBG from './../../../../assets/images/CreatePlanHeaderBackground.png';
import BLACKBACKARROWSVG from './../../../../assets/images/svgs/BlackBackArrow.svg';
import THREEDOTSSVG from './../../../../assets/images/svgs/ThreeDots.svg';
import SHAREICONSVG from './../../../../assets/images/svgs/ShareIcon.svg';
import QUESTIONMARKSVG from './../../../../assets/images/svgs/QuestionMark.svg';
import QUESTIONSVG from './../../../../assets/images/svgs/question.svg';
import ARROWREDSVG from './../../../../assets/images/svgs/ArrowRed.svg';
import PLANSCHART from './../../../../assets/images/SCR-20230828-pxet-2.png';
import ARROWGREENSVG from './../../../../assets/images/svgs/ArrowGreen.svg';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function PlansScreen({navigation}: any) {
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
    navigation.navigate('SelectPlanScreen');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
      }}
      showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[
          '#FFB195',
          '#FFB195',
          '#FED4C8',
          '#FFBFB0',
          '#FFBFB0',
          '#F3AB90',
          '#F3AB90',
        ]}
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
        source={PLANSSCREENGRADIENTBG}
        style={styles.backgroundImage}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
            // marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.topNav}>
            <BLACKBACKARROWSVG style={{width: 40, alignSelf: 'center'}} />
          </TouchableOpacity>
          <View
            style={{
              marginTop: 50,
              borderRadius: 20,
              height: 30,
              width: 111,
              justifyContent: 'center',
              alignSelf: 'center',
              width: '70%',
              marginBottom: 60,
            }}>
            <Text
              style={{
                color: palette.white,
                textAlign: 'center',
                fontSize: 24,
                fontWeight: '700',
                lineHeight: 26,
              }}>
              Start a business
            </Text>
            <Text
              style={{
                color: palette.white,
                textAlign: 'center',
                fontSize: 15,
                lineHeight: 22,
              }}>
              for Kate Ventures
            </Text>
          </View>
          <View style={styles.topNav}>
            <THREEDOTSSVG style={{width: 40, alignSelf: 'center'}} />
          </View>
        </View>
      </ImageBackground>
      <View>
        <View
          style={{
            marginTop: 15,
            alignSelf: 'center',
          }}>
          <Text style={styles.balanceOverviewText}>Plan Balance</Text>
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
        {/*<View*/}
        {/*  style={{*/}
        {/*    marginTop: 10,*/}
        {/*    borderTopWidth: 1,*/}
        {/*    width: '60%',*/}
        {/*    alignSelf: 'center',*/}
        {/*    borderColor: 'rgba(113, 135, 156, 0.1)',*/}
        {/*  }}*/}
        {/*/>*/}
        <View style={{flexDirection: 'row', width: '90%', alignSelf: 'center'}}>
          <Text>~ ₦0.00</Text>
          <QUESTIONSVG
            style={{width: 20, height: 20, alignSelf: 'center', marginLeft: 10}}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Text style={styles.balanceOverviewText}>Gains</Text>
        </View>
        <Text
          style={{
            marginHorizontal: 10,
            fontSize: 16,
            fontWeight: '300',
            color: palette.forestGreen,
            alignSelf: 'center',
          }}>
          {/*{gains}%*/}
          +$5,000.43 • +12.4%
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginTop: 20,
          marginBottom: 5,
        }}>
        <Text style={styles.innerText}>0.01 achieved</Text>
        <Text style={styles.innerText}>Target: $20,053.90</Text>
      </View>
      <View style={{flexDirection: 'row', width: '90%'}}>
        <View
          style={{
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            backgroundColor: palette.teal,
            width: '6%',
            height: 6,
          }}
        />
        <View
          style={{
            backgroundColor: 'rgba(113.24, 134.71, 156.19, 0.20)',
            width: '70%',
          }}
        />
        <View
          style={{
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: 'rgba(113.24, 134.71, 156.19, 0.20)',
            width: '24%',
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'rgba(113.24, 134.71, 156.19, 0.10)',
          borderRadius: 20,
          marginTop: 30,
        }}>
        <Text style={{padding: 5, paddingHorizontal: 10}}>
          Results are updated monthly
        </Text>
      </View>
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
          Fund plan
        </Text>
      </TouchableOpacity>

      <View style={{}}>
        <Image
          source={PLANSCHART}
          style={{
            marginVertical: 20,
            width: 345,
            height: 448,
            borderRadius: 12,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <Text style={styles.totalEarnings}>Total earnings</Text>
        <Text style={{color: palette.black, paddingVertical: 10}}>
          $12,000.09
        </Text>
      </View>
      <View style={styles.straightRule} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <Text style={styles.totalEarnings}>Current earnings</Text>
        <Text style={{color: palette.black, paddingVertical: 10}}>
          $12,000.09
        </Text>
      </View>
      <View style={styles.straightRule} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <Text style={styles.totalEarnings}>Deposit value</Text>
        <Text style={{color: palette.black, paddingVertical: 10}}>
          $50,543.09
        </Text>
      </View>
      <View style={styles.straightRule} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <Text style={styles.totalEarnings}>Balance in Naira(* 505)</Text>
        <Text style={{color: palette.black, paddingVertical: 10}}>
          ₦31,918,837.5
        </Text>
      </View>
      <View style={styles.straightRule} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <Text style={styles.totalEarnings}>Plan created on</Text>
        <Text style={{color: palette.black, paddingVertical: 10}}>
          23rd July 2019
        </Text>
      </View>
      <View style={styles.straightRule} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <Text style={styles.totalEarnings}>Maturity date</Text>
        <Text style={{color: palette.black, paddingVertical: 10}}>
          24th July 2022
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginTop: 10,
        }}>
        <Text style={{color: palette.black, fontSize: 18, fontWeight: '400'}}>
          Recent transactions
        </Text>
        <Text
          style={{
            color: palette.teal,
            fontWeight: '700',
            fontSize: 14,
            fontFamily: family.DMSans,
          }}>
          View all
        </Text>
      </View>
      <View
        style={{
          marginTop: 5,
          marginBottom: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: 'rgba(76, 217, 100, 0.15)',
            borderRadius: 50,
            width: 40,
            height: 40,
            justifyContent: 'center',
          }}>
          <ARROWGREENSVG style={{width: 40, alignSelf: 'center'}} />
        </View>
        <View style={{width: '60%', marginLeft: 10}}>
          <Text
            style={{lineHeight: 22, fontSize: 15, color: palette.mineShaftTwo}}>
            Received from Bank{'\n'}Account (BOSUN TONY{'\n'}ADEMOSU)
          </Text>
          <Text>Jul 6, 2021</Text>
        </View>
        <View style={{alignSelf: 'center', width: '20%'}}>
          <Text
            style={{
              textAlign: 'right',
              lineHeight: 22,
              fontSize: 15,
              color: palette.mineShaftTwo,
            }}>
            +$320.90
          </Text>
        </View>
      </View><View
        style={{
          marginTop: 5,
          marginBottom: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: 'rgba(76, 217, 100, 0.15)',
            borderRadius: 50,
            width: 40,
            height: 40,
            justifyContent: 'center',
          }}>
          <ARROWREDSVG style={{width: 40, alignSelf: 'center'}} />
        </View>
        <View style={{width: '60%', marginLeft: 10}}>
          <Text
            style={{lineHeight: 22, fontSize: 15, color: palette.mineShaftTwo}}>
            Sent to Bank Account{'\n'}(ADEBAYOU MUSILIU JAGUN)
          </Text>
          <Text>Jul 2, 2021</Text>
        </View>
        <View style={{alignSelf: 'center', width: '20%'}}>
          <Text
            style={{textAlign: 'right', lineHeight: 22, fontSize: 15, color: palette.mineShaftTwo}}>
            -$2920.45
          </Text>
        </View>
      </View><View
        style={{
          marginTop: 5,
          marginBottom: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: 'rgba(76, 217, 100, 0.15)',
            borderRadius: 50,
            width: 40,
            height: 40,
            justifyContent: 'center',
          }}>
          <ARROWREDSVG style={{width: 40, alignSelf: 'center'}} />
        </View>
        <View style={{width: '60%', marginLeft: 10}}>
          <Text
            style={{lineHeight: 22, fontSize: 15, color: palette.mineShaftTwo}}>
            Sent to Service (PAYSTACK{'\n'}001WA00948 - AMARDA {'\n'}VENTURES LIMITED)
          </Text>
          <Text>Jun 27, 2021</Text>
        </View>
        <View style={{alignSelf: 'center', width: '20%'}}>
          <Text
            style={{textAlign: 'right', lineHeight: 22, fontSize: 15, color: palette.mineShaftTwo}}>
            +$320.90
          </Text>
        </View>
      </View><View
        style={{
          marginTop: 5,
          marginBottom: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: 'rgba(76, 217, 100, 0.15)',
            borderRadius: 50,
            width: 40,
            height: 40,
            justifyContent: 'center',
          }}>
          <ARROWGREENSVG style={{width: 40, alignSelf: 'center'}} />
        </View>
        <View style={{width: '60%', marginLeft: 10}}>
          <Text
            style={{lineHeight: 22, fontSize: 15, color: palette.mineShaftTwo}}>
            Received from Bank{'\n'}Account (TITUS CLOPATRA{'\n'}MEDINA)
          </Text>
          <Text>Jun 19, 2021</Text>
        </View>
        <View style={{alignSelf: 'center', width: '20%'}}>
          <Text
            style={{textAlign: 'right', lineHeight: 22, fontSize: 15, color: palette.mineShaftTwo}}>
            +$320.90
          </Text>
        </View>
      </View><View
        style={{
          marginTop: 5,
          marginBottom: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: 'rgba(76, 217, 100, 0.15)',
            borderRadius: 50,
            width: 40,
            height: 40,
            justifyContent: 'center',
          }}>
          <ARROWGREENSVG style={{width: 40, alignSelf: 'center'}} />
        </View>
        <View style={{width: '60%', marginLeft: 10}}>
          <Text
            style={{lineHeight: 22, fontSize: 15, color: palette.mineShaftTwo}}>
            Received from Rise Plan{'\n'}(SAVE FOR SCHOOL)
          </Text>
          <Text>Jun 19, 2021</Text>
        </View>
        <View style={{alignSelf: 'center', width: '20%'}}>
          <Text
            style={{textAlign: 'right', lineHeight: 22, fontSize: 15, color: palette.mineShaftTwo}}>
            +$320.90
          </Text>
        </View>
      </View><View
        style={{
          marginTop: 5,
          marginBottom: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: 'rgba(76, 217, 100, 0.15)',
            borderRadius: 50,
            width: 40,
            height: 40,
            justifyContent: 'center',
          }}>
          <ARROWGREENSVG style={{width: 40, alignSelf: 'center'}} />
        </View>
        <View style={{width: '60%', marginLeft: 10}}>
          <Text
            style={{lineHeight: 22, fontSize: 15, color: palette.mineShaftTwo}}>
            Received from Bank{'\n'}Account (BOSUN TONY{'\n'}ADEMOSU)
          </Text>
          <Text>Jul 6, 2021</Text>
        </View>
        <View style={{alignSelf: 'center', width: '20%'}}>
          <Text
            style={{textAlign: 'right', lineHeight: 22, fontSize: 15, color: palette.mineShaftTwo}}>
            +$320.90
          </Text>
        </View>
      </View>
      <View style={{marginBottom: 120}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: palette.white,
    // alignItems: 'center',
  },
  backgroundImage: {
    // flex: 1,
    width: '100%',
    height: 160,
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
  addMoneyBtn: {
    width: '90%',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 18,
    backgroundColor: 'rgba(113.24, 134.71, 156.19, 0.10)',
    borderRadius: 5,
    margin: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  topNav: {
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    marginTop: 50,
  },
  innerText: {
    fontSize: 15,
    lineHeight: 22,
    color: palette.lynch,
  },
  straightRule: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(113, 135, 156, 0.2)',
    width: '90%',
  },
  totalEarnings: {
    fontSize: 15,
    color: palette.lynch,
    paddingVertical: 10,
  },
});
