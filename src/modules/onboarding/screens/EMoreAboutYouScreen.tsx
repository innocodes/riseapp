import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {family, palette} from '../../../theme';
import {TextInput} from 'react-native-paper';
import PrimaryButton from '../../shared/components/PrimaryButton';
import CustomCheckbox from '../components/CustomCheckbox';

export default function EMoreAboutYouScreen({navigation}: any) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [proceed, setProceed] = useState(false);

  useEffect(() => {
    if (
      firstname !== '' &&
      lastname !== '' &&
      nickname !== '' &&
      phoneNumber !== ''
    ) {
      setProceed(true);
    }
  }, [firstname, lastname, nickname, phoneNumber, proceed]);

  const handleContinue = () => {
    navigation.navigate('FAccountCreatedScreen');
  };

  // useEffect(() => {
  //   // validatePassword(password);
  // }, [password]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={palette.white} barStyle={'dark-content'} />
      <Text style={styles.headingText}>Tell Us More About You</Text>
      <Text style={styles.bodyText}>
        Please use your name as it appears on your ID.
      </Text>

      {/*Legal First Name Input*/}
      <TextInput
        style={styles.textInputBody}
        mode="outlined"
        label="Legal First Name"
        value={firstname}
        onChangeText={txt => {
          setFirstname(txt);
        }}
        selectionColor="#0898A0"
        outlineColor="#cdcdcd"
      />

      {/*Legal Last Name Input*/}
      <TextInput
        style={styles.textInputBody}
        mode="outlined"
        label="Legal Last Name"
        value={lastname}
        onChangeText={txt => {
          setLastname(txt);
        }}
        selectionColor="#0898A0"
        outlineColor="#cdcdcd"
      />

      {/*Nick Name Input*/}
      <TextInput
        style={styles.textInputBody}
        mode="outlined"
        label="Nick name"
        value={nickname}
        onChangeText={txt => {
          setNickname(txt);
        }}
        selectionColor="#0898A0"
        outlineColor="#cdcdcd"
      />

      {/*Phone Number Input*/}
      <TextInput
        style={styles.textInputBody}
        mode="outlined"
        label="Phone Number"
        value={phoneNumber}
        keyboardType="numeric"
        onChangeText={txt => {
          setPhoneNumber(txt);
        }}
        selectionColor="#0898A0"
        outlineColor="#cdcdcd"
      />



      <PrimaryButton
        textColor={palette.white}
        backgroundColor={proceed ? palette.teal : 'rgba(8, 152, 160, 0.3)'}
        onPrimaryButtonPress={() => {
          handleContinue();
        }}
        title="Continue"
      />

      <Text style={styles.terms}>
        By clicking Continue, you agree to our {'\n'}
        <Text style={styles.privacy}>Terms of Service</Text> and{' '}
        <Text style={styles.privacy}>Privacy Policy.</Text>
      </Text>
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
    marginTop: 80,
    width: '90%',
    fontWeight: '500',
    textAlign: 'left',
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
  },
  textInputBody: {
    marginTop: 10,
    width: '90%',
    fontSize: 15,
    fontWeight: '700',
    backgroundColor: '#fff',
    color: palette.outerSpace,
  },
  check: {
    margin: 4,
    marginLeft: '6%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkboxText: {
    marginLeft: 10,
    width: '90%',
    fontSize: 13,
    fontWeight: '400',
    backgroundColor: '#fff',
    color: palette.black,
    lineHeight: 19,
    fontFamily: family.DMSans,
  },
  terms: {
    fontSize: 12,
    fontWeight: '400',
    color: palette.daintree,
    lineHeight: 20,
    textAlign: 'center',
  },
  privacy: {
    color: palette.teal,
  },
});
