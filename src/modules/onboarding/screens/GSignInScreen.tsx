import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {family, palette} from '../../../theme';
import {TextInput} from 'react-native-paper';
import PrimaryButton from '../../shared/components/PrimaryButton';

export default function GSignInScreen({navigation}: any) {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [proceed, setProceed] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  false;

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  };

  useEffect(() => {
    if (emailAddress !== '' && password !== '') {
      setProceed(true);
    }
  }, [proceed, emailAddress, password]);

  const handleSignUp = () => {
    navigation.navigate('DashboardStack');
  };

  // useEffect(() => {
  //   // validatePassword(password);
  // }, [password]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={palette.white} barStyle={'dark-content'} />
      <Text style={styles.headingText}>Welcome back</Text>
      <Text style={styles.bodyText}>
        Let's get you logged in to get back to building{'\n'}your
        dollar-denominated investment portfolio.
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
          <TextInput.Icon
            name={hidePassword ? 'eye-off' : 'eye'}
            color={palette.teal}
            // onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />

      <PrimaryButton
        textColor={palette.white}
        backgroundColor={proceed ? palette.teal : 'rgba(8, 152, 160, 0.3)'}
        onPrimaryButtonPress={() => {
          handleSignUp();
        }}
        title="Sign In"
      />

      <View style={{flex: 1, width: '90%'}}>
        <PrimaryButton
          textColor={palette.teal}
          backgroundColor={palette.white}
          onPrimaryButtonPress={() => {
            handleSignUp();
          }}
          title="I forgot my password"
          textWeight={'700'}
        />
      </View>

      <View style={styles.noAccount}>
        <Text style={styles.noAccountText}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DSignUpScreen');
          }}>
          <Text style={{color: palette.teal, ...styles.noAccountText}}>
            Sign Up
          </Text>
        </TouchableOpacity>
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
  noAccount: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  noAccountText: {
    fontWeight: '700',
    textAlign: 'center',
  },
});
