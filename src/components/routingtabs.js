/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './SampleText';
import Tab1 from './tab/tab1/tab1.js'

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Go to home tab"
    />
    <Button
      onPress={() => navigation.navigate('Settings')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <Tab1 />
);

MyHomeScreen.navigationOptions = {
  tabBarLabel: 'Кто мы?',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MyTicketScreen = ({ navigation }) => (
  <MyNavScreen banner="People Tab" navigation={navigation} />
);

MyTicketScreen.navigationOptions = {
 tabBarLabel: 'Билет',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MyLibraryScreen = ({ navigation }) => (
  <MyNavScreen banner="Chat Tab" navigation={navigation} />
);

MyLibraryScreen.navigationOptions = {
 tabBarLabel: 'Библиотека',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
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
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default RoutingTabs;


