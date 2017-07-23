/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WeStack from './tab/tab1/weStack.js'
import TicketStack from './tab/tab2/ticketStack.js'
import GemsStack from './tab/tab3/gemsStack.js'

const MyHomeScreen = ({ navigation }) => (
  <WeStack />
);

MyHomeScreen.navigationOptions = {
  tabBarLabel: 'Кто мы?',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-planet' : 'ios-planet-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MyTicketScreen = ({ navigation }) => (
  <TicketStack />
);

MyTicketScreen.navigationOptions = {
 tabBarLabel: 'Билет',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-key' : 'ios-key-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MyGemsScreen = ({ navigation }) => (
  <GemsStack />
);

MyGemsScreen.navigationOptions = {
 tabBarLabel: 'Сокровища',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-bookmarks' : 'ios-bookmarks-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const RoutingTabs = TabNavigator(
  {
    Home: {
      screen: MyHomeScreen,
      path: '',
    },
    Ticket: {
      screen: MyTicketScreen,
      path: 'ticket',
    },
    Gems: {
      screen: MyGemsScreen,
      path: 'gems',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#BF813E' : '#fff',
    },
   initialRouteName: 'Gems',
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default RoutingTabs;
