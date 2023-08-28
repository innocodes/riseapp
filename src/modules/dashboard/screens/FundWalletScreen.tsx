import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import {family, palette} from '../../../theme';
import PrimaryButton from '../../shared/components/PrimaryButton';
import CREATEPLANIMAGE from './../../../../assets/images/CreatePlanImage.png';
import CLOSESVG from './../../../../assets/images/svgs/CloseIcon.svg';
import CALENDARSVG from './../../../../assets/images/svgs/CalendarIcon.svg';
import SETTINGSSVG from './../../../../assets/images/svgs/SettingsIcon.svg';
import QUESTIONSVG from './../../../../assets/images/svgs/QuestionMark.svg';

export default function FundWalletScreen({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleContinueButton = () => {
    navigation.navigate('SelectPlanScreen');
    setModalVisible(false);
  };

  useEffect(() => {
    setModalVisible(true);
  }, []);

  return (
    <View style={styles.container}>
      {/* Semi-transparent overlay */}
      {modalVisible && <View style={styles.overlay} />}
      <StatusBar backgroundColor={modalVisible ? 'rgba(0, 0, 0, 0.0)' : palette.white} barStyle={'dark-content'} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                display: 'flex',
                width: '100%',
                // marginBottom: 15,
                padding: 15,
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 50,
                  backgroundColor: 'rgba(113.24, 134.71, 156.19, 0.10)',
                  justifyContent: 'center',
                  // flex: 1,
                  // marginRight: 20,
                }}>
                <CLOSESVG
                  style={{width: 15, height: 15, alignSelf: 'center'}}
                />
              </TouchableOpacity>
              <View style={{ justifyContent: 'center'}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '700',
                    color: palette.black,
                    lineHeight: 26,
                    marginLeft: 50,
                  }}>
                  About Exchange Rates
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
                <Text style={styles.totalEarningsTitle}>USD Buy Rate</Text>
                <Text style={styles.totalEarningsBody}>
                  We buy US dollars at this rate
                </Text>
              </View>
              <Text style={{color: palette.black, paddingVertical: 10}}>
                ₦490
              </Text>
            </View>
            <View style={styles.straightRule} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
              }}>
              <View>
                <Text style={styles.totalEarningsTitle}>USD Sell Rate</Text>
                <Text style={styles.totalEarningsBody}>
                  The current value of your investments in Naira
                </Text>
              </View>
              <Text style={{color: palette.black, paddingVertical: 10}}>₦490
              </Text>
            </View>
            <View style={styles.straightRule} />
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 11, lineHeight: 16, textAlign: 'center'}}>These exhange rates are provided by independent third parties{'\n'}who handle fund conversions at the prevailing parallel rates and{'\n'}are not set, or controlled or by Rise. They are subject to change{'\n'}based on market trends.</Text>
            </View>
            <View style={{marginTop: 20, width: '100%'}}>
              <PrimaryButton
                textColor={palette.white}
                backgroundColor={palette.teal}
                textWeight={'700'}
                onPrimaryButtonPress={() => {
                  handleContinueButton();
                }}
                title="Accept & Continue"
              />
            </View>
          </View>
        </View>
      </Modal>
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
          <CLOSESVG style={{width: 15, height: 15, alignSelf: 'center'}} />
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
            Fund Wallet
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginVertical: 5,
        }}>
        <View>
          <Text style={styles.totalEarningsTitle}>Naira Bank Transfer</Text>
          <Text style={styles.totalEarningsBody}>
            Timeline - 15 mins
          </Text>
        </View>
        <View>
          <Text style={{color: palette.black, paddingTop: 10}}>
            Rate - $1 = ₦490
          </Text><Text style={{color: palette.black}}>
          Fee - 1.5%
        </Text>
        </View>
      </View>
      <View style={styles.straightRule} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginVertical: 5,
        }}>
        <View>
          <Text style={styles.totalEarningsTitle}>Naira Debit Card</Text>
          <Text style={styles.totalEarningsBody}>
            Timeline - 15 mins
          </Text>
        </View>
        <View>
          <Text style={{color: palette.black, paddingTop: 10}}>
            Rate - $1 = ₦490
          </Text><Text style={{color: palette.black}}>
          Fee - 1.5%
        </Text>
        </View>
      </View>
      <View style={styles.straightRule} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginVertical: 5,
        }}>
        <View>
          <Text style={styles.totalEarningsTitle}>Naira Direct Debit</Text>
          <Text style={styles.totalEarningsBody}>
            Timeline - 15 mins
          </Text>
        </View>
        <View>
          <Text style={{color: palette.black, paddingTop: 10}}>
            Rate - $1 = ₦490
          </Text>
          <Text style={{color: palette.black}}>
        </Text>
        </View>
      </View>
      <View style={styles.straightRule} />


      <View style={{marginTop: 180, marginBottom: 30, width: '90%'}}>
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
  textSvg: {flex: 1, width: 60, height: 60, marginRight: 20},
  textTitle: {fontSize: 15, fontWeight: '700', color: palette.mineShaft},
  textDescription: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: palette.lynch,
    marginTop: 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    width: '100%',
    height: '63%',
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
    zIndex: 1, // Place the overlay behind the modal content
  },
});
