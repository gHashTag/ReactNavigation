/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WeStack from './tab/tab1/weStack.js'
import TicketStack from './tab/tab2/ticketStack.js'
import LibraryStack from './tab/tab3/libraryStack.js'

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

const MyLibraryScreen = ({ navigation }) => (
  <LibraryStack />
);

MyLibraryScreen.navigationOptions = {
 tabBarLabel: 'Библиотека',
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
    Library: {
      screen: MyLibraryScreen,
      path: 'library',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#BF813E' : '#fff',
    },
   initialRouteName: 'Library'
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default RoutingTabs;
