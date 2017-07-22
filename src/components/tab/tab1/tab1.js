import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'
import ContactList from './contact.list.js'
import ContactDetails from './contact.details.js'

const Tab1 = StackNavigator({
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

export default Tab1
