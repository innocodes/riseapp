import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  AccountScreen,
  DashboardScreen,
  FeedScreen,
  PlansScreen,
  WalletScreen,
  CreatePlanScreen,
  GoalNameScreen,
  TargetAmountScreen,
  TargetDateScreen,
  ReviewScreen,
  PlanCreatedScreen,
} from './screens';
import NavigationTab from './components/NavigationTab';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const dashboardTabs: {name: string; component: any}[] = [
  {name: 'DashboardScreen', component: DashboardScreen},
  {name: 'PlansScreen', component: PlansScreen},
  {name: 'FeedScreen', component: FeedScreen},
  {name: 'WalletScreen', component: WalletScreen},
  {name: 'AccountScreen', component: AccountScreen},
];

export const noTabDashboardScreens: {name: string; component: any}[] = [
  {name: 'CreatePlanScreen', component: CreatePlanScreen},
  {name: 'GoalNameScreen', component: GoalNameScreen},
  {name: 'TargetAmountScreen', component: TargetAmountScreen},
  {name: 'TargetDateScreen', component: TargetDateScreen},
  {name: 'ReviewScreen', component: ReviewScreen},
  {name: 'PlanCreatedScreen', component: PlanCreatedScreen},
];

export const DashboardTabs = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="DashboardScreen"
      tabBar={(props: any) => <NavigationTab {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
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

export const DashboardStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={DashboardTabs}
      options={{headerShown: false}}
    />
    {/* Screens where you want to hide the tab bar */}

    {noTabDashboardScreens.map((screen, index) => (
      <Stack.Screen
        key={index}
        name={screen.name}
        component={screen.component}
        options={{
          tabBarVisible: false,
          headerShown: false,
      }}
      />
    ))}
    {/* ... */}
  </Stack.Navigator>
);

export const dashboardScreens: {name: string; component: any}[] = [
  // {name: 'DashboardTabs', component: DashboardTabs},
  {name: 'DashboardStack', component: DashboardStack},
];
