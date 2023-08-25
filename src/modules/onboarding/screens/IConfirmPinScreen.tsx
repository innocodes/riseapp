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
import GOBACKARROWSVG from '../../../../assets/images/svgs/GoBackArrow.svg';
import PinInput from '../components/PinInput';

export default function IConfirmPinScreen({navigation}: any) {
  const [proceed, setProceed] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [value, setValue] = useState('');
  false;

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  };

  useEffect(() => {
    if(value.length == 6) {
      console.log('Pin complete');
      navigation.navigate('JPinCreatedScreen');
    } else {
      console.log('pin incomplete')
    }
  }, [proceed, value]);

  const handleSignUp = () => {
    navigation.navigate('EMoreAboutYouScreen');
  };

  // useEffect(() => {
  //   // validatePassword(password);
  // }, [password]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={palette.white} barStyle={'dark-content'} />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          width: 36,
          height: 36,
          marginTop: 20,
          borderRadius: 50,
          backgroundColor: 'rgba(113, 135, 156, 0.1)',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          marginLeft: 20,
        }}>
        <GOBACKARROWSVG style={{width: 40, alignSelf: 'center'}} />
      </TouchableOpacity>
      <Text style={styles.headingText}>Confirm 6-digit PIN</Text>
      <Text style={styles.bodyText}>
        You will use this pin to sign in and confirm{'\n'}transactions.
      </Text>
      {/*<TextInput value={value} />*/}
      <PinInput value={value} onChangeText={val => setValue(val)} />
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
    marginTop: 22,
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
  input: {
    padding: 10,
    backgroundColor: '#ddd',
    width: '50%',
    borderRadius: 20,
    fontSize: 20,
    letterSpacing: 20,
    textAlign: 'center',
  },
});
