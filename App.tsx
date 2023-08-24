/**
 * Rise App
 * Instructions: https://github.com/risevest/rn-dev-test
 * Submitted by: Innocent Oyebode @https://github.com/innocodes
 *
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingScreens} from './src/modules/onboarding/OnboardingNavigator';

export default function App() {
  const Stack = createStackNavigator();

  const screens = [...OnboardingScreens];
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        {screens.map((screen, index) => (
          <Stack.Screen
            key={index}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
