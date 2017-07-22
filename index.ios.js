import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import ContactList from './src/components/contact.list.js'
import ContactDetails from './src/components/contact.details.js'

const ReactNavigation = StackNavigator({
  Home: { screen: ContactList },
  ContactDetails: { screen: ContactDetails }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#fff'
        },
        headerTitleStyle: {
          fontFamily: 'AppleSDGothicNeo-Light',
          paddingTop: 3,
          fontSize: 16,
          fontWeight: '100',
          color: '#000'
        },
        headerTintColor: '#000',
        headerBackTitleStyle: {
          color: '#474747'
        }
    }
});


AppRegistry.registerComponent('ReactNavigation', () => ReactNavigation);
