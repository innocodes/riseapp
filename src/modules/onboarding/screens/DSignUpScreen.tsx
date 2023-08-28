import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {family, palette} from '../../../theme';
import {TextInput} from 'react-native-paper';
import PrimaryButton from '../../shared/components/PrimaryButton';
import CustomCheckbox from '../components/CustomCheckbox';

export default function DSignUpScreen({navigation}: any) {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [proceed, setProceed] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [isMinLengthValid, setIsMinLengthValid] = useState(false);
  const [isUppercaseValid, setIsUppercaseValid] = useState(false);
  const [isSpecialCharacterValid, setIsSpecialCharacterValid] = useState(false);
  const [passwordOkay, setPasswordOkay] = useState(false);

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (value: string) => {
    console.log('Validating password:', value);
    setIsMinLengthValid(value.length >= 8);
    setIsUppercaseValid(/[A-Z]/.test(value));
    setIsSpecialCharacterValid(/[!@#$%^&*?]/.test(value));
  };

  useEffect(() => {
    if (isMinLengthValid && isUppercaseValid && isSpecialCharacterValid) {
      setPasswordOkay(true);
    } else {
      setPasswordOkay(false);
    }
    if (emailAddress !== '' && passwordOkay) {
      setProceed(true);
    }
  }, [
    isMinLengthValid,
    isUppercaseValid,
    isSpecialCharacterValid,
    proceed,
    emailAddress,
    passwordOkay,
  ]);

  const handleSignUp = () => {
    navigation.navigate('EMoreAboutYouScreen');
  };

  // useEffect(() => {
  //   // validatePassword(password);
  // }, [password]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={palette.white} barStyle={'dark-content'} />
      <Text style={styles.headingText}>Create an account</Text>
      <Text style={styles.bodyText}>
        Start building your dollar-denominated {'\n'}investment portfolio{' '}
      </Text>

      {/*Email Input*/}
      <TextInput
        style={styles.textInputBody}
        mode="outlined"
        label="Email address"
        value={emailAddress}
        onChangeText={txt => {
          setEmailAddress(txt);
        }}
        selectionColor="#0898A0"
        outlineColor="#cdcdcd"
      />

      {/*Password Input*/}
      <TextInput
        style={{...styles.textInputBody, marginBottom: 20}}
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={txt => handlePasswordChange(txt)}
        secureTextEntry={true}
        selectionColor="#2E6DA8"
        outlineColor="#cdcdcd"
        right={
          // <TextInput.Icon
            // name={hidePassword ? 'eye-off' : 'eye'}
            // color={palette.teal}
            // onPress={() => setHidePassword(!hidePassword)}
            // icon={hidePassword ? 'eye-off' : 'eye'}
            // icon={'eye'}
          {/*/>*/}
        }
      />

      <View style={styles.check}>
        <CustomCheckbox checked={isMinLengthValid} />
        <Text style={styles.checkboxText}>Minimum of 8 characters</Text>
      </View>
      <View style={styles.check}>
        <CustomCheckbox checked={isUppercaseValid} />
        <Text style={styles.checkboxText}>One UPPERCASE character</Text>
      </View>
      <View style={{...styles.check, marginBottom: 15}}>
        <CustomCheckbox checked={isSpecialCharacterValid} />
        <Text style={styles.checkboxText}>
          One unique character (e.g. !@#$%^&*?)
        </Text>
      </View>

      <PrimaryButton
        textColor={palette.white}
        backgroundColor={proceed ? palette.teal : 'rgba(8, 152, 160, 0.3)'}
        onPrimaryButtonPress={() => {
          handleSignUp();
        }}
        title="Sign Up"
      />
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
});
