import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  AccountScreen,
  DashboardScreen,
  FeedScreen,
  PlansScreen,
  WalletScreen,
} from './screens';
import NavigationTab from './components/NavigationTab';

const Tab = createBottomTabNavigator();

export const dashboardTabs: {name: string; component: any}[] = [
  {name: 'DashboardScreen', component: DashboardScreen},
  {name: 'PlansScreen', component: PlansScreen},
  {name: 'FeedScreen', component: FeedScreen},
  {name: 'WalletScreen', component: WalletScreen},
  {name: 'AccountScreen', component: AccountScreen},
];

export const DashboardTabs = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="DashboardScreen"
      tabBar={(props: any) => <NavigationTab {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      {dashboardTabs.map((screen, index) => (
        <Tab.Screen
          key={index}
          options={
            {
              // gestureEnabled: false
            }
          }
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export const dashboardScreens: {name: string; component: any}[] = [
  {name: 'DashboardTabs', component: DashboardTabs},
];
