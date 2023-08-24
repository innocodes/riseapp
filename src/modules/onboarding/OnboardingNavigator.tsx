import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  AQualityAssetsScreen,
  BSuperiorSelectionScreen,
  CBetterPerformanceScreen,
  DSignUpScreen,
  EMoreAboutYouScreen,
  FAccountCreatedScreen,
} from './screens';

const onboardingStoriesScreens: {name: string; component: any}[] = [
  {name: 'AQualityAssetsScreen', component: AQualityAssetsScreen},
  {name: 'BSuperiorSelectionScreen', component: BSuperiorSelectionScreen},
  {name: 'CBetterPerformanceScreen', component: CBetterPerformanceScreen},
  {name: 'DSignUpScreen', component: DSignUpScreen},
  {name: 'EMoreAboutYouScreen', component: EMoreAboutYouScreen},
  {name: 'FAccountCreatedScreen', component: FAccountCreatedScreen},
];

export const OnboardStories = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {onboardingStoriesScreens.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export const OnboardingScreens: {name: string; component: any}[] = [
  {name: 'SplashScreen', component: SplashScreen},
  {name: 'OnboardStories', component: OnboardStories},
];
