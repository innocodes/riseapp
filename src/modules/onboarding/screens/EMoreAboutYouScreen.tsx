import React, {useState, useEffect} from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import {family, palette} from '../../../theme';
import {TextInput} from 'react-native-paper';
import PrimaryButton from '../../shared/components/PrimaryButton';
import {useDispatch} from 'react-redux';
import {registerUserAsync} from '../../shared/redux/slices/userSlice';
import GOBACKARROWSVG from "../../../../assets/images/svgs/GoBackArrow.svg";

export default function EMoreAboutYouScreen({navigation, route}: any) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [proceed, setProceed] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState('1995-11-06');
  const {emailAddress, password} = route?.params;
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(route?.params, ' ===route.params=== ');
  const [buttonBgColor, setButtonBgColor] = useState(palette.teal);

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

  const handleContinue = async () => {
    setIsLoading(true);
    setError(null);
    setButtonBgColor('rgba(8, 152, 160, 0.3)');

    // isLoading || !proceed || responseStatus !== 200
    const registrationData = {
      first_name: firstname,
      last_name: lastname,
      username: nickname,
      email_address: emailAddress,
      password: password,
      date_of_birth: dateOfBirth,
    };

    try {
      // @ts-ignore
      const response = await dispatch(registerUserAsync(registrationData));
      console.log('response in more about you screen:', response);
      setResponseStatus(response.status);
      if (response.payload == '200') {
        // console.log(
        //   'response.status in more about you screen:',
        //   response.payload,
        // );
        navigation.navigate('FAccountCreatedScreen');
      } else if (response.error.code == 'ERR_BAD_REQUEST') {
        setError(
          'Please check provided information. Some of the provided data might have been used before. Make sure to check the previous screen too.',
        );
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false); // Set loading back to false after API call
      setButtonBgColor(palette.teal);
    }
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

      <View style={{marginVertical: 10, width: '90%'}}>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>

      <PrimaryButton
        textColor={palette.white}
        backgroundColor={proceed ? buttonBgColor : 'rgba(8, 152, 160, 0.3)'}
        onPrimaryButtonPress={() => {
          handleContinue();
        }}
        title={isLoading ? 'Loading...' : 'Continue'}
        disabled={false}
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
    marginTop: 40,
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
  errorText: {
    color: palette.tallPoppy,
    fontSize: 13,
    textAlign: 'center',
  }
});
